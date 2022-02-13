<template>
  <div class="stories">
    <header-line-stories/>
    <div class="container">
      <stories-gallery :selected="+selected" />
    </div>
  </div>
</template>

<script>
import HeaderLineStories from '@/components/HeaderLine/HeaderLineStories';
import StoriesGallery from '@/components/StoriesGallery';

export default {
  name: 'Stories',
  components: { StoriesGallery, HeaderLineStories },
  props: ['selected'],
};
</script>

<style scoped lang="scss">

.stories {
  overflow: hidden;
  min-height: 100vh;
}
</style>
