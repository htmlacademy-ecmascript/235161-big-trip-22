import {render, replace, remove} from '../framework/render.js';
import FilterView from '../view/filter.js';
import {filter} from '../utils/filter-utils.js';
import {FilterTypes, UpdateTypes} from '../const.js';

export default class FilterPesenter {
  #filterContainer = null;
  #filterModel = null;
  #eventsModel = null;

  #filterComponent = null;

  constructor({filterContainer, filterModel, eventsModel}) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#eventsModel = eventsModel;

    this.#eventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get filters() {
    const events = this.#eventsModel.events;

    return Object.values(FilterTypes).map((type) => ({
      type,
      count: filter[type](events).length
    }));
  }

  init() {
    const filters = this.filters;
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new FilterView({
      filters,
      currentFilterType: this.#filterModel.filter,
      onFilterTypeChange: this.#handleFilterTypeChange,
    });

    if (prevFilterComponent === null) {
      render(this.#filterComponent, this.#filterContainer);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent = () => {
    this.init();
  };

  #handleFilterTypeChange = (filterType) => {
    if (this.#filterModel.filter === filterType) {
      return;
    }

    this.#filterModel.setFilter(UpdateTypes.MAJOR, filterType);
  };
}
