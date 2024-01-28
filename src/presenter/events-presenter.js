import {render, remove, RenderPosition} from '../framework/render.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EmptyView from '../view/empty-view.js';
import LoadingView from '../view/loading-view.js';
import EventPresenter from './event-presenter.js';
import { FilterTypes, SortTypes, UserActions, UpdateTypes } from '../const.js';
import { sortEventsByDay, sortEventsByPrice, sortEventsByDuration } from '../utils/event-utils.js';
import {filter} from '../utils/filter-utils.js';
import TripInfoView from '../view/trip-info.js';
import NewEventPresenter from './new-event-presenter.js';
import PointsLoadErrorView from '../view/points-load-error-view.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class EventsPresenter {
  #eventsContainer = null;
  #headerContainer = null;
  #eventsModel = null;
  #filterModel = null;

  #tripInfoComponent = null;
  #tripSortComponent = null;
  #eventListComponent = new EventsListView();
  #noEventsComponent = null;
  #loadingComponent = new LoadingView();
  #pointsLoadErrorComponent = new PointsLoadErrorView();

  #eventPresenters = new Map();
  #newEventPresenter = null;
  #currentSortType = SortTypes.DAY;
  #filterType = FilterTypes.EVERYTHING;
  #isLoading = true;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT,
  });

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
    this.#renderEventsListContainer();
    this.#renderEventsBoard();
  }

  createEvent(onNewEventDestroy) {
    this.#newEventPresenter = new NewEventPresenter({
      eventListContainer: this.#eventListComponent.element,
      offers: this.offers,
      destinations: this.destinations,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewEventDestroy,
    });

    this.#currentSortType = SortTypes.DAY;
    this.#filterModel.setFilter(UpdateTypes.MAJOR, FilterTypes.EVERYTHING);

    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }

    this.#newEventPresenter.init();
  }

  //Метод чтобы передать его в main и обработать отмену создания нового поинта при пустом массиве поинтов
  rerenderNoEventsComponent() {
    if (this.events.length === 0) {
      this.#renderNoEvents();
    }
  }

  #handleModeChange = () => {
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  //Обрабатываем изменения во вьюшках и модели
  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserActions.UPDATE_EVENT:
        this.#eventPresenters.get(update.id).setSaving();
        try {
          await this.#eventsModel.updateEvent(updateType, update);
        } catch(err) {
          this.#eventPresenters.get(update.id).setAborting();
        }

        this.#renderTripInfo();
        break;
      case UserActions.ADD_EVENT:
        this.#newEventPresenter.setSaving();

        try {
          await this.#eventsModel.addEvent(updateType, update);
        } catch(err) {
          this.#newEventPresenter.setAborting();
        }

        this.#renderTripInfo();
        break;
      case UserActions.DELETE_EVENT:
        this.#eventPresenters.get(update.id).setDeleting();
        try {
          await this.#eventsModel.deleteEvent(updateType, update);
        } catch(err) {
          this.#eventPresenters.get(update.id).setAborting();
        }

        this.#renderTripInfo();

        break;
    }

    this.#uiBlocker.unblock();
  };

  #handleModelEvent = (updateType, data) => {

    switch (updateType) {
      case UpdateTypes.PATCH:
        this.#eventPresenters.get(data.id).init(data);
        break;

      case UpdateTypes.MINOR:
        this.#clearEventsBoard({resetSortType: false});
        this.#renderTripInfo();
        this.#renderEventsBoard();
        break;

      case UpdateTypes.MAJOR:
        this.#clearEventsBoard({resetSortType: true});
        this.#renderEventsBoard();
        break;

      case UpdateTypes.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderTripInfo();
        this.#renderEventsBoard();
        break;

      case UpdateTypes.POINTS_LOAD_ERROR:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        remove(this.#noEventsComponent);
        this.#renderPointsLoadError();
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
    this.#clearEventsBoard({resetSortType: false});
    // - Рендерим доску с поинтами по новой
    this.#renderEventsBoard();
  };

  #renderEventsListContainer() {
    render(this.#eventListComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
  }

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
    this.events.forEach((event) => this.#renderEvent(event));
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
  }

  #renderPointsLoadError() {
    render(this.#pointsLoadErrorComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
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
    remove(this.#loadingComponent);

    if (this.#noEventsComponent) {
      remove(this.#noEventsComponent);
    }

    if (resetSortType) {
      this.#currentSortType = SortTypes.DAY;
    }
  }

  #renderEventsBoard() {
    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (this.events.length === 0) {
      this.#renderNoEvents();
      return;
    }

    this.#renderTripSort();
    this.#renderEventsList();
  }

}
