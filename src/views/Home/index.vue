<template>
  <div class="home">
    <app-progressbar/>
    <the-header class="home__header">
      <follow-line/>
    </the-header>
    <wall-posts class="home__content"/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import FollowLine from '@/components/FollowLine';
import WallPosts from '@/components/WallPosts';
import AppProgressbar from '@/components/App/AppProgressbar';

export default {
  name: 'Home',
  components: {
    AppProgressbar, WallPosts, FollowLine, TheHeader,
  },
};
</script>

<style lang="scss">
.home {
  &__header {
    margin-bottom: 32px;
  }
}
</style>
