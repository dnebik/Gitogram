<template>
  <div class="wall-posts">
    <div class="container">
      <div v-if="stared" class="wall-posts__posts-wrapper">
        <wall-post
          v-for="item in stared"
          :key="item.id"
          :username="item.owner.login"
          :avatar="item.owner.avatar_url"
        >
          <repository-info
            :name="item.name"
            :readme-url="`/repos/${item.owner.login}/${item.name}/readme`"
            :issues-url="`/repos/${item.owner.login}/${item.name}/issues`"
            :stars="item.stargazers_count"
            :forks="item.forks_count"
          />
        </wall-post>
      </div>
    </div>
  </div>
</template>

<script>
import WallPost from '@/components/WallPosts/WallPost';
import RepositoryInfo from '@/components/RepositoryInfo';

export default {
  name: 'WallPosts',
  components: { RepositoryInfo, WallPost },
  computed: {
    stared() {
      return this.$store.state.profile.stared;
    },
  },
  mounted() {
    if (!this.stared) {
      this.load();
    }
  },
  methods: {
    load() {
      this.$store.dispatch('profile/getStared');
    },
  },
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
