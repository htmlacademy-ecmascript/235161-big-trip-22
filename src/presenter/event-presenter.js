import { render, replace, remove } from '../framework/render.js';
import {UserActions, UpdateTypes} from '../const.js';
import { isEscapeKey } from '../utils.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';

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
      onDeleteBtnClick: this.#handleDeleteBtnClick,
      onFormRollupClick: this.#handleFormRollupClick,
    });

    if (previousEventComponent === null || previousEventEditComponent === null) {
      render(this.#eventComponent, this.#eventsListContainer);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, previousEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventComponent, previousEventEditComponent);
      this.#mode = Mode.DEFAULT;
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
      this.#eventEditComponent.reset(this.#event);
      this.#replaceFormToEvent();
    }
  }

  setSaving() {
    if (this.#mode === Mode.EDITING) {
      this.#eventEditComponent.updateElement({
        isSaving: true,
      });

      this.#eventEditComponent.element.querySelector('.event__save-btn').disabled = true;
    }
  }

  setDeleting() {
    if (this.#mode === Mode.EDITING) {
      this.#eventEditComponent.updateElement({
        isDeleting: true,
      });
    }
  }

  setAborting() {
    if (this.#mode === Mode.DEFAULT) {
      this.#eventComponent.shake();
    }

    const resetFormState = () => {
      this.#eventEditComponent.updateElement({
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#eventEditComponent.shake(resetFormState);
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
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#eventEditComponent.reset(this.#event);
      this.#replaceFormToEvent();
    }
  };

  #handleRollupClick = () => {
    this.#replaceEventToForm();
  };

  #handleFavoriteClick = () => {
    this.#handleDataChange(
      UserActions.UPDATE_EVENT,
      UpdateTypes.PATCH,
      {...this.#event, isFavorite: !this.#event.isFavorite},
    );
  };

  #handleFormSubmit = (event) => {
    this.#handleDataChange(
      UserActions.UPDATE_EVENT,
      UpdateTypes.MINOR,
      event,
    );
  };

  #handleDeleteBtnClick = (event) => {
    this.#handleDataChange(
      UserActions.DELETE_EVENT,
      UpdateTypes.MINOR,
      event,
    );
  };

  #handleFormRollupClick = () => {
    this.#eventEditComponent.reset(this.#event);
    this.#replaceFormToEvent();
  };
}
