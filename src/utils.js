function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomNumber(min = 20, max = 999) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

export {getRandomArrayElement, getRandomNumber};
