<template>
  <div id="app">
    <Poll />
  </div>
</template>

<script>
import Poll from './components/Poll.vue';

export default {
  components: {
    Poll,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #efe9e9;
}
</style>

