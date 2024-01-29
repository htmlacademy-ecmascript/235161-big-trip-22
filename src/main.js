import EventsModel from './model/events-model.js';
import FilterModel from './model/filter-model.js';
import EventsPresenter from './presenter/events-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewEventButtonView from './view/event-add-btn-view.js';
import { render } from './framework/render.js';
import EventsApiService from './events-api-service.js';

const AUTHORIZATION = 'Basic q1i2s3t4i5s12345';
const END_POINT = 'https://22.objects.htmlacademy.pro/big-trip';//'https://22.objects.pages.academy/big-trip';

const siteHeader = document.querySelector('.page-header');
const tripMain = siteHeader.querySelector('.trip-main');
const tripControlsFilters = siteHeader.querySelector('.trip-controls__filters');
const pageMain = document.querySelector('.page-main');

const tripEvents = pageMain.querySelector('.trip-events');

const eventsModel = new EventsModel({
  eventsApiService: new EventsApiService(END_POINT, AUTHORIZATION)
});
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
  eventsPresenter.rerenderNoEventsComponent();
}

function handleNewEventButtonClick() {
  eventsPresenter.createEvent(handleNewEventFormClose);
  newEventButtonComponent.element.disabled = true;
}

filterPresenter.init();
eventsPresenter.init();

eventsModel.init()
  .finally(() => {
    render(newEventButtonComponent, tripMain);

    if (eventsModel.offers.length === 0) {
      newEventButtonComponent.element.disabled = true;
    }
  });
