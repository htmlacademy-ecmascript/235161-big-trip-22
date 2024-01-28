import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {FilterTypes} from '../const';
//import {isEventInThePast, isEventInThePresent, isEventInTheFuture} from './event-utils';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const filter = {
  [FilterTypes.EVERYTHING]: (events) => events,//.filter((event) => event),
  [FilterTypes.FUTURE]: (events) => events.filter((event) => dayjs().isBefore(dayjs(event.dateFrom))),//isEventInTheFuture(event.dateFrom)),
  [FilterTypes.PRESENT]: (events) => events.filter((event) => dayjs().isSameOrAfter(dayjs(event.dateFrom)) && dayjs().isSameOrBefore(dayjs(event.dateTo))),//isEventInThePresent(event.dateFrom)),
  [FilterTypes.PAST]: (events) => events.filter((event) => dayjs().isAfter(dayjs(event.dateTo)))//isEventInThePast(event.dateFrom)),
};

export {filter};
