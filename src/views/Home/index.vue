<template>
  <div class="home">
    <the-header>
      <follow-line/>
    </the-header>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import FollowLine from '@/components/FollowLine';

export default {
  name: 'Home',
  components: { FollowLine, TheHeader },
};
</script>
