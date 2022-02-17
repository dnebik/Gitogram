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
import { toRefs, computed } from 'vue';

export default {
  name: 'FollowProfile',
  components: { AppBtn, ProfileInfo },
  emits: ['change'],
  props: {
    name: { type: String, default: null },
    login: { type: String, required: true },
    avatarSrc: { type: String, default: null },
    followStatus: { type: String, required: true },
  },
  setup(props) {
    const { followStatus } = toRefs(props);
    const loading = computed(() => followStatus.value === 'loading');
    const gray = computed(() => loading.value || followStatus.value === 'followed');
    const text = computed(() => (followStatus.value === 'followed' ? 'Unfollow' : 'Follow'));

    return {
      loading,
      gray,
      text,
    };
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
