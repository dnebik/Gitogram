<template>
  <div class="follow-profile">
    <profile-info
      small
      :name="name"
      :login="login"
      :avatar-src="avatarSrc"
    />
    <app-btn
      class="follow-profile__btn"
      :disabled="loading"
      :loading="loading"
      :gray="gray"
      @click="$emit('change')"
    >
      {{ text }}
    </app-btn>
  </div>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo';
import AppBtn from '@/components/App/AppBtn';

export default {
  name: 'FollowProfile',
  components: { AppBtn, ProfileInfo },
  emits: ['change'],
  props: {
    name: { type: String, required: true },
    login: { type: String, default: null },
    avatarSrc: { type: String, default: null },
    followStatus: { type: String, required: true },
  },
  computed: {
    loading() {
      return this.followStatus === 'loading';
    },
    gray() {
      return this.loading || this.followStatus === 'followed';
    },
    text() {
      return this.followStatus === 'followed' ? 'Unfollow' : 'Follow';
    },
  },
};
</script>

<style scoped lang="scss">
.follow-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__btn {
    width: max-content;
    min-width: 91px;
  }
}
</style>
