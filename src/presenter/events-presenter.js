import {render, replace} from '../framework/render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';
import EmptyView from '../view/empty-view.js';

export default class EventsPresenter {
  #eventsContainer = null;
  #eventsModel = null;

  constructor({eventsContainer, eventsModel}) {
    this.#eventsContainer = eventsContainer;
    this.#eventsModel = eventsModel;
  }

  #eventListComponent = new EventsListView();

  #events = [];
  #offers = [];
  #destinations = [];

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];

    if (this.#events.length === 0) {
      render(new EmptyView, this.#eventsContainer);
      return;
    }

    render(new TripSortView, this.#eventsContainer);
    render(this.#eventListComponent, this.#eventsContainer);

    this.#events.forEach((event) => this.#renderEvent(event));
  }

  #renderEvent(point) {

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
  }
}
