import EventsModel from './model/events-model.js';
import FilterModel from './model/filter-model.js';
import EventsPresenter from './presenter/events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewEventButtonView from './view/event-add-btn-view.js';
import { render } from './framework/render.js';

const siteHeader = document.querySelector('.page-header');
const tripMain = siteHeader.querySelector('.trip-main');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const eventsModel = new EventsModel();
const filterModel = new FilterModel();

const eventsPresenter = new EventsPresenter({
  eventsContainer: tripEvents,
  headerContainer: tripMain,
  eventsModel,
  filterModel,
  onNewEventDestroy: handleNewEventFormClose,
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripControlsFilters,
  filterModel,
  eventsModel,
});

const newEventButtonComponent = new NewEventButtonView({
  onClick: handleNewEventButtonClick
});

function handleNewEventFormClose() {
  newEventButtonComponent.element.disabled = false;
}

function handleNewEventButtonClick() {
  eventsPresenter.createEvent();
  newEventButtonComponent.element.disabled = true;
}

render(newEventButtonComponent, tripMain);
filterPresenter.init();
eventsPresenter.init();
