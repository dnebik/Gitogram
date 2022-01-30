<template>
  <div class="story-item">
    <header class="story-item__header">
      <app-progressbar
        v-if="loader"
        :is-running="active"
        :time="5000"
        @loaded="$emit('change')"
      />
      <div class="story-item__header__profile">
        <app-avatar
          class="story-item__header__profile__avatar"
          :avatar-image="avatarImage"
          without-line
        />
        <span class="story-item__header__profile__name" >{{ username }}</span>
      </div>
    </header>
    <div class="story-item__content">
      <div v-if="readme" v-html="readme"/>
      <div class="story-item__skeleton" v-else>
        <content-loader
          v-bind="createAttrs(136)"
        >
          <rect x="0" y="0" rx="3" ry="3" width="100%" height="136" />
        </content-loader>
        <content-loader
          v-for="index in 2"
          :key="index"
          v-bind="createAttrs(64)"
        >
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="16" />
          <rect x="0" y="24" rx="3" ry="3" width="78%" height="16" />
          <rect x="0" y="48" rx="3" ry="3" width="86%" height="16" />
        </content-loader>
      </div>
    </div>
    <footer class="story-item__footer">
      <app-follow-btn is-follow />
    </footer>
  </div>
</template>

<script>
import AppProgressbar from '@/components/App/AppProgressbar';
import AppFollowBtn from '@/components/App/AppFollowBtn';
import AppAvatar from '@/components/App/AppAvatar';
import { ContentLoader } from 'vue-content-loader';

export default {
  name: 'StoryItem',
  components: {
    AppAvatar, AppFollowBtn, AppProgressbar, ContentLoader,
  },
  emits: ['change'],
  props: {
    avatarImage: { type: String, required: true },
    username: { type: String, required: true },
    active: { type: Boolean, required: false },
    loader: { type: Boolean, default: false },
    readme: { type: String, default: null },
  },
  methods: {
    createAttrs(height) {
      return {
        class: 'svg-preserve',
        speed: '2',
        width: '100%',
        height,
        'view-box': `0 0 100 ${height}`,
        'preserve-aspect-ratio': 'none',
        'background-color': '#f3f3f3',
        'foreground-color': '#ecebeb',
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";

.story-item {
  width: 375px;
  max-width: 100%;
  height: 667px;
  background-color: map-get($colors, white);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;

  &__header {
    padding: 8px 8px 13px 8px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    &__profile {
      display: flex;
      height: 32px;
      gap: 12px;
      align-items: center;
    }
  }

  &__content {
    flex: 1;
    padding: 18px;
    font-size: 12px;
    border-top: 1px solid map-get($colors, storyBorder);
    border-bottom: 1px solid map-get($colors, storyBorder);
    overflow: auto;
  }

  &__skeleton {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  &__footer {
    padding: 32px 52px;
  }
}
</style>
