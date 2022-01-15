<template>
  <header class="header">
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
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

$marginContent: 32px;

.header {
  background-color: map-get($colors, lightgray);
  overflow: auto;
  box-shadow: 0 0.5px 0 map-get($colors, darkgray);

  &__content {
    margin-bottom: $marginContent;
  }
}
</style>
