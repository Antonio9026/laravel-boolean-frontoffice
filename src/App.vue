<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="container-fluid px-0 main">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
    ciao
  </div>
</template>

<style lang="scss">
@use "./styles/partials/_variables.scss" as *;

.main{
  background-color: $palette-bg-secondary;
}

</style>
