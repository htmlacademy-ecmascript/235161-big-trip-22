import Observable from '../framework/observable.js';
import { UpdateTypes } from '../const.js';
//import {getRandomEvent} from '../mock/event.js';
//import {mockOffers} from '../mock/offer.js';
//import {mockDestinations} from '../mock/destination.js';

//const EVENTS_COUNT = 3;

export default class EventsModel extends Observable {
  #eventsApiService = null;

  #events = [];//Array.from({length: EVENTS_COUNT}, getRandomEvent);
  #offers = [];//mockOffers;
  #destinations = [];//mockDestinations;

  constructor({eventsApiService}) {
    super();
    this.#eventsApiService = eventsApiService;
  }

  get events() {
    return this.#events;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      const events = await this.#eventsApiService.events;
      this.#events = events.map(this.#adaptToClient);
    } catch(err) {
      //console.log('Ошибка');
      this.#events = [];
    }

    try {
      const offers = await this.#eventsApiService.offers;
      this.#offers = offers;
    } catch(err) {
      //console.log('Ошибка офферов');
      this.#offers = [];
    }

    try {
      const destinations = await this.#eventsApiService.destinations;
      this.#destinations = destinations;
    } catch(err) {
      //console.log('Ошибка дестинейшенов');
      this.#destinations = [];
    }

    this._notify(UpdateTypes.INIT);
  }

  async updateEvent(updateType, update) {
    const index = this.#events.findIndex((event) => event.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting event');
    }

    try {
      const response = await this.#eventsApiService.updateEvent(update);
      const updatedEvent = this.#adaptToClient(response);

      this.#events = [
        ...this.#events.slice(0, index),
        updatedEvent,
        ...this.#events.slice(index + 1),
      ];
      this._notify(updateType, updatedEvent);
    } catch(err) {
      throw new Error('Can\'t update task');
    }
  }

  async addEvent(updateType, update) {
    try {
      const response = await this.#eventsApiService.addEvent(update);
      const newEvent = this.#adaptToClient(response);
      this.#events = [newEvent, ...this.#events];
      this._notify(updateType, newEvent);
    } catch(err) {
      throw new Error('Can\'t add task');
    }
  }

  async deleteEvent(updateType, update) {
    const index = this.#events.findIndex((event) => event.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting event');
    }

    try {
      await this.#eventsApiService.deleteEvent(update);

      this.#events = [
        ...this.#events.slice(0, index),
        ...this.#events.slice(index + 1),
      ];

      this._notify(updateType);
    } catch(err) {
      throw new Error('Can\'t delete task');
    }
  }

  #adaptToClient(event) {
    const adaptedEvent = {...event,
      basePrice: event['base_price'],
      dateFrom: event['date_from'] !== null ? new Date(event['date_from']) : event['date_from'],
      dateTo: event['date_to'] !== null ? new Date(event['date_to']) : event['date_to'],
      isFavorite: event['is_favorite'],
    };

    delete adaptedEvent['base_price'];
    delete adaptedEvent['date_from'];
    delete adaptedEvent['date_to'];
    delete adaptedEvent['is_favorite'];

    return adaptedEvent;
  }
}
