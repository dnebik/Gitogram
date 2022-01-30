<template>
  <div class="stories-gallery">
    <div
      class="stories-gallery__stories"
      ref="gallery"
      :style="{ transform: transform }"
    >
      <story-item
        v-for="(repo, index) in repos.data"
        :key="index"
        class="stories-gallery__story"
        :class="{'stories-gallery__story--selected': index === storySelected}"
        :username="repo.owner.login"
        :avatar-image="repo.owner.avatar_url"
        :active="index === storySelected"
        @change="storySelected++"
        :loader="index + 1 < repos.data.length"
        :readme="repo.readme"
      />
    </div>
    <div class="stories-gallery__controls">
      <button
        class="stories-gallery__control stories-gallery__control--left clear-button"
        v-if="storySelected > 0 && repos.data.length"
        @click="storySelected--"
      >
        <app-icon :size="18">arrow</app-icon>
      </button>
      <button
        class="stories-gallery__control stories-gallery__control--right clear-button"
        v-if="storySelected + 1 < repos.data.length"
        @click="storySelected++"
      >
        <app-icon :size="18">arrow</app-icon>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import StoryItem from '@/components/StoriesGallery/StoryItem';
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'StoriesGallery',
  components: { AppIcon, StoryItem },
  props: {
    selected: { type: Number, default: 0 },
  },
  data() {
    return {
      storySelected: 0,
      width: 0,
      timer: null,
    };
  },
  watch: {
    storySelected: 'change',
    'repos.data': 'change',
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
    transform() {
      const gap = this.storySelected * 20;
      return `translateX(-${Math.floor(this.width / 2) + (this.storySelected * this.width) + gap}px)`;
    },
  },
  async mounted() {
    this.storySelected = +this.selected;
    if (!this.repos.data.length && !this.repos.error && !this.repos.loading) {
      await this.$store.dispatch('repos/load');
    }
    this.calcPosition();
    window.addEventListener('resize', this.calcPosition);
  },
  unmounted() {
    window.removeEventListener('resize', this.calcPosition);
  },
  methods: {
    calcPosition() {
      const { gallery } = this.$refs;
      const child = gallery.children[0];
      this.width = child.clientWidth;
    },
    change() {
      const selected = this.repos.data[this.storySelected];
      if (selected && !selected.readme) {
        this.loadReadme();
      }
    },
    loadReadme() {
      this.$store.dispatch('repos/loadReadme', { index: this.storySelected });
    },
  },
};
</script>

<style scoped lang="scss">
@use "sass:math";
@import "src/assets/styles/colors";
.stories-gallery {
  position: relative;

  &__stories {
    display: flex;
    gap: 20px;
    left: 50%;
    position: relative;
    transition: 0.3s;
  }

  &__story {
    transition: 0.3s;
    flex-shrink: 0;
    &:not(.stories-gallery__story--selected) {
      transform: scale(0.8);
    }
  }

  &__controls {
    $padding: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100vw - #{$padding * 2});
    display: flex;
    padding: 0 $padding;
    max-width: 500px;
  }

  &__control {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 1000px;
    background-color: map-get($colors, white);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid map-get($colors, black);

    &:hover {
      &:deep {
        path {
          fill: map-get($colors, green);
        }
      }
    }

    &--left {
      transform: rotate(180deg);
    }

    &--right {
      margin-left: auto;
    }
  }

}
</style>
