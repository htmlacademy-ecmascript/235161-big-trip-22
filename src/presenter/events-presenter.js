import {render} from '../render.js';
import EventsListView from '../view/events-list.js';
import TripSortView from '../view/trip-sort.js';
import EventView from '../view/event.js';
import EventAddView from '../view/event-add.js';
import EventEditView from '../view/event-edit.js';

export default class EventsPresenter {
  eventListComponent = new EventsListView();

  constructor({eventsContainer, eventsModel}) {
    this.eventsContainer = eventsContainer;
    this.eventsModel = eventsModel;
  }

  init() {
    this.events = [...this.eventsModel.getEvents()];
    //console.log(this.events);

    render(new TripSortView, this.eventsContainer);
    render(this.eventListComponent, this.eventsContainer);

    render(new EventEditView(), this.eventListComponent.getElement());
    render(new EventAddView(), this.eventListComponent.getElement());

    for (let i = 0; i < this.events.length; i++) {
      render(new EventView({event: this.events[i]}), this.eventListComponent.getElement());
    }
  }
}
