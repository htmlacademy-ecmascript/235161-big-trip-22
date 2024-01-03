import AbstractView from '../framework/view/abstract-view.js';
import { SortTypes } from '../const.js';

function createTripSortItemTemplate(sortType) {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortType}">
      <input
        id="sort-${sortType}"
        class="trip-sort__input  visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${sortType}"
        data-sort-type="${sortType}"
        ${sortType === SortTypes.DAY ? 'checked' : ''}
        ${sortType === SortTypes.EVENT || sortType === SortTypes.OFFERS ? 'disabled' : ''}>
      <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
    </div>`
  );
}
/*
function createTripSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`
  );
}
*/
function createTripSortTemplate() {
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${Object.values(SortTypes).map((sortType) => createTripSortItemTemplate(sortType)).join('')}
    </form>`
  );
}
export default class TripSortView extends AbstractView {
  get template() {
    return createTripSortTemplate();
  }
  /*
  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }*/
}
