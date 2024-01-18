import EventsModel from './model/events-model.js';
//import HeaderPresenter from './presenter/header-presenter.js';
import EventsPresenter from './presenter/events-presenter.js';

const siteHeader = document.querySelector('.page-header');
const tripMain = siteHeader.querySelector('.trip-main');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const eventsModel = new EventsModel();
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
  filtersContainer: tripControlsFilters,
  eventsModel,
});

//headerPresenter.init();
eventsPresenter.init();
