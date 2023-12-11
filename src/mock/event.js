import {getRandomArrayElement} from '../utils.js';

const mockEvents = [
  {
    'id': '1',
    'base_price': 1100,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': 'Tokyo',
    'is_favorite': false,
    'offers': [1],
    'type': 'taxi'
  },
  {
    'id': '2',
    'base_price': 1500,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': 'Seoul',
    'is_favorite': true,
    'offers': [2],
    'type': 'taxi'
  },
];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
