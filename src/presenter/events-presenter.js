import {render, RenderPosition} from '../framework/render.js';
import { updateItem } from '../utils/common.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EmptyView from '../view/empty-view.js';
import EventPresenter from './event-presenter.js';
import { SortTypes } from '../const.js';
import { sortEventsByDay, sortEventsByPrice, sortEventsByDuration } from '../utils/event-utils.js';

export default class EventsPresenter {
  #eventsContainer = null;
  #eventsModel = null;

  #eventListComponent = new EventsListView();
  //#tripSortComponent = new TripSortView();
  #tripSortComponent = null;
  #noEventsComponent = new EmptyView();

  #events = [];
  #offers = [];
  #destinations = [];
  #eventPresenters = new Map();
  //Тут новая фигня для сортировки
  #currentSortType = SortTypes.DAY;
  #sourcedEvents = [];
  //Конец новой фигни
  constructor({eventsContainer, eventsModel}) {
    this.#eventsContainer = eventsContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];
    //Новая фигня для сортировки
    this.#sourcedEvents = [...this.#eventsModel.events];
    //this.#events.sort(sortEventsByDay);
    //Конец новой фигни
    this.#renderTripSort();
    this.#renderEventsBoard();
  }

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleEventChange = (updatedEvent) => {
    this.#events = updateItem(this.#events, updatedEvent);
    //Новая фигня для сортировки
    this.#sourcedEvents = updateItem(this.#sourcedEvents, updatedEvent);
    //Конец новой фигни
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };

  #sortEvents(sortType) {
    switch (sortType){

      case SortTypes.DAY:
        this.#events.sort(sortEventsByDay);
        break;

      case SortTypes.PRICE:
        this.#events.sort(sortEventsByPrice);
        break;

      case SortTypes.TIME:
        this.#events.sort(sortEventsByDuration);
        break;

      default:
        this.#events = [...this.#sourcedEvents];

    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    // - Сортируем задачи
    this.#sortEvents(sortType);
    // - Очищаем список
    this.#clearEventsList();
    // - Рендерим список заново
    this.#renderEventsList();
  };

  #renderTripSort() {
    this.#tripSortComponent = new TripSortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#tripSortComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);
  }

  #renderEventsList() {
    render(this.#eventListComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
    this.#events.forEach((event) => this.#renderEvent(event));
  }

  #renderNoEvents() {
    render(this.#noEventsComponent, this.#eventsContainer);
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter({
      eventsListContainer: this.#eventListComponent.element,
      offers: this.#offers,
      destinations: this.#destinations,
      onDataChange: this.#handleEventChange,
      onModeChange: this.#handleModeChange,
    });

    eventPresenter.init(event);
    this.#eventPresenters.set(event.id, eventPresenter);

  }

  #clearEventsList() {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #renderEventsBoard() {

    if (this.#events.length === 0) {
      this.#renderNoEvents();
      return;
    }

    //this.#renderTripSort();
    this.#renderEventsList();
  }

}
