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
  <div class="container-fluid px-0">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </div>
</template>

<style lang="scss">

</style>
