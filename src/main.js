import {render} from './render.js';
import FilterView from './view/filter.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteHeader = document.querySelector('.page-header');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');
const tripEvents = pageMain.querySelector('.trip-events');
const eventsPresenter = new EventsPresenter({eventsContainer: tripEvents});

render(new FilterView(), tripControlsFilters);

eventsPresenter.init();
