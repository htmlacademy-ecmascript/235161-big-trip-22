import {render, RenderPosition} from '../framework/render.js';
import TripInfoView from '../view/trip-info.js';
import FilterView from '../view/filter.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #filtersContainer = null;
  #eventsModel = null;

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

    render(new TripInfoView({events: this.#events, offers: this.#offers, destinations: this.#destinations}), this.#headerContainer, RenderPosition.AFTERBEGIN);
    render(new FilterView, this.#filtersContainer);
  }
}
