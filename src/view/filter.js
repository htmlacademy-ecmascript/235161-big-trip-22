import AbstractView from '../framework/view/abstract-view.js';
import { FilterTypes } from '../const.js';

function createFilterItemTemplate(filterName, isChecked) {
  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filterName}"
        class="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="${filterName}"
        ${isChecked ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filterName}">${filterName}</label>
    </div>`
  );
}

function createFilterTemplate() {
  return (
    `<form class="trip-filters" action="#" method="get">
    ${Object.values(FilterTypes).map((item, index) => createFilterItemTemplate(item, index === 0)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
  );
}

export default class FilterView extends AbstractView {

  get template() {
    return createFilterTemplate();
  }

}
