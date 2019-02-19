<template>
  <div class="hello">
    <el-badge data-qa="badge" :value="counter" class="item">
      <el-button data-qa="button" @click="handleClick">Click Me</el-button>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: "ElButtonExample",
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
