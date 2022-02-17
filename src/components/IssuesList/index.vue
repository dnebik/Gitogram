<template>
  <div class="issues-list">
    <button class="clear-button issues-list__toggle-button" @click="isShown = !isShown">
      <span class="issues-list__text">{{ isShown ? text.hidden : text.viewed }}</span>
      <app-icon
        small
        :class="['issues-list__arrow', { 'issues-list__arrow--rotated': isShown }]"
      >
        issue-arrow
      </app-icon>
    </button>
    <div class="issues-list__issues" ref="issues">
      <div v-for="(issue) in list" :key="issue.id" class="issues-list__issue">
        <span class="issues-list__issue__username">{{issue.user.login}}</span>
        <span class="issues-list__issue__text">{{issue.title}}</span>
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
      text: {
        viewed: 'Hide issues',
        hidden: 'View issues',
      },
    };
  },
  props: {
    list: { type: [Array, Object], required: true },
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
  methods: {
    issuesHeightFix() {
      const { issues } = this.$refs;
      if (this.isShown) {
        issues.style.maxHeight = '0';
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
    transform: rotate(180deg);

    &--rotated {
      transform: rotate(0deg);
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
