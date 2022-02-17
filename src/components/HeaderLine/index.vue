<template>
  <div class="line">
    <div class="line__logo" v-html="require('@/assets/logo.svg')" />
    <div class="line__actions">
      <router-link class="line__actions__link line__actions__link--home" :to="{ name: 'home' }">
        <app-icon>home</app-icon>
      </router-link>
      <app-avatar
        :avatar-image="userImage"
        without-line
        :link="{ name: 'profile_repos' }"
      />
      <button @click="logout" class="clear-button line__actions__link line__actions__link--logout">
        <app-icon>sign-out</app-icon>
      </button>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';
import AppAvatar from '@/components/App/AppAvatar';

export default {
  name: 'HeaderLine',
  components: { AppAvatar, AppIcon },
  computed: {
    userImage() {
      return this.$store.state.profile.user.avatar_url;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('profile/logout');
      await this.$router.push({ name: 'auth' });
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/sizes";

.line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $heightHeadLine;
  margin-top: $marginHeadLine;
  margin-bottom: $marginHeadLine;

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
