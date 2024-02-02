import AbstractView from '../framework/view/abstract-view.js';
import { SortTypes } from '../const.js';

function createTripSortItemTemplate(sortType, currentSortType) {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortType}">
      <input
        id="sort-${sortType}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${sortType}"
        data-sort-type="${sortType}"
        ${sortType === currentSortType ? 'checked' : ''}
        ${sortType === SortTypes.EVENT || sortType === SortTypes.OFFERS ? 'disabled' : ''}>
      <label class="trip-sort__btn" for="sort-${sortType}" data-sort-type="${sortType}">${sortType}</label>
    </div>`
  );
}

function createTripSortTemplate(currentSortType) {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${Object.values(SortTypes).map((sortType) => createTripSortItemTemplate(sortType, currentSortType)).join('')}
    </form>`
  );
}
export default class TripSortView extends AbstractView {
  #currentSortType = null;
  #handleSortTypeChange = null;

  constructor({currentSortType, onSortTypeChange}) {
    super();
    this.#currentSortType = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createTripSortTemplate(this.#currentSortType);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
