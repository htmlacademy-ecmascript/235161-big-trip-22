import { render, replace, remove } from '../framework/render.js';
import EventView from '../view/event.js';
import EventEditView from '../view/event-edit.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

export default class EventPresenter {
  #eventComponent = null;
  #eventEditComponent = null;
  #eventsListContainer = null;

  #mode = Mode.DEFAULT;
  #event = null;
  #offers = [];
  #destinations = [];

  #handleDataChange = null;
  #handleModeChange = null;

  constructor({eventsListContainer, offers, destinations, onDataChange, onModeChange}) {
    this.#eventsListContainer = eventsListContainer;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(event) {
    this.#event = event;

    const previousEventComponent = this.#eventComponent;
    const previousEventEditComponent = this.#eventEditComponent;

    this.#eventComponent = new EventView({
      event: this.#event,
      offers: this.#offers,
      destinations: this.#destinations,
      onRoullupClick: this.#handleRollupClick,
      onFavoriteClick: this.#handleFavoriteClick,
    });

    this.#eventEditComponent = new EventEditView({
      event: this.#event,
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
    });

    if (previousEventComponent === null || previousEventEditComponent === null) {
      render(this.#eventComponent, this.#eventsListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, previousEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventEditComponent, previousEventEditComponent);
    }

    remove(previousEventComponent);
    remove(previousEventEditComponent);
  }

  destroy() {
    remove(this.#eventComponent);
    remove(this.#eventEditComponent);
  }

  resetView() {
    if(this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToEvent();
    }
  }

  #replaceEventToForm() {
    replace(this.#eventEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToEvent() {
    replace(this.#eventComponent, this.#eventEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormToEvent();
    }
  };

  #handleRollupClick = () => {
    this.#replaceEventToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange({...this.#event, isFavorite: !this.#event.isFavorite});
  };

  #handleFormSubmit = (event) => {
    this.#handleDataChange(event);
    this.#replaceFormToEvent();
  };
}
