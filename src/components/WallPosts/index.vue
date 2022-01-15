<template>
  <div class="wall-posts">
    <div class="container">
      <div class="wall-posts__posts-wrapper">
        <wall-post v-for="item in 10" :key="item" username="Irat">
          g
        </wall-post>
      </div>
    </div>
  </div>
</template>

<script>
import WallPost from '@/components/WallPosts/WallPost';

export default {
  name: 'WallPosts',
  components: { WallPost },
};
</script>

<style scoped lang="scss">
.wall-posts {
  .wall-posts__posts-wrapper {
    margin: auto;
    max-width: 979px;
    display: flex;
    gap: 24px;
    flex-direction: column;
  }
}
</style>
