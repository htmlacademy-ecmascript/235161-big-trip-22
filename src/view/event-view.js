import AbstractView from '../framework/view/abstract-view.js';
import {DateFormats, formatDate, calculateDuration} from '../utils/event-utils.js';
import he from 'he';

function createEventTemplate(event, allOffers, destinations) {
  const {basePrice, dateFrom, dateTo, destination, isFavorite, offers, type} = event;

  const dateTime = formatDate(dateFrom, DateFormats.YEAR_MONTH_DAY);
  const date = formatDate(dateFrom, DateFormats.DAY_MONTH);
  const fullDateStart = formatDate(dateFrom, DateFormats.FULL_DATE);
  const fullDateEnd = formatDate(dateTo, DateFormats.FULL_DATE);
  const eventStartTime = formatDate(dateFrom, DateFormats.HOURS_MINUTES);
  const eventEndTime = formatDate(dateTo, DateFormats.HOURS_MINUTES);
  const eventDestination = destinations.find((destinationElement) => destinationElement.id === destination);
  const favoriteClass = isFavorite
    ? 'event__favorite-btn--active'
    : '';
  const duration = calculateDuration(dateFrom, dateTo);
  const eventTypeOffers = allOffers.find((offer) => offer.type === type);

  return (
    `<li class="trip-events__item">

    <div class="event">

      <time class="event__date" datetime="${dateTime}">${date}</time>

      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>

      <h3 class="event__title">${type} ${eventDestination ? he.encode(eventDestination.name) : ''}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fullDateStart}">${eventStartTime}</time>
          &mdash;
          <time class="event__end-time" datetime="${fullDateEnd}">${eventEndTime}</time>
        </p>
        <p class="event__duration">${duration}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>

      <ul class="event__selected-offers">
      ${eventTypeOffers.offers.map((offer) => {
      if (offers.includes(offer.id)) {
        return (
          `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
              &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>`
        );
      }
    }).join('')}
      </ul>

      <button class="event__favorite-btn ${favoriteClass}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>

    </div>
  </li>`
  );
}

export default class EventView extends AbstractView {
  #event = null;
  #offers = null;
  #destinations = null;

  #handleRollupClick = null;
  #handleFavoriteClick = null;

  constructor({event, offers, destinations, onRoullupClick, onFavoriteClick}) {
    super();
    this.#event = event;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleRollupClick = onRoullupClick;
    this.#handleFavoriteClick = onFavoriteClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#rollupClickHandler);

    this.element.querySelector('.event__favorite-btn')
      .addEventListener('click', this.#favoriteClickHandler);
  }

  get template() {
    return createEventTemplate(this.#event, this.#offers, this.#destinations);
  }

  #rollupClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleRollupClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFavoriteClick();
  };
}
