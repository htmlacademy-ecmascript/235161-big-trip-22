import {render} from '../render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EventView from '../view/event.js';
import EventAddView from '../view/event-add.js';
import EventEditView from '../view/event-edit.js';

const EVENTS_TO_RENDER = 3;

export default class EventsPresenter {
  eventListComponent = new EventsListView();

  constructor({eventsContainer}) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new TripSortView, this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);

    render(new EventEditView(), this.eventListComponent.getElement());
    render(new EventAddView(), this.eventListComponent.getElement());

    for (let i = 0; i < EVENTS_TO_RENDER; i++) {
      render(new EventView(), this.eventListComponent.getElement());
    }
  }
}
