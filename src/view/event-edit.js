import AbstractView from '../framework/view/abstract-view.js';
import {EVENT_TYPES} from '../const.js';
import {DATE_FORMAT, formatDate} from '../utils/event-utils.js';

function createEventEditTemplate(event, availableOffers, destinations) {
  const {basePrice, dateFrom, dateTo, destination, offers, type} = event;
  const eventDestination = destinations.find((destinationElement) => destinationElement.id === destination);
  const eventChosenTypeOffers = availableOffers.find((offer) => offer.type === type);
  const eventStartTime = formatDate(dateFrom, DATE_FORMAT.editFormFormat);
  const eventEndTime = formatDate(dateTo, DATE_FORMAT.editFormFormat);

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

    ${EVENT_TYPES.map((eventType) => (
      `<div class="event__type-item">
        <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}" ${eventType === type ? 'checked' : ''}>
        <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${eventType}</label>
      </div>`
    )).join('')}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${eventDestination.name}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${destinations.map((element) => (`<option value="${element.name}"></option>`)).join('')}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${eventStartTime}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${eventEndTime}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
    ${eventChosenTypeOffers.offers.map((offer) => (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-${offer.id}" type="checkbox" name="event-offer-luggage" ${offers.includes(offer.id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-luggage-${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`
    )).join('')}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${eventDestination.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
    ${eventDestination.pictures.map((picture) => (
      `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`
    )).join('')}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`
  );
}

export default class EventEditView extends AbstractView {
  #event = null;
  #offers = null;
  #destinations = null;
  #handleFormSubmit = null;
  #handleFormRollupBtnClick = null;

  constructor({event, offers, destinations, onFormSubmit, onFormRollupClick}) {
    super();
    this.#event = event;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleFormRollupBtnClick = onFormRollupClick;

    this.element.querySelector('form')
      .addEventListener('submit', this.#formSubmitHandler);

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formRollupBtnClickHandler);
  }

  get template() {
    return createEventEditTemplate(this.#event, this.#offers, this.#destinations);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#event);
  };

  #formRollupBtnClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormRollupBtnClick(this.#event);
  };
}
