import {render} from '../framework/render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';

export default class EventsPresenter {
  #eventListComponent = new EventsListView();

  #eventsContainer = null;
  #eventsModel = null;

  constructor({eventsContainer, eventsModel}) {
    this.#eventsContainer = eventsContainer;
    this.#eventsModel = eventsModel;
  }

  #events = [];
  #offers = [];
  #destinations = [];

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];

    render(new TripSortView, this.#eventsContainer);
    render(this.#eventListComponent, this.#eventsContainer);

    render(new EventEditView({event: this.#events[1], offers: this.#offers, destinations: this.#destinations}), this.#eventListComponent.element);

    for (let i = 0; i < this.#events.length; i++) {
      render(new EventView({event: this.#events[i], offers: this.#offers, destinations: this.#destinations}), this.#eventListComponent.element);
    }
  }
}
