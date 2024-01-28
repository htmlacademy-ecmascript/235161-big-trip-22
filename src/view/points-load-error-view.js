import AbstractView from '../framework/view/abstract-view';

function createPointsLoadErrorTemplate() {
  return (
    '<p class="trip-events__msg">Failed to load latest route information</p>'
  );
}

export default class PointsLoadErrorView extends AbstractView {

  get template() {
    return createPointsLoadErrorTemplate();
  }
}
