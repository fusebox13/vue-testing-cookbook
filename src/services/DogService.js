const getRandomDog = function() {
  return fetch("https://rrandom.dog/woof.json");
};

export default {
  getRandomDog: getRandomDog
};

export { getRandomDog };
