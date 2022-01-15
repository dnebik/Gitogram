<template>
  <div class="icon" :style="{ height: svgSize, width: svgSize }">
    <div v-show="false" ref="slot" >
      <slot />
    </div>
    <div v-html="svg" />
  </div>
</template>

<script src="./index.js" />

<style scoped>

</style>
