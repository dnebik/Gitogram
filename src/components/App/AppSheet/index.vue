<template>
  <div class="sheet">
    <slot />
  </div>
</template>

<script>
export default { name: 'AppSheet' };
</script>

<style scoped lang="scss">
@import "src/assets/styles/colors";
.sheet {
  padding: 24px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
  border: 1px solid map-get($colors, lightgray);
}
</style>
