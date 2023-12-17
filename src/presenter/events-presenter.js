import {render} from '../render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';

export default class EventsPresenter {
  eventListComponent = new EventsListView();

  constructor({eventsContainer, eventsModel}) {
    this.eventsContainer = eventsContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];
    this.offers = this.eventsModel.getOffers();
    this.destinations = this.eventsModel.getDestinations();

    render(new TripSortView, this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);

    render(new EventEditView({event: this.events[1], offers: this.offers, destinations: this.destinations}), this.eventListComponent.getElement());

    for (let i = 0; i < this.events.length; i++) {
      //const currentEventOffers = this.offers.find((offer) => offer.type === this.events[i].type);
      //console.log(currentEventOffers);
      render(new EventView({event: this.events[i], offers: this.offers, destinations: this.destinations}), this.eventListComponent.getElement());
    }
  }
}
