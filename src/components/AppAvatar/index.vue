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
        :src="require('@/assets/img/avatar/avatar_1.png')"
        alt="username avatar"
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
      :src="require('@/assets/img/avatar/avatar_1.png')"
      alt="username avatar"
    >
  </button>
</div>
</template>

<script>
export default {
  name: 'AppAvatar',
  emits: ['click'],
  props: {
    isButton: { type: Boolean, default: false },
    // username: { type: String, required: true },
    withoutLine: { type: Boolean, default: false },
  },
  computed: {
    link() {
      // return { name: 'profile', props: { username: this.username } };
      return { name: 'home' };
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";
.avatar {
  aspect-ratio: 1 / 1;
  height: 100%;

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
    padding: 6px;
    border: 2px solid map-get($colors, purple);
    border-radius: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  &__image {
    object-fit: contain;
    height: 100%;
  }
}
</style>
