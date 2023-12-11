import dayjs from 'dayjs';

const DATE_FORMAT = {
  dayMonth: 'D MMM',
  yearMonthDay: 'YYYY-MM-D',
  fullDate: 'YYYY-MM-DTHH:mm',
  hoursMinutes: 'HH:mm'
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function formatDate(dateFrom, format) {
  return dateFrom ? dayjs(dateFrom).format(format) : '';
}

function calculateDuration(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'mm');
}

export {getRandomArrayElement, DATE_FORMAT, formatDate, calculateDuration};
