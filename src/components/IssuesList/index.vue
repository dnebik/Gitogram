<template>
  <div class="issues-list">
    <button class="clear-button issues-list__toggle-button" @click="isShown = !isShown">
      <span class="issues-list__text">{{ isShown ? 'Hide issues' : 'View issues' }}</span>
      <app-icon
        small
        :class="['issues-list__arrow', { 'issues-list__arrow--rotated': isShown }]"
      >
        arrow
      </app-icon>
    </button>
    <div class="issues-list__issues" ref="issues">
      <div v-for="(issues, index) in issueList" :key="index" class="issues-list__issue">
        <span class="issues-list__issue__username">{{issue.username}}</span>
        <span class="issues-list__issue__text">{{issue.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AppIcon from '@/components/App/AppIcon';

export default {
  name: 'IssuesList',
  components: { AppIcon },
  data() {
    return {
      isShown: false,
      issue: {
        username: 'Somename',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur corporis doloremque excepturi fugiat impedit laudantium magni minus mollitia, necessitatibus omnis pariatur ratione, sint vel veniam voluptas voluptatum? Et, sit!',
      },
    };
  },
  watch: {
    isShown: {
      handler() {
        this.$nextTick(() => {
          this.issuesHeightFix();
        });
      },
      immediate: true,
    },
  },
  computed: {
    issueList() {
      return Array.apply(null, { length: 8 }).map(() => this.issue);
    },
  },
  methods: {
    issuesHeightFix() {
      const { issues } = this.$refs;
      if (this.isShown) {
        issues.style.maxHeight = '0';
        console.log(issues.scrollHeight);
        issues.style.maxHeight = `${issues.scrollHeight }px`;
      } else {
        issues.style.maxHeight = '0';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.issues-list {
  &__toggle-button {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-bottom: 10px;
  }

  &__text {
    min-width: 90px;
  }

  &__arrow {
    transition: .2s;
    &--rotated {
      transform: rotate(180deg);
    }
  }

  &__issues {
    display: flex;
    flex-direction: column;
    gap: 6px;
    height: 100%;
    overflow: hidden;
    transition: .3s;
  }

  &__issue {
    display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    gap: 8px;

    &__text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__username {
      font-weight: 700;
    }
  }
}
</style>
