<template>
  <div class="hello">
    <img alt="globish-logo" src="../assets/globish-logo-temp.png" />
    <!-- <h1>{{ msg }}</h1>
    <h3>Vue.js + TypeScript App</h3>
    <h3>Essential Links</h3> -->
    <router-link to="/ex1"
      ><button class="btn-start">เริ่มเลย</button></router-link
    >
    <!-- <button to="/ex1">เริ่มเลย</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  padding: 2rem 1rem;
  /* background: white; */
  background: url("../assets/common/bg.svg");
  border: 1px solid #000000;
  border-radius: 20px;
  width: 360px;
  height: 780px;
}
.btn-start {
  padding: 5px 128px;
  border-radius: 20px;
  border: 1px solid #000000;
  background: #f7c116;
  color: #000;
  font-family: IBM Plex Sans Thai;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-top: 600px;
  cursor: pointer;
  flex-shrink: 0;
  text-decoration: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary-color;
}
</style>
