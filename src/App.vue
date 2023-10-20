<script>
import TheHeader from "./components/TheHeader.vue"

export default {
  components: {
    TheHeader,
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
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
