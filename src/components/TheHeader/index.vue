<template>
  <header class="header">
    <div class="container">
      <div class="header__top-line">
        <span class="header-logo">Gitogram /</span>
        <app-icon>home</app-icon>
      </div>
      <div class="header__content" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </header>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'TheHeader',
  components: { AppIcon },
};
</script>

<style scoped lang="scss">
.header {
  &__top-line {
    display: flex;
    justify-content: space-between;
  }
}
</style>
