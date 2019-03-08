<template>
  <div data-qa="state">{{ example }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VuExample",
  computed: {
    ...mapState("Example", ["example"])
  }
};
</script>

<style scoped></style>
