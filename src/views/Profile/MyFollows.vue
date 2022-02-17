<template>
  <div class="follows">
    <follow-profile
      class="follow__item"
      v-for="item in list"
      :key="item.id"
      :avatar-src="item.owner.avatar_url"
      :login="item.owner.login"
      :name="item.owner.name"
      :follow-status="item.status"
      @change="toggleFollow(item)"
    />
  </div>
</template>

<script>
import FollowProfile from '@/components/FollowProfile';

export default {
  name: 'MyFollows',
  components: { FollowProfile },
  data() {
    return {
      loaded: false,
      list: [],
    };
  },
  watch: {
    stared: {
      handler(to) {
        if (!this.loaded && to) {
          this.loaded = true;
          this.list = this.makeList();
        }
      },
      immediate: true,
    },
  },
  computed: {
    stared() {
      return this.$store.state.profile.stared;
    },
  },
  methods: {
    makeList() {
      return this.stared.map((repo) => ({
        ...repo,
        status: 'followed',
      }));
    },
    async toggleFollow(repo) {
      const repoFromList = this.list.find((item) => item.id === repo.id);
      const { status } = repoFromList;
      repoFromList.status = 'loading';
      switch (status) {
      case 'followed':
        await this.$api.delete(`/user/starred/${repo.owner.login}/${repo.name}`);
        repoFromList.status = 'unfollowed';
        break;
      case 'unfollowed':
        await this.$api.put(`/user/starred/${repo.owner.login}/${repo.name}`);
        repoFromList.status = 'followed';
        break;
      default: console.log('unknow');
      }
      await this.$store.dispatch('profile/getStared');
    },
  },
};
</script>

<style scoped lang="scss">
.follows {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
