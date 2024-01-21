import {render, remove, RenderPosition} from '../framework/render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EmptyView from '../view/empty-view.js';
import EventPresenter from './event-presenter.js';
import { FilterTypes, SortTypes, UserActions, UpdateTypes } from '../const.js';
import { sortEventsByDay, sortEventsByPrice, sortEventsByDuration } from '../utils/event-utils.js';
import {filter} from '../utils/filter-utils.js';
import TripInfoView from '../view/trip-info.js';
import NewEventPresenter from './new-event-presenter.js';

export default class EventsPresenter {
  #eventsContainer = null;
  #eventsModel = null;
  #filterModel = null;

  #tripInfoComponent = null;
  #tripSortComponent = null;
  #eventListComponent = new EventsListView();
  #noEventsComponent = null;

  #eventPresenters = new Map();
  #newEventPresenter = null;
  #currentSortType = SortTypes.DAY;
  #filterType = FilterTypes.EVERYTHING;


  #headerContainer = null;


  constructor({eventsContainer, headerContainer, eventsModel, filterModel, onNewEventDestroy}) {
    this.#eventsContainer = eventsContainer;
    this.#headerContainer = headerContainer;
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;


    this.#newEventPresenter = new NewEventPresenter({
      eventListContainer: this.#eventListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewEventDestroy,
    });

    //Подписываемся на изменения модели
    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get events() {
    this.#filterType = this.#filterModel.filter;
    const events = this.#eventsModel.events;
    const filteredEvents = filter[this.#filterType](events);

    switch (this.#currentSortType) {
      case SortTypes.DAY:
        return filteredEvents.sort(sortEventsByDay);

      case SortTypes.PRICE:
        return filteredEvents.sort(sortEventsByPrice);

      case SortTypes.TIME:
        return filteredEvents.sort(sortEventsByDuration);
    }

    return filteredEvents;
  }

  get offers() {
    return [...this.#eventsModel.offers];
  }

  get destinations() {
    return [...this.#eventsModel.destinations];
  }

  init() {
    this.#renderTripInfo();

    this.#renderEventsBoard();
  }

  createEvent() {
    this.#currentSortType = SortTypes.DAY;
    this.#filterModel.setFilter(UpdateTypes.MAJOR, FilterTypes.EVERYTHING);
    this.#newEventPresenter.init();
  }

  #handleModeChange = () => {
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  //Обрабатываем изменения во вьюшках и модели
  #handleViewAction = (actionType, updateType, update) => {

    switch (actionType) {
      case UserActions.UPDATE_EVENT:
        this.#eventsModel.updateEvent(updateType, update);
        break;
      case UserActions.ADD_EVENT:
        this.#eventsModel.addEvent(updateType, update);
        break;
      case UserActions.DELETE_EVENT:
        this.#eventsModel.deleteEvent(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {

    // В зависимости от типа изменений решаем, что делать:
    switch (updateType) {
      case UpdateTypes.PATCH:
        // - обновить часть списка (например, когда поменялось описание)
        this.#eventPresenters.get(data.id).init(data);
        break;

      case UpdateTypes.MINOR:
        this.#renderTripInfo();
        this.#clearEventsBoard({resetSortType: false});
        this.#renderEventsBoard();
        break;

      case UpdateTypes.MAJOR:
        this.#renderTripInfo();
        this.#clearEventsBoard({resetSortType: true});
        this.#renderEventsBoard();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {

    if (this.#currentSortType === sortType) {
      return;
    }
    // - Меняем активный тип сортировки
    this.#currentSortType = sortType;
    // - Очищаем список
    this.#clearEventsList();
    // - Рендерим список заново
    this.#renderEventsList();
  };

  #renderTripInfo() {
    if (this.#tripInfoComponent) {
      remove(this.#tripInfoComponent);
    }

    if (this.events.length === 0) {
      return;
    }

    this.#tripInfoComponent = new TripInfoView({
      events: this.events,
      offers: this.offers,
      destinations: this.destinations
    });

    render(this.#tripInfoComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
  }

  #renderTripSort() {
    this.#tripSortComponent = new TripSortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#tripSortComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);
  }

  #renderEventsList() {
    render(this.#eventListComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
    this.events.forEach((event) => this.#renderEvent(event));
  }

  #renderNoEvents() {
    this.#noEventsComponent = new EmptyView({
      filterType: this.#filterType,
    });
    render(this.#noEventsComponent, this.#eventsContainer);
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter({
      eventsListContainer: this.#eventListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    eventPresenter.init(event);
    this.#eventPresenters.set(event.id, eventPresenter);

  }

  #clearEventsList() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #clearEventsBoard({resetSortType = false}) {
    this.#newEventPresenter.destroy();
    this.#clearEventsList();

    remove(this.#tripSortComponent);

    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortTypes.DAY;
    }
  }

  #renderEventsBoard() {

    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderTripSort();
    this.#renderEventsList();
  }

}
