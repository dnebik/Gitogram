<template>
  <button
    :class="[
      'follow-btn',
      'clear-button',
      `follow-btn--${ isFollow ? 'follow' : 'unfollow' }`
    ]"
    @click="$emit('click')"
  >
    {{ isFollow ? 'Follow' : 'Unfollow' }}
  </button>
</template>

<script>
export default {
  name: 'AppFollowBtn',
  props: {
    isFollow: { type: Boolean, default: false },
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/colors";
.follow-btn {
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  padding: 11px;
  width: 100%;
  color: map-get($colors, white);

  &.follow-btn--follow {
    background-color: map-get($colors, green);
  }

  &.follow-btn--unfollow {
    background-color: map-get($colors, gray);
  }
}
</style>
