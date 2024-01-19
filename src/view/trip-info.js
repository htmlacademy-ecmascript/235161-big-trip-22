import AbstractView from '../framework/view/abstract-view.js';
import { DateFormats, formatDate } from '../utils/event-utils.js';

function createTripInfoTemplate({destinationNames, totalPrice, events}) {
  const destinations = [...destinationNames];
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${destinations.length > 3 ? `${destinations[0]} &mdash;...&mdash; ${destinations[destinations.length - 1]}` : destinations.join(' &mdash; ')}</h1>

        <p class="trip-info__dates">${formatDate(events[0].dateFrom, DateFormats.DAY_MONTH)}&nbsp;&mdash;&nbsp;${formatDate(events[events.length - 1].dateTo, DateFormats.DAY_MONTH)}</p>
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
      events: this.#events,
    });
  }

  #getDestinationNames() {
    return this.#events.map((event) => this.#destinations.find((dest) => dest.id === event.destination).name);
    /*
    const firstDestinationName = this.#destinations.find((destination) => destination.id === this.#events[0].destination);

    const secondDestinationName = this.#destinations.find((destination) => destination.id === this.#events[1]?.destination);

    const lastDestinationName = this.#destinations.find((destination) => destination.id === this.#events[this.#events.length - 1].destination);

    if (this.#events.length === 1) {
      return `${firstDestinationName.name}`;
    } else if (this.#events.length === 2) {
      return `${firstDestinationName.name} — ${lastDestinationName.name}`;
    } else if (this.#events.length === 3) {
      return `${firstDestinationName.name} — ${secondDestinationName.name} — ${lastDestinationName.name}`;
    } else {
      return `${firstDestinationName.name} — ... — ${lastDestinationName.name}`;
    }*/
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
