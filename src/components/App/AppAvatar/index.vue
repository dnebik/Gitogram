<template>
<div class="avatar">
  <component
    :is="attrs.is"
    v-bind="attrs"
  >
    <div :class="['avatar__ring', { 'avatar__ring--hidden': withoutLine }]">
      <img
        class="avatar__image"
        :src="require('@/assets/img/avatar/avatar-placeholder.jpg')"
        alt="username avatar"
        ref="img"
      >
    </div>
  </component>
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
    link: { type: Object, default: null },
  },
  data() {
    return {
      observer: null,
    };
  },
  computed: {
    attrs() {
      if (!this.isButton && this.link) {
        return {
          is: 'router-link',
          class: 'avatar__action avatar__action--link clear-link',
          to: this.link,
        };
      }
      return {
        is: 'button',
        class: 'avatar__action avatar__action--button clear-button',
        type: 'button',
        'v-on': { onClick: () => this.$emit('click') },
      };
    },
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
      width: 100%;
      overflow: hidden;
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
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &--hidden {
      border: 2px solid transparent !important;
    }
  }

  &:hover {
    .avatar__ring {
      border: 2px solid transparent !important;
    }
  }

  &__image {
    object-fit: contain;
    height: 100%;
    border-radius: 100%;
  }
}
</style>
