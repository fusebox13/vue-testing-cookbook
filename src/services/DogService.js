const getRandomDog = function() {
  return fetch("https://random.dog/woof.json");
};

export default {
  getRandomDog: getRandomDog
};

export { getRandomDog };
