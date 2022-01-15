<template>
  <div class="wall-post">
    <header class="wall-post__header">
      <app-avatar/>
      <span>{{ username }}</span>
    </header>
    <div class="wall-post__content">
      <slot/>
    </div>
    <footer class="wall-post__footer">
      <issues-list/>
    </footer>
  </div>
</template>

<script>
import AppAvatar from '@/components/App/AppAvatar';
import IssuesList from '@/components/IssuesList';

export default {
  name: 'WallPost',
  components: { IssuesList, AppAvatar },
  props: {
    username: { type: String, required: true },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/sizes";
.wall-post {
  &__header {
    display: flex;
    align-items: center;
    gap: 14px;
    height: $postHeaderHeight;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  &__content {
    margin-bottom: 18px;
  }
}
</style>
