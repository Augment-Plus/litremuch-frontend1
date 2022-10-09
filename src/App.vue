<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <FormSection />
  </div>
</template>

<script>
import FormSection from "./components/FormSection.vue";

export default {
  name: "App",
  components: {
    FormSection,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
