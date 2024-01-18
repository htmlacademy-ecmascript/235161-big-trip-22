import EventsModel from './model/events-model.js';
import FilterModel from './model/filter-model.js';
//import HeaderPresenter from './presenter/header-presenter.js';
import EventsPresenter from './presenter/events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';

const siteHeader = document.querySelector('.page-header');
const tripMain = siteHeader.querySelector('.trip-main');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const eventsModel = new EventsModel();
const filterModel = new FilterModel();
/*
const headerPresenter = new HeaderPresenter({
  headerContainer: tripMain,
  filtersContainer: tripControlsFilters,
  eventsModel,
});
*/
const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents,
  headerContainer: tripMain,
  eventsModel,
  filterModel,
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFilters,
  filterModel,
  eventsModel,
});

//headerPresenter.init();
filterPresenter.init();
eventsPresenter.init();
