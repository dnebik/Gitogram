<template>
  <div class="repos">
    <repository-info
      class="repos__item"
      v-for="repo in repos"
      :key="repo.id"
      :name="repo.name"
      :readme-url="`/repos/${repo.owner.login}/${repo.name}/readme`"
      :issues-url="`/repos/${repo.owner.login}/${repo.name}/issues`"
      :stars="repo.stargazers_count"
      :forks="repo.forks_count"
    />
  </div>
</template>

<script>
import RepositoryInfo from '@/components/RepositoryInfo';

export default {
  name: 'MyRepos',
  components: { RepositoryInfo },
  computed: {
    repos() {
      return this.$store.state.profile.repositories || [];
    },
  },
};
</script>

<style scoped lang="scss">
.repos {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .repos__item {
    //max-width: 100%;
  }
}
</style>
