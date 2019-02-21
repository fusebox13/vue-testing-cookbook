<template>
    <div class="hello">
        <el-slider v-model="sliderValue"></el-slider>
    </div>
</template>
<script>
export default {
    name: "ElSliderExample",
    data() {
        return {
            sliderValue: 10
        }
    }
}
</script>