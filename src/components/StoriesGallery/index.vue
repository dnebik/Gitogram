<template>
  <div class="stories-gallery">
    s
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StoriesGallery',
  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
  },
};
</script>

<style scoped>

</style>
