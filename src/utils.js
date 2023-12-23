import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';

const MILLISECONDS_AMOUNT_IN_DAY = 86400000;
const MILLISECONDS_AMOUNT_IN_HOUR = 3600000;
const DATE_FORMAT = {
  dayMonth: 'MMM D',
  yearMonthDay: 'YYYY-MM-D',
  fullDate: 'YYYY-MM-DTHH:mm',
  hoursMinutes: 'HH:mm',
  editFormFormat: 'MM/DD/YY HH:mm'
};

dayjs.extend(Duration);

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min = 1, max = 999) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

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

export {getRandomArrayElement, DATE_FORMAT, formatDate, calculateDuration, getRandomNumber};
