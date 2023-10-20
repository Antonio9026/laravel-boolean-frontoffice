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
    <div class="row">
      <div class="col">
        <TheHeader></TheHeader>
        <router-view></router-view>
        <TheFooter></TheFooter>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
