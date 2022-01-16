<template>
  <app-sheet class="repository-info">
    <h1 class="repository-info__title">Vue.js</h1>
    <div class="repository-info__description">
      <span class="attention">Lorem</span> ipsum dolor sit amet, consectetur adipisicing elit.
      Assumenda beatae esse illum itaque minima nam qui quia quos recusandae? Aliquam consectetur
      eum excepturi, laborum magnam molestiae quasi saepe tenetur unde?
    </div>
    <app-stars-and-forks class="repository-info__stars-and-forks" stars="10k" forks="4" />
  </app-sheet>
</template>

<script>
import AppSheet from '@/components/App/AppSheet';
import AppStarsAndForks from '@/components/App/AppStarsAndForks';

export default {
  name: 'RepositoryInfo',
  components: { AppStarsAndForks, AppSheet },
};
</script>

<style scoped lang="scss">
.repository-info {
  &__title {
    font-weight: bold;
    font-size: 26px;
    margin: 0 0 15px 0;
  }

  &__description {
    margin: 0 0 32px 0;
  }
}
</style>
