<template>
  <div class="element">
    <div class="element-component">
      <div class="element-title">
        Element Button
      </div>
        <ElButtonExample/>
    </div>

    <div class="element-component">
      <div class="element-title">
        Element Slider
        </div>
        <ElSliderExample/>
      </div>
  </div>
</template>

<script>
import ElButtonExample from '@/components/element/ElButtonExample';
import ElSliderExample from '@/components/element/ElSliderExample';

export default {
  name: "elementio",
  components: {
    ElButtonExample,
    ElSliderExample
  }
};
</script>
<style lang="scss" scoped>
.element-title {
  font-size: 2em;
  color: green;
}
.element-component {
  margin-bottom: 80px
}
</style>