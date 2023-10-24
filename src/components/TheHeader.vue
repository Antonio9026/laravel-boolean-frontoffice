<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark py-2" aria-label="Eighth navbar example">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="https://riegsecurity.com/wp-content/uploads/2019/09/Riegs-D-Class-Feat.png" alt="header-logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link fs-5 fw-bold"><router-link :to="{name: 'home'}">HOME</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 fw-bold"><router-link :to="{name: 'chi-siamo'}">CHI SIAMO</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link fs-5 fw-bold"><router-link :to="{name: 'contatti'}">CONTATTI</router-link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <!-- <header class="bg-dark">
    <nav class="container-fluid">
      <div class="row py-3 d-flex">
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
  </header> -->
</template>

<style lang="scss" scoped>

nav img {
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