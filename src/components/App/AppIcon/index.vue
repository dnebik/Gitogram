<template>
  <div class="icon" :style="{ height: svgSize, width: svgSize }">
    <div v-show="false" ref="slot" >
      <slot />
    </div>
    <div class="icon__wrapper" v-html="svg" ref="wrapper" />
  </div>
</template>

<script src="./index.js" />

<style scoped lang="scss">
</style>
