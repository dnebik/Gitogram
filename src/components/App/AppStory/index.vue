<template>
  <div class="user-story">
    <app-avatar
      class="user-story__avatar"
      :avatar-image="avatarImage"
      :link="link"
    />
    <span class="user-story__username">{{ username }}</span>
  </div>
</template>

<script>
import AppAvatar from '@/components/App/AppAvatar';

export default {
  name: 'AppStory',
  components: { AppAvatar },
  props: {
    username: { type: String, required: true },
    avatarImage: { type: String, required: true },
    link: { type: Object, required: true },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/sizes";

.user-story {
  display: flex;
  width: $storyWidth;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  &__avatar {
    height: $storyWidth !important;
  }

  &__username {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
