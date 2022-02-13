<template>
  <div class="repository">
    <app-sheet class="repository-info">
      <h1 class="repository-info__title">{{ name }}</h1>
      <div v-if="readme" class="repository-info__description" >
        <button class="repository-info__description__show clear-button" ref="btn" @click="showAll"/>
        <div class="repository-info__description__content" v-html="readme"/>
      </div>
      <div v-else class="repository-info__loading">
        <app-icon :fill="colors.green">loading</app-icon>
      </div>
      <app-stars-and-forks
        class="repository-info__stars-and-forks"
        :stars="stars"
        :forks="forks"
      />
    </app-sheet>
    <footer v-if="issues && issues.length" class="repository__issues">
      <issues-list :list="issues" />
    </footer>
  </div>
</template>

<script>
import AppSheet from '@/components/App/AppSheet';
import AppStarsAndForks from '@/components/App/AppStarsAndForks';
import AppIcon from '@/components/App/AppIcon';
import colors from '@/assets/styles/colors.scss';
import IssuesList from '@/components/IssuesList';

export default {
  name: 'RepositoryInfo',
  components: {
    IssuesList, AppIcon, AppStarsAndForks, AppSheet,
  },
  data() {
    return {
      readme: null,
      issues: null,
      colors,
      observer: null,
    };
  },
  props: {
    name: { type: String, required: true },
    readmeUrl: { type: String, required: true },
    issuesUrl: { type: String, required: true },
    stars: { type: [String, Number], required: true },
    forks: { type: [String, Number], required: true },
  },
  mounted() {
    this.observer = new IntersectionObserver(this.observerHandler, {
      rootMargin: '300px',
    });
    this.observer.observe(this.$el);
  },
  unmounted() {
    this.observer.disconnect();
  },
  methods: {
    showAll() {
      const { btn } = this.$refs;
      const parent = btn.parentNode;

      parent.removeChild(btn);
      parent.style.maxHeight = '0px';
      parent.style.maxHeight = `${parent.scrollHeight}px`;
    },
    observerHandler(event) {
      if (event[0].isIntersecting) {
        this.loadReadme();
        this.loadIssues();
        this.observer.disconnect();
      }
    },
    async loadIssues() {
      const { data } = await this.$api.get(this.issuesUrl, {
        headers: {
          accept: 'application/vnd.github.v3.html+json',
        },
      });
      this.issues = Array.from(data).slice(0, 10);
    },
    async loadReadme() {
      const { data } = await this.$api.get(this.readmeUrl, {
        headers: {
          accept: 'application/vnd.github.v3.html+json',
        },
      });
      this.readme = data;
    },
  },
};
</script>

<style scoped lang="scss">
@import "/src/assets/styles/colors";
.repository {
  &-info {
    &__title {
      font-weight: bold;
      font-size: 26px;
      margin: 0 0 15px 0;
    }

    &__description {
      margin: 0 0 32px 0;
      max-height: 150px;
      overflow: hidden;
      transition: 1s;
      position: relative;

      &__show {
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, map-get($colors, white) 20%, transparent);
        position: absolute;

        &:after {
          color: inherit;
          font-weight: lighter;
          content: "<< показать >>";
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
        }
      }
    }

    &__loading {
      margin: 32px 0;
      display: flex;
      justify-content: center;
    }
  }

  &__issues {
    margin-top: 18px;
  }
}
</style>
