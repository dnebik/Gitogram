<template>
  <div class="story-line" @scroll="onScroll">
    <div class="story-line__shadow story-line__shadow--left" ref="shadowLeft"/>
    <div class="story-line__stories-wrapper">
      <app-story v-for="(username, index) in users" :key="index" :username="username" />
    </div>
    <div class="story-line__shadow story-line__shadow--right" ref="shadowRight"/>
  </div>
</template>

<script src="./index.js"/>

<style scoped lang="scss">
@use "sass:math";

@import "src/assets/styles/sizes";
@import "src/assets/styles/colors";

.story-line {
  position: relative;
  overflow: auto;
  display: flex;

  &__stories-wrapper {
    display: flex;
    gap: 31px;
  }

  &__shadow {
    position: sticky;
    top: 0;
    width: 0;
    pointer-events: none;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
      transform: rotate(180deg);
    }

    &:after {
      content: '';
      display: block;
      height: 100%;
      width: math.div($storyWidth, 1.5);
      background: linear-gradient(90deg, map-get($colors, lightgray) 30%, rgba(0, 0, 0, 0));
    }
  }
}
</style>
