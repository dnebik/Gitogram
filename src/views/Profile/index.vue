<template>
  <div class="profile">
    <the-header />
    <div class="container">
      <div class="profile__content-wrapper">
        <div class="profile__profile-content">
          <h1 class="profile__title">My profile</h1>
          <profile-info
            :avatar-src="user.avatar_url"
            :repos="repos.length"
            :follows="stared?.length || 0"
            :name="user.name"
            :login="user.login"
          />
        </div>
        <div class="profile__route-content">
          <h1 class="profile__title">{{ routeTitle }}</h1>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import ProfileInfo from '@/components/ProfileInfo';
import { computed } from 'vue';
import store from '@/store';
import { useRoute } from 'vue-router';

export default {
  name: 'Profile',
  components: { ProfileInfo, TheHeader },
  setup() {
    const route = useRoute();

    const user = computed(() => store.value.state.profile.user);
    const stared = computed(() => store.value.state.profile.stared);
    const routeTitle = computed(() => {
      const routeName = route.name;
      return routeName === 'profile_repos' ? 'Repositories' : 'Follows';
    });
    const repos = computed(() => store.value.state.profile.repositories || []);

    if (!stared.value) {
      store.value.dispatch('profile/getStared');
    }

    return {
      user,
      stared,
      routeTitle,
      repos,
    };
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/colors";
.profile {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__content-wrapper {
    display: flex;
    flex: 1;
    width: 100%;
  }

  &__profile-content {
    max-width: 380px;
    padding: 40px 50px 0 0;
    position: sticky;
    top: 0;
    width: 100%;
    height: max-content;
  }

  &__title {
    margin: 0 0 36px 0;
    font-weight: bold;
    font-size: 26px;
  }

  &__route-content {
    padding: 40px 50px 90px 70px;
    width: 100%;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: map-get($colors, gray);
      left: 0;
      top: 0;
    }
  }
}

.container {
  flex: 1;
  width: 100%;
  display: flex;
}
</style>
