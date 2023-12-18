import {getRandomEvent} from '../mock/event.js';
import {mockOffers} from '../mock/offer.js';
import {mockDestinations} from '../mock/destination.js';

const EVENTS_COUNT = 5;

export default class EventsModel {
  #events = Array.from({length: EVENTS_COUNT}, getRandomEvent);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get events() {
    return this.#events;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
