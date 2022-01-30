<template>
<div class="avatar">
  <router-link
    class="avatar__action avatar__action--link clear-link"
    v-if="!isButton"
    :to="link"
  >
    <div :class="['avatar__ring', { 'avatar__ring--hidden': withoutLine }]">
      <img
        class="avatar__image"
        :src="require('@/assets/img/avatar/avatar-placeholder.jpg')"
        alt="username avatar"
        ref="img"
      >
    </div>
  </router-link>
  <button
    v-else
    class="avatar__action avatar__action--button clear-button"
    type="button"
    @click="$emit('click')"
  >
    <img
      class="avatar__image"
      :src="avatarImage"
      alt="username avatar"
    >
  </button>
</div>
</template>

<script>
import baseImage from '@/assets/img/avatar/avatar_1.png';

export default {
  name: 'AppAvatar',
  emits: ['click'],
  props: {
    isButton: { type: Boolean, default: false },
    withoutLine: { type: Boolean, default: false },
    avatarImage: { type: String, default: baseImage },
  },
  computed: {
    link() {
      // return { name: 'profile', props: { username: this.username } };
      return { name: 'home' };
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    this.$nextTick(this.startObserve);
  },
  unmounted() {
    this.observer.disconnect();
  },
  methods: {
    startObserve() {
      this.observer = new IntersectionObserver(this.observerHandler, { rootMargin: '100px' });
      this.observer.observe(this.$el);
    },
    observerHandler(event) {
      if (event[0].isIntersecting) {
        this.$refs.img.src = this.avatarImage;
        this.observer.disconnect();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";
.avatar {
  aspect-ratio: 1 / 1;
  height: 100%;
  overflow: hidden;

  &__action {
    @mixin action {
      display: block;
      height: 100%;
    }
    &--button { @include action}
    &--link { @include action}
  }

  &__ring {
    height: 100%;
    padding: 5%;
    border: 2px solid map-get($colors, purple);
    border-radius: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  &__image {
    object-fit: contain;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
