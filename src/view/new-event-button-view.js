import AbstractView from '../framework/view/abstract-view.js';

function createNewEventButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
}

export default class NewEventButtonView extends AbstractView {
  #handleNewEventBtnClick = null;

  constructor({onNewEventBtnClick}) {
    super();
    this.#handleNewEventBtnClick = onNewEventBtnClick;
    this.element.addEventListener('click', this.#newEventBtnClickHandler);
  }

  get template() {
    return createNewEventButtonTemplate();
  }

  #newEventBtnClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleNewEventBtnClick();
  };
}
