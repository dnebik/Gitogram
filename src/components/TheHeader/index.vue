<template>
  <header class="header" :class="{ 'header--dark': dark }">
    <div class="container">
      <div class="header__top-line">
        <slot name="header">
          <header-line />
        </slot>
      </div>
      <div class="header__content" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLine from '@/components/HeaderLine';

export default {
  name: 'TheHeader',
  components: { HeaderLine },
  props: {
    dark: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

$marginContent: 32px;

.header {
  &:not(&--dark) {
    background-color: map-get($colors, lightgray);
    box-shadow: 0 0.5px 0 map-get($colors, darkgray);
  }
  &--dark {
    background-color: map-get($colors, darkBG);
  }

  overflow: auto;

  &__content {
    margin-bottom: $marginContent;
  }
}
</style>
