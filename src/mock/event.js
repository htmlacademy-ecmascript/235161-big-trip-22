import {getRandomArrayElement} from '../utils.js';

const mockEvents = [
  {
    id: '1',
    basePrice: 500,
    dateFrom: new Date('2019-07-10T22:55:56'),
    dateTo: new Date('2019-07-12T11:22:13'),
    destination: 1,
    isFavorite: false,
    offers: [1],
    type: 'flight'
  },
  {
    id: '2',
    basePrice: 15,
    dateFrom: new Date('2019-07-10T13:25:56'),
    dateTo: new Date('2019-07-10T13:50:13'),
    destination: 2,
    isFavorite: true,
    offers: [2],
    type: 'taxi'
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
