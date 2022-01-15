<template>
  <div class="line">
    <div class="line__logo" v-html="require('@/assets/logo.svg')" />
    <div class="line__actions">
      <router-link class="line__actions__link line__actions__link--home" :to="{ name: 'home' }">
        <app-icon>home</app-icon>
      </router-link>
      <a class="line__actions__link line__actions__link--profile">
        <img :src="require('@/assets/img/avatar/avatar_1.png')" alt="profile avatar">
      </a>
      <a class="line__actions__link line__actions__link--logout">
        <app-icon>sign-out</app-icon>
      </a>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'HeaderLine',
  components: { AppIcon },
};
</script>

<style scoped lang="scss">
$marginContent: 32px;
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

  &__content {
    margin-bottom: $marginContent;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
  }
}
</style>
