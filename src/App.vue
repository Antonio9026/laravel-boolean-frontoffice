<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container-fluid p-0 m-0 main">
    <router-view></router-view>
  </div>
  <TheFooter></TheFooter>
</template>

<style lang="scss">
@use "./styles/partials/_variables.scss" as *;

//
.main {
  background-color: $palette-bg-primary;
}
</style>
