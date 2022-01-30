<template>
  <div class="app-progress">
    <div class="app-progress__line" ref="line"/>
  </div>
</template>

<script>
export default {
  name: 'AppProgressbar',
  emits: ['loaded'],
  props: {
    isRunning: { type: Boolean, default: false },
    time: { type: Number, default: 10 * 1000 },
  },
  data() {
    return {
      timers: [],
    };
  },
  watch: {
    isRunning: {
      handler(value) {
        this.$nextTick(() => {
          if (value) {
            this.timers.push(setTimeout(this.toggle, 10));
          } else {
            this.toggle();
            while (this.timers.length) {
              clearTimeout(this.timers.pop());
            }
          }
        });
      },
      immediate: true,
    },
  },
  methods: {
    toggle() {
      const line = this.$refs.line.style;
      if (this.isRunning) {
        line.width = '0px';
        line.transition = `all ${this.time }ms linear`;
        this.timers.push(setTimeout(() => {
          line.width = '100%';
          this.timers.push(setTimeout(() => {
            this.$emit('loaded');
          }, this.time));
        }, 10));
      } else {
        line.transition = '0ms';
        line.width = '0px';
      }
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

  &__line {
    height: inherit;
    width: 0;
    background-color: map-get($colors, green);
  }
}
</style>
