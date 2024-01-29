import AbstractView from '../framework/view/abstract-view.js';
import { DateFormats, formatDate } from '../utils/event-utils.js';

const MAX_VISIBLE_DESTINATIONS = 3;

function createTripInfoTemplate({destinationNames, totalPrice, eventDates}) {
  const destinations = [...destinationNames];
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${destinations.length > MAX_VISIBLE_DESTINATIONS ? `${destinations[0]} &mdash;...&mdash; ${destinations[destinations.length - 1]}` : destinations.join(' &mdash; ')}</h1>

        <p class="trip-info__dates">${eventDates}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
    </section>`
  );
}

export default class TripInfoView extends AbstractView {
  #events = null;
  #offers = null;
  #destinations = null;

  constructor({events, offers, destinations}) {
    super();
    this.#events = events;
    this.#offers = offers;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate({
      destinationNames: this.#getDestinationNames(),
      totalPrice: this.#calculatePrice(),
      eventDates: this.#getDates(),
      events: this.#events,
    });
  }

  #getDestinationNames() {
    return this.#events.map((event) => this.#destinations.find((dest) => dest.id === event.destination).name);
  }

  #getDates() {
    return this.#events.length > 1 ?
      `${formatDate(this.#events[0].dateFrom, DateFormats.MONTH_DAY)}&nbsp;&mdash;&nbsp;${formatDate(this.#events[this.#events.length - 1].dateTo, DateFormats.MONTH_DAY)}`
      :
      `${formatDate(this.#events[0].dateFrom, DateFormats.MONTH_DAY)}&nbsp;&mdash;&nbsp;${formatDate(this.#events[0].dateTo, DateFormats.MONTH_DAY)}`;
  }

  #calculatePrice() {
    const eventsBasePrice = this.#events.reduce((total, event) => total + parseInt(event.basePrice, 10), 0);

    let checkedOffersSum = 0;

    for (let i = 0; i < this.#events.length; i++) {

      const neededOfferType = this.#offers.find((offer) => offer.type === this.#events[i].type);
      const filteredOffers = neededOfferType.offers.filter((offer) => this.#events[i].offers.includes(offer.id));

      if (filteredOffers.length !== 0) {
        const filteredOffersPricesArray = filteredOffers.map((offer) => offer.price);
        const sum = filteredOffersPricesArray.reduce((total, offerPrice) => total + offerPrice);

        checkedOffersSum += sum;
      }
    }

    const overallPrice = eventsBasePrice + checkedOffersSum;

    return overallPrice;
  }
}
