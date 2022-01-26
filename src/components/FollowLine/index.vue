<template>
  <div class="story-line" @scroll="onScroll">
    <template v-if="repos.data.length > 0" >
      <div class="story-line__shadow story-line__shadow--left" ref="shadowLeft"/>
      <div class="story-line__stories-wrapper">
        <app-story
          v-for="(repo, index) in repos.data"
          :key="index"
          :username="repo.owner.login"
          :avatar-image="repo.owner.avatar_url"
        />
        <div class="story-line__loader" ref="spinner">
          <app-icon class="story-line__loader__icon" :stroke="colors.purple">
            spinner
          </app-icon>
        </div>
      </div>
      <div class="story-line__shadow story-line__shadow--right" ref="shadowRight"/>
    </template>
  </div>
</template>

<script>
import AppStory from '@/components/App/AppStory';
import { mapState } from 'vuex';
import AppIcon from '@/components/App/AppIcon';
import colors from '@/assets/styles/colors.scss';

export default {
  name: 'FollowLine',
  components: { AppIcon, AppStory },
  data() {
    return {
      shadowVisibleRange: 20,
      colors,
    };
  },
  async mounted() {
    await this.$store.dispatch('repos/load');
    if (this.repos.data.length > 0) {
      await this.$nextTick(() => {
        this.checkShadows();

        const observer = new IntersectionObserver(this.observerHandler, { rootMargin: '100px' });
        observer.observe(this.$refs.spinner);
      });
    }
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
  },
  methods: {
    async observerHandler(event) {
      if (event[0].isIntersecting) {
        await this.$store.dispatch('repos/load');
      }
    },
    onScroll() {
      this.checkShadows();
    },
    checkShadows() {
      const { scrollLeft, clientWidth, scrollWidth } = this.$el;
      const scrollRight = scrollWidth - clientWidth - scrollLeft;

      const { shadowLeft, shadowRight } = this.$refs;
      shadowLeft.style.opacity = String(
        (((this.shadowVisibleRange / 100) * scrollLeft) / 10).toFixed(1),
      );
      shadowRight.style.opacity = String(
        (((this.shadowVisibleRange / 100) * scrollRight) / 10).toFixed(1),
      );
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:math";

@import "src/assets/styles/sizes";
@import "src/assets/styles/colors";

.story-line {
  position: relative;
  overflow: auto;
  display: flex;
  min-height: 120px;

  &__stories-wrapper {
    display: flex;
    gap: 31px;
  }

  &__loader {
    display: flex;
    align-items: center;
  }

  &__shadow {
    position: sticky;
    top: 0;
    width: 0;
    pointer-events: none;

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
      transform: rotate(180deg);
    }

    &:after {
      content: '';
      display: block;
      height: 100%;
      width: math.div($storyWidth, 1.5);
      background: linear-gradient(90deg, map-get($colors, lightgray) 30%, rgba(0, 0, 0, 0));
    }
  }
}
</style>
