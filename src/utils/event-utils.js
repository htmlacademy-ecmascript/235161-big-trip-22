import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

dayjs.extend(Duration);

const MILLISECONDS_AMOUNT_IN_DAY = 86400000;
const MILLISECONDS_AMOUNT_IN_HOUR = 3600000;
const DATE_FORMAT = {
  dayMonth: 'MMM D',
  yearMonthDay: 'YYYY-MM-D',
  fullDate: 'YYYY-MM-DTHH:mm',
  hoursMinutes: 'HH:mm',
  editFormFormat: 'MM/DD/YY HH:mm'
};

function formatDate(dateFrom, format) {
  return dateFrom ? dayjs(dateFrom).format(format) : '';
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

  return dayjs.duration(eventDuration).format(durationFormat);
}

function isEventInThePast(date) {
  return date && dayjs(date).isBefore(dayjs(), 'D');
}

function isEventInThePresent(date) {
  return date && dayjs(date).isSame(dayjs(), 'D');
}

function isEventInTheFuture(date) {
  return date && dayjs(date).isAfter(dayjs(), 'D');
}

export {DATE_FORMAT, formatDate, calculateDuration, isEventInThePast, isEventInThePresent, isEventInTheFuture};
