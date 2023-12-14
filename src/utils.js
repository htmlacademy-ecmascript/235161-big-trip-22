import dayjs from 'dayjs';

const DATE_FORMAT = {
  dayMonth: 'D MMM',
  yearMonthDay: 'YYYY-MM-D',
  fullDate: 'YYYY-MM-DTHH:mm',
  hoursMinutes: 'HH:mm',
  editFormFormat: 'MM/DD/YY HH:mm'
};

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
  const minutes = Math.ceil(dayjs(endDate).diff(dayjs(startDate), 'minutes', true));
  const totalHours = parseInt(minutes / 60, 10);
  const totalMins = dayjs().minute(minutes).$m;
  const duration = totalHours === 0 ? `${totalMins}M` : `${totalHours}H ${totalMins}M`;

  return duration;
}

export {getRandomArrayElement, DATE_FORMAT, formatDate, calculateDuration, getRandomNumber};
