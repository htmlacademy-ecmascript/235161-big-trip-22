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
  {
    id: '3',
    basePrice: 50,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 4,
    isFavorite: true,
    offers: [1],
    type: 'bus'
  },
  {
    id: '4',
    basePrice: 50,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 4,
    isFavorite: true,
    offers: [1,2],
    type: 'train'
  },
  {
    id: '5',
    basePrice: 510,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 5,
    isFavorite: true,
    offers: [1,2],
    type: 'check-in'
  },
  {
    id: '6',
    basePrice: 10,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 1,
    isFavorite: true,
    offers: [1,2],
    type: 'check-in'
  },
  {
    id: '7',
    basePrice: 10,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 2,
    isFavorite: true,
    offers: [2],
    type: 'sightseeing'
  },
  {
    id: '8',
    basePrice: 10,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 4,
    isFavorite: true,
    offers: [1,2],
    type: 'ship'
  },
  {
    id: '8',
    basePrice: 35,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 5,
    isFavorite: true,
    offers: [1,2],
    type: 'taxi'
  },
  {
    id: '9',
    basePrice: 25,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 4,
    isFavorite: true,
    offers: [1,2],
    type: 'drive'
  },
  {
    id: '10',
    basePrice: 1000,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 5,
    isFavorite: true,
    offers: [1,2],
    type: 'ship'
  },
  {
    id: '11',
    basePrice: 300,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 1,
    isFavorite: true,
    offers: [1],
    type: 'sightseeing'
  },
  {
    id: '12',
    basePrice: 320,
    dateFrom: new Date('2020-07-10T13:25:56'),
    dateTo: new Date('2020-07-10T13:50:13'),
    destination: 3,
    isFavorite: true,
    offers: [2],
    type: 'sightseeing'
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
