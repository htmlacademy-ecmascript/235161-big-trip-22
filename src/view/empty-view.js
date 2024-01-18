import AbstractView from '../framework/view/abstract-view.js';
import {FilterTypes} from '../const.js';

const NoEventsTextType = {
  [FilterTypes.EVERYTHING]: 'Click New Event to create your first point',
  [FilterTypes.FUTURE]: 'There are no future events now',
  [FilterTypes.PAST]: 'There are no past events now',
  [FilterTypes.PRESENT]: 'There are no present events now'
};

function createEmptyEventsTemplate(filterType) {
  const noEventsTextValue = NoEventsTextType[filterType];

  return `<p class="trip-events__msg">${noEventsTextValue}</p>`;
}

export default class EmptyView extends AbstractView {
  #filterType = null;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyEventsTemplate(this.#filterType);
  }

}

export {EmptyView};
