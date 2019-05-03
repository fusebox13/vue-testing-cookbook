<template>
  <div>
    <div data-qa="state">{{ example }}</div>
    <div data-qa="dog-url">{{ randomDogUrl }}</div>
    <img :src="randomDogUrl"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "VuExample",
  inject: ["DogService"],
  computed: {
    ...mapState("Example", ["example", "randomDogUrl"])
  },
  methods: {
    ...mapActions("Example", ["fetchRandomDogAsync"])
  },
  created() {
    this.fetchRandomDogAsync(this.DogService);
  }
};
</script>

<style scoped></style>
