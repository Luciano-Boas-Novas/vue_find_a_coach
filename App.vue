<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from './src/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
