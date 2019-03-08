const actions = {
  fetchRandomDog() {
    fetch("https://random.dog/woof.json")
      .then(response => response.json())
      .then(({ url }) => console.log(url));
  }
};

export { actions };
