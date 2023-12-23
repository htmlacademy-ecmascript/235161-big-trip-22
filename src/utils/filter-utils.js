import {FilterTypes} from '../const';
import {isEventInThePast, isEventInThePresent, isEventInTheFuture} from './event-utils';


const filter = {
  [FilterTypes.EVERYTHING]: (events) => events.filter((event) => event),
  [FilterTypes.FUTURE]: (events) => events.filter((event) => isEventInTheFuture(event.dateFrom)),
  [FilterTypes.PRESENT]: (events) => events.filter((event) => isEventInThePresent(event.dateFrom)),
  [FilterTypes.PAST]: (events) => events.filter((event) => isEventInThePast(event.dateFrom)),
};

export {filter};
