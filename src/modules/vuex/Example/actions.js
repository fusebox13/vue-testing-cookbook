const actions = {
  fetchRandomDog({ commit }, endpoint) {
    fetch(endpoint)
      .then(response => response.json())
      .then(({ url }) => commit("setRandomDogUrl", url));
  },
  async fetchRandomDogAsync({ commit }, service) {
    await service
      .getRandomDog()
      .then(response => {
        return response.json();
      })
      .then(({ url }) => commit("setRandomDogUrl", url))
      .catch(() => {
        commit("setRandomDogUrl", "Not Found");
      });
  }
};

export { actions };
