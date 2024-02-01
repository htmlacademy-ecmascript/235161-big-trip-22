import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

const MILLISECONDS_AMOUNT_IN_DAY = 86400000;
const MILLISECONDS_AMOUNT_IN_HOUR = 3600000;
const MAX_DAYS_BEFORE_CONVERTING_INTO_MONTH = 29;

dayjs.extend(Duration);

const DateFormats = {
  DAY_MONTH: 'MMM D',
  MONTH_DAY: 'D MMM',
  YEAR_MONTH_DAY: 'YYYY-MM-D',
  FULL_DATE: 'YYYY-MM-DTHH:mm',
  HOURS_MINUTES: 'HH:mm',
  EDIT_FORM_FORMAT: 'd/m/y H:i',
};

function formatDate(date, format) {
  return date ? dayjs(date).format(format) : '';
}

function calculateDuration(startDate, endDate) {
  const eventDuration = dayjs(endDate).diff(startDate);
  let durationFormat = 'DD[D] HH[H] mm[M]';

  if (eventDuration < MILLISECONDS_AMOUNT_IN_DAY) {
    durationFormat = 'HH[H] mm[M]';
  }

  if (eventDuration < MILLISECONDS_AMOUNT_IN_HOUR) {
    durationFormat = 'mm[M]';
  }

  return Math.floor(dayjs.duration(eventDuration).asDays()) > MAX_DAYS_BEFORE_CONVERTING_INTO_MONTH ?
    `${Math.floor(dayjs.duration(eventDuration).asDays())}D ${dayjs.duration(eventDuration).format('HH[H] mm[M]')}`
    : dayjs.duration(eventDuration).format(durationFormat);
}

function getWeightForNullDate(dateA, dateB) {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
}

function sortEventsByDay(eventA, eventB) {
  const weight = getWeightForNullDate(eventA.dateFrom, eventB.dateFrom);
  return weight ?? dayjs(eventA.dateFrom).diff(dayjs(eventB.dateFrom));
}

function sortEventsByPrice(eventA, eventB) {
  return eventB.basePrice - eventA.basePrice;
}

function sortEventsByDuration(eventA, eventB) {
  const eventDurationA = dayjs(eventA.dateTo).diff(eventA.dateFrom);
  const eventDurationB = dayjs(eventB.dateTo).diff(eventB.dateFrom);
  return eventDurationB - eventDurationA;
}

export {DateFormats, formatDate, calculateDuration, sortEventsByDay, sortEventsByPrice, sortEventsByDuration};
