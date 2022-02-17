<template>
  <div class="profile-info" :class="{ 'profile-info--small': small }">
    <div class="profile-info__avatar-wrapper">
      <img :src="avatarSrc" alt="avatar" class="profile-info__avatar">
    </div>
    <div class="profile-info__text">
      <span class="profile-info__login">{{ login }}</span>
      <div v-if="!small" class="profile-info__counts">
        <div class="profile-info__count profile-info__counts--repos">
          <span class="profile-info__count__number">{{ repos }}</span>
          <router-link
            :to="{ name: 'profile_repos' }"
            class="profile-info__count__name"
          >
            <span>repos</span>
          </router-link>
        </div>
        <div class="profile-info__count profile-info__counts--follows">
          <span class="profile-info__count__number">{{ follows }}</span>
          <router-link
            :to="{ name: 'profile_follows' }"
            class="profile-info__count__name"
          >
            <span>follows</span>
          </router-link>
        </div>
      </div>
      <span v-if="name && name !== ''" class="profile-info__name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo',
  props: {
    avatarSrc: { type: String, required: true },
    login: { type: String, required: true },
    name: { type: String, default: null },
    repos: { type: Number, default: 0 },
    follows: { type: Number, default: 0 },
    small: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/colors";
.profile-info {
  display: flex;
  gap: 20px;

  &.profile-info--small {
    .profile-info__avatar-wrapper {
      $size: 74px;
      min-width: $size;
      min-height: $size;
      height: $size;
      width: $size;
    }

    .profile-info__login {
      font-weight: normal;
      font-size: 18px;
    }
  }

  &:not(.profile-info--small) {
    .profile-info__avatar-wrapper {
      $size: 90px;
      min-width: $size;
      min-height: $size;
      height: $size;
      width: $size;
    }

    .profile-info__login {
      font-weight: bold;
      font-size: 24px;
    }
  }

  &__avatar-wrapper {
    overflow: hidden;
    border-radius: 100%;
  }

  &__avatar {
    height: 100%;
    width: 100%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__counts {
    display: flex;
    gap: 10px;
  }

  &__count {
    display: flex;
    gap: 4px;
    align-items: center;

    &__number {
      font-size: 14px;
      font-weight: bold;
    }

    &__name {
      font-size: 12px;
      font-weight: normal;
      vertical-align: top;
      color: inherit;
      text-decoration: none;
      position: relative;

      &.router-link-active {
        color: map-get($colors, green);
      }

      &:hover {
        &:after {
          position: absolute;
          display: block;
          content: '';
          height: 1px;
          width: 100%;
          bottom: -2px;
          left: 0;
          background-color: map-get($colors, green);
        }
      }
    }
  }

  &__name {
    color: map-get($colors, gray);
    font-size: 14px;
    font-weight: normal;
  }
}
</style>
