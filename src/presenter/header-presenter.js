import {render, RenderPosition} from '../framework/render.js';
import TripInfoView from '../view/trip-info.js';
//import FilterView from '../view/filter.js';
//import {generateFilter} from '../mock/filters.js';

export default class HeaderPresenter {
  #headerContainer = null;
  #events = null;
  #offers = null;
  #destinations = null;
  #handleDataChange = null;
  //#filtersContainer = null;
  //#eventsModel = null;
  //#filters = null;

  #tripInfoComponent = new TripInfoView();

  constructor({events, offers, destinations, headerContainer}) {
    this.#headerContainer = headerContainer;
    //this.#filtersContainer = filtersContainer;
    //this.#eventsModel = eventsModel;
    this.#events = events;
    this.#offers = offers;
    this.#destinations = destinations;
    //this.#handleDataChange = onDataChange;
  }

  //#events = [];
  //#offers = [];
  //#destinations = [];

  init() {
    //this.#events = [...this.#eventsModel.events];
    //this.#offers = [...this.#eventsModel.offers];
    //this.#destinations = [...this.#eventsModel.destinations];

    //this.#filters = generateFilter(this.#events);
    if (this.#tripInfoComponent !== null) {
      return;
    }

    render(new TripInfoView({events: this.#events, offers: this.#offers, destinations: this.#destinations}), this.#headerContainer, RenderPosition.AFTERBEGIN);
    //render(new FilterView({filters: this.#filters}), this.#filtersContainer);
  }
}
