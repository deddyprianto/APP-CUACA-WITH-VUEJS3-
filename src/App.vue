<template>
  <div class="conta">
    <Banner />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Akaya Kanadaka", cursive;
}
</style>
