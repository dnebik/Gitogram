<template>
  <div class="stars-and-forks">
    <div class="stars-and-forks__item stars-and-forks__item--stars">
      <div class="stars-and-forks__label stars-and-forks__label--stars">
        <app-icon small>star</app-icon>
        Star
      </div>
      <div class="stars-and-forks__value stars-and-forks__value--stars">
        {{ formatter.format(stars) }}
      </div>
    </div>
    <div class="stars-and-forks__item stars-and-forks__item--forks">
      <div class="stars-and-forks__label stars-and-forks__label--forks">
        <app-icon small>fork</app-icon>
        Forks
      </div>
      <div class="stars-and-forks__value stars-and-forks__value--forks">
        {{ formatter.format(forks) }}
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'AppStarsAndForks',
  components: { AppIcon },
  data() {
    return {
      formatter: Intl.NumberFormat('en', { notation: 'compact' }),
    };
  },
  props: {
    stars: { type: [String, Number], required: true },
    forks: { type: [String, Number], required: true },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin leftLine {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: map-get($colors, starsAndForksBorder);
    left: 0;
  }
}

.stars-and-forks {
  border-radius: 6px;
  border: 1px solid map-get($colors, starsAndForksBorder);
  width: max-content;
  overflow: hidden;

  &__item {
    &:nth-child(n + 2) {
      @include leftLine
    }
  }

  &__label, &__value, &__item, & {
    @include flex-center
  }

  &__label, &__value {
    padding: 5px 13px;
    gap: 4px;
  }

  &__value {
    @include leftLine;
    background-color: map-get($colors, starsAndForksValueBG);
  }

  &__label {
    background-color: map-get($colors, starsAndForksLabelBG);
  }

}
</style>
