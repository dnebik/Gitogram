<template>
  <div class="line">
    <div class="line__logo" v-html="require('@/assets/logo.svg')" />
    <div class="line__actions">
      <router-link class="line__actions__link line__actions__link--home" :to="{ name: 'home' }">
        <app-icon>home</app-icon>
      </router-link>
      <app-avatar without-line is-button />
      <a class="line__actions__link line__actions__link--logout">
        <app-icon>sign-out</app-icon>
      </a>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';
import AppAvatar from '@/components/AppAvatar';

export default {
  name: 'HeaderLine',
  components: { AppAvatar, AppIcon },
};
</script>

<style scoped lang="scss">
$marginLine: 42px;
$heightLine: 40px;

.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $heightLine;
  margin-top: $marginLine;
  margin-bottom: $marginLine;

  &__logo {
    height: 100%;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
  }
}
</style>
