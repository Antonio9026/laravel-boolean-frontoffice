<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<template>

  <footer class="bg-dark border-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-9 d-flex flex-wrap justify-content-between align-items-center mx-auto py-3 my-4">
          <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="https://riegsecurity.com/wp-content/uploads/2019/09/Riegs-D-Class-Feat.png" alt="footer-logo">
          </a>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item px-2 text-body-secondary"><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="nav-item px-2 text-body-secondary"><router-link :to="{name: 'chi-siamo'}">Chi Siamo</router-link></li>
            <li class="nav-item px-2 text-body-secondary"><router-link :to="{name: 'contatti'}">Contatti</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss" scoped>

footer img {
  width: 42px;
}

footer a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

footer a:hover,
footer a.active {
  color: #858585;
}

</style>