<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>
  <header class="bg-dark">
    <nav class="container-fluid">
      <div class="fixed-top navbar row py-3 d-flex bg-dark">
        <div class="col-md-9 d-flex align-items-center justify-content-between mx-auto px-0">
          <a href="/">
            <img src="https://riegsecurity.com/wp-content/uploads/2019/09/Riegs-D-Class-Feat.png" alt="header-logo">
          </a>
          <ul class="ms-auto d-flex list-unstyled gap-4 mb-0">
            <li><router-link :to="{name: 'home'}">HOME</router-link></li>
            <li><router-link :to="{name: 'chi-siamo'}">CHI SIAMO</router-link></li>
            <li><router-link :to="{name: 'contatti'}">CONTATTI</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

header img {
  width: 60px;
}

nav a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover,
nav a.active {
  color: #858585;
}

</style>