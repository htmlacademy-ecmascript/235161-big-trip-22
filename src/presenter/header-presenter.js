import {render, RenderPosition} from '../framework/render.js';
import TripInfoView from '../view/trip-info.js';
import FilterView from '../view/filter.js';
import {generateFilter} from '../mock/filters.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #filtersContainer = null;
  #eventsModel = null;
  #filters = null;

  constructor({headerContainer, filtersContainer, eventsModel}) {
    this.#headerContainer = headerContainer;
    this.#filtersContainer = filtersContainer;
    this.#eventsModel = eventsModel;
  }

  #events = [];
  #offers = [];
  #destinations = [];

  init() {
    this.#events = [...this.#eventsModel.events];
    this.#offers = [...this.#eventsModel.offers];
    this.#destinations = [...this.#eventsModel.destinations];

    this.#filters = generateFilter(this.#events);

    render(new TripInfoView({events: this.#events, offers: this.#offers, destinations: this.#destinations}), this.#headerContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView({filters: this.#filters}), this.#filtersContainer);
  }
}
