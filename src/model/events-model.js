import {getRandomEvent} from '../mock/event.js';
import {mockOffers} from '../mock/offer.js';

const EVENTS_COUNT = 3;

export default class EventsModel {
  events = Array.from({length: EVENTS_COUNT}, getRandomEvent);
  offers = mockOffers;

  getEvents() {
    return this.events;
  }

  getOffers() {
    return this.offers;
  }
}
