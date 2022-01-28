<template>
  <div class="story-item">
    <header class="story-item__header">
      <app-progressbar/>
      <div class="story-item__header__profile">

      </div>
    </header>
    <div class="story-item__content">

    </div>
    <footer class="story-item__footer">
      <app-follow-btn />
    </footer>
  </div>
</template>

<script>
import AppProgressbar from '@/components/App/AppProgressbar';
import AppFollowBtn from '@/components/App/AppFollowBtn';

export default {
  name: 'index',
  components: { AppFollowBtn, AppProgressbar },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

.story-item {
  width: 375px;
  height: 667px;
  background-color: map-get($colors, white);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;

  &__header {
    padding: 8px 8px 13px 8px;
    height: 67px;
  }

  &__content {
    flex: 1;
    border-top: 1px solid map-get($colors, storyBorder);
    border-bottom: 1px solid map-get($colors, storyBorder);
  }

  &__footer {
    padding: 32px 52px;
  }
}
</style>
