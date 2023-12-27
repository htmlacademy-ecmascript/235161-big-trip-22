import {render, /*replace,*/ RenderPosition} from '../framework/render.js';
import { updateItem } from '../utils/common.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
//import EventView from '../view/event.js';
//import EventEditView from '../view/event-edit.js';
import EmptyView from '../view/empty-view.js';
import EventPresenter from './event-presenter.js';

export default class EventsPresenter {
  #eventsContainer = null;
  #eventsModel = null;

  #eventListComponent = new EventsListView();
  #tripSortComponent = new TripSortView();
  #noEventsComponent = new EmptyView();

  #events = [];
  #offers = [];
  #destinations = [];
  #eventPresenters = new Map();

  constructor({eventsContainer, eventsModel}) {
    this.#eventsContainer = eventsContainer;
    this.#eventsModel = eventsModel;
  }

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];
    /*
    if (this.#events.length === 0) {
      render(this.#noEventsComponent, this.#eventsContainer);
      return;
    }

    render(this.#eventListComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);
    render(this.#tripSortComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);

    this.#events.forEach((event) => this.#renderEvent(event));
    */
    this.#renderEventsBoard();
  }

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleEventChange = (updatedEvent) => {
    this.#events = updateItem(this.#events, updatedEvent);
    this.#eventPresenters.get(updatedEvent.id).init(updatedEvent);
  };

  #renderEventsList() {
    render(this.#eventListComponent, this.#eventsContainer, RenderPosition.BEFOREEND);
    this.#events.forEach((event) => this.#renderEvent(event));
  }

  #renderTripSort() {
    render(this.#tripSortComponent, this.#eventsContainer, RenderPosition.AFTERBEGIN);
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
    /*
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventComponent = new EventView({
      event: point,
      offers: this.#offers,
      destinations: this.#destinations,
      onRoullupClick: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const eventEditComponent = new EventEditView({
      event: point,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceEventToForm() {
      replace(eventEditComponent, eventComponent);
    }

    function replaceFormToEvent() {
      replace(eventComponent, eventEditComponent);
    }

    render(eventComponent, this.#eventListComponent.element);
    */
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

    this.#renderTripSort();
    this.#renderEventsList();
  }

}
