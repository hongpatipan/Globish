<template>
  <RouterView> </RouterView>
  <!-- <WelcomeBox msg="Welcome to Globish" /> -->
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import WelcomeBox from "./components/WelcomeBox.vue";

export default defineComponent({
  name: "App",
  // components: {
  //   WelcomeBox,
  // },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
  justify-items: center;
  display: flex;
}
</style>
