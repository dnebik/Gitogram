<template>
  <button
    :disabled="disabled"
    class="clear-button btn"
    :class="{ 'btn--gray': gray }"
    @click="$emit('click')"
  >
    <app-icon :size="18" v-if="loading">loading</app-icon>
    <slot v-else />
  </button>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'AppBtn',
  components: { AppIcon },
  emits: ['click'],
  props: {
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    gray: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/colors";

.btn {
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  padding: 11px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: map-get($colors, white);

  &:not(:disabled) {
    background-color: map-get($colors, green);
  }

  &:disabled, &.btn--gray {
    background-color: map-get($colors, gray);
  }
}
</style>
