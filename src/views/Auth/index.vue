<template>
  <div class="auth">
    <div class="auth__container container">
      <div class="auth__block">
        <header class="auth__block__header">
          <div class="auth__logo" v-html="require('@/assets/logo.svg')" />
          <p class="auth__slogan">More than just one repository.<br/>This is our digital world.</p>
        </header>
        <div class="auth__block__content">
          <app-btn class="auth__btn" @click="getCode">
            Authorize with github
            <app-icon class="auth__btn__icon" :size="23">github</app-icon>
          </app-btn>
        </div>
      </div>
      <div class="auth__preview" v-html="require('@/assets/img/macbook.svg')"/>
    </div>
  </div>
</template>

<script>
import AppBtn from '@/components/App/AppBtn';
import AppIcon from '@/components/App/AppIcon';
import env from '../../../env';

export default {
  name: 'Auth',
  components: { AppIcon, AppBtn },
  computed: {
    code() {
      return this.$route.query.code || null;
    },
  },
  async created() {
    if (this.code) {
      await this.enter();
    }
  },
  methods: {
    getCode() {
      const url = new URL('https://github.com/login/oauth/authorize');
      url.searchParams.append('client_id', env.client_id);
      url.searchParams.append('scope', 'repo,user');

      window.location.href = url.toString();
    },
    async enter() {
      try {
        const data = {
          clientId: env.client_id,
          code: this.code,
          clientSecret: env.secret_id,
        };

        const response = await this.$api.post('https://webdev-api.loftschool.com/github', data);
        const { token } = response.data;
        localStorage.setItem('token', token);
        await this.$router.push({ name: 'home' });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.auth {
  &__container {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }

  &__preview {
    position: absolute;
    top: 55%;
    width: 100%;
    padding: 0 23px;
    box-sizing: border-box;
    left: 0;
    z-index: -1;
  }

  &__block {
    width: 256px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 40px;
    border-radius: 6px;

    &__header, &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &__header {
      gap: 12px;
      margin-bottom: 38px;
    }
  }

  &__slogan {
    margin: 0;
  }

  &__logo {
    width: 200px;
  }

  &__btn {
    &__icon {
      margin-left: 12px;
    }
  }
}
</style>
