<template>
  <div class="app-progress">
    <div class="line" :style="styles"/>
  </div>
</template>

<script>
export default {
  name: 'AppProgressbar',
  props: {
    isRunning: { type: Boolean, default: false },
    time: { type: Number, default: 10 * 1000 },
  },
  computed: {
    styles() {
      return {
        transition: `${this.time }ms`,
        width: '100%',
      };
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:color" as *;
@import "/src/assets/styles/colors";

.app-progress {
  width: 100%;
  height: 2px;
  background-color: change(map-get($colors, green), $alpha: 0.3);
}
</style>
