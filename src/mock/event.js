import {getRandomArrayElement} from '../utils.js';

const mockEvents = [
  {
    id: '1',
    basePrice: 10,
    dateFrom: new Date('2019-07-10T22:55:56'),
    dateTo: new Date('2019-07-11T11:22:13'),
    destination: 'Tokyo',
    isFavorite: false,
    offers: [1,2],
    type: 'flight'
  },
  {
    id: '2',
    basePrice: 15,
    dateFrom: new Date('2019-07-10T22:55:56'),
    dateTo: new Date('2019-07-11T11:22:13'),
    destination: 'Seoul',
    isFavorite: true,
    offers: [1,2],
    type: 'taxi'
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
