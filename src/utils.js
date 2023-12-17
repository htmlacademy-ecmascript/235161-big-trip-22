import dayjs from 'dayjs';

const MILLISECONDS_AMOUNT_IN_DAY = 86400000;
const MILLISECONDS_AMOUNT_IN_HOUR = 3600000;
const DATE_FORMAT = {
  dayMonth: 'D MMM',
  yearMonthDay: 'YYYY-MM-D',
  fullDate: 'YYYY-MM-DTHH:mm',
  hoursMinutes: 'HH:mm',
  editFormFormat: 'MM/DD/YY HH:mm'
};
const Duration = require('dayjs/plugin/duration');
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
  /*
  const minutes = Math.ceil(dayjs(endDate).diff(dayjs(startDate), 'minutes', true));
  const totalHours = parseInt(minutes / 60, 10);
  const totalMins = dayjs().minute(minutes).$m;
  const duration = totalHours === 0 ? `${totalMins}M` : `${totalHours}H ${totalMins}M`;

  return duration;
  */
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
