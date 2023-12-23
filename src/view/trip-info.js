import AbstractView from '../framework/view/abstract-view.js';

function createTripInfoTemplate({destinationNames}) {
  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${destinationNames}</h1>

        <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
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
    return createTripInfoTemplate({destinationNames: this.#getDestinationNames()});
  }

  #getDestinationNames() {
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
    }
  }
}
