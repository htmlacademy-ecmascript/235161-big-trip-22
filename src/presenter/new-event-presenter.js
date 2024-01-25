import {remove, render, RenderPosition} from '../framework/render.js';
import EventAddView from '../view/event-add.js';
import {UserActions, UpdateTypes} from '../const.js';
//import { getRandomNumber } from '../utils.js';

export default class NewEventPresenter {
  #eventListContainer = null;
  #offers = null;
  #destinations = null;
  #handleDataChange = null;
  #handleDestroy = null;

  #eventAddComponent = null;

  constructor({eventListContainer, offers, destinations, onDataChange, onDestroy}) {
    this.#eventListContainer = eventListContainer;
    this.#offers = offers;
    this.#destinations = destinations;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
  }

  init() {
    if (this.#eventAddComponent !== null) {
      return;
    }

    this.#eventAddComponent = new EventAddView({
      offers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
      onDeleteBtnClick: this.#handleDeleteClick,
    });

    render(this.#eventAddComponent, this.#eventListContainer, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#eventAddComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#eventAddComponent);
    this.#eventAddComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#eventAddComponent.updateElement({
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#eventAddComponent.updateElement({
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#eventAddComponent.shake(resetFormState);
  }

  #handleFormSubmit = (event) => {
    this.#handleDataChange(
      UserActions.ADD_EVENT,
      UpdateTypes.MAJOR,
      event,
    );
  };

  #handleDeleteClick = () => {
    this.destroy();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
    }
  };

}
