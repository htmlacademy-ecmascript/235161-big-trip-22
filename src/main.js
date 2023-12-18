import {render} from './framework/render.js';
import FilterView from './view/filter.js';
import EventsModel from './model/events-model.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteHeader = document.querySelector('.page-header');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');
const tripEvents = pageMain.querySelector('.trip-events');

const eventsModel = new EventsModel();
const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents,
  eventsModel,
});

render(new FilterView(), tripControlsFilters);

eventsPresenter.init();
