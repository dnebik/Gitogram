<template>
  <div class="stories">
    <the-header dark>
      <template #header>
        <div class="stories__head-line">
          <router-link
            :to="{ name: 'home' }"
            class="stories__head-line__logo"
            ref="logo"
            v-html="require('@/assets/logo.svg')"
          />
          <button
            class="clear-button stories__head-line__close"
            @click="$router.push({name: 'home'})"
          >
            <app-icon :size="22">cross</app-icon>
          </button>
        </div>
      </template>
    </the-header>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import AppIcon from '@/components/App/AppIcon';
import colors from '@/assets/styles/colors.scss';

export default {
  name: 'Stories',
  components: { AppIcon, TheHeader },
  data() {
    return {
      colors,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.changeColor();
    });
    document.documentElement.style.backgroundColor = colors.darkBG;
  },
  beforeUnmount() {
    document.documentElement.style.backgroundColor = colors.white;
  },
  methods: {
    changeColor() {
      const logo = this.$refs.logo.$el;
      const paths = logo.querySelectorAll('path');
      paths.forEach((path) => {
        path.setAttribute('fill', this.colors.white);
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/sizes";

.stories {
  &__head-line {
    height: $heightHeadLine;
    margin-top: $marginHeadLine;
    margin-bottom: $marginHeadLine;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__logo {
      height: inherit;
    }
    &__close {

    }
  }
}
</style>
