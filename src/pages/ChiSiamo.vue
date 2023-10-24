<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {

}
</script>

<template>
<div class="chi-siamo-container">
  <!-- Hero About Section -->
  <div class="px-4 py-5 text-center hero-section" style="background-color: #dfbf92;">
    <h1 class="display-5 fw-bold text-body-emphasis text-center mb-2">Chi Siamo</h1>
    <div class="col-lg-6 mx-auto text-center mb-4">
      <div class="d-flex justify-content-center">
        <hr class="w-25">
      </div>
      <h2>Aperitivi e Dopocene da urlo, in stile D Class</h2>
    </div>

    <div class="col-lg-7 mx-auto">
      <p class="lead mb-4">
        Benvenuto nel nostro mondo di cocktail artigianali e mixology innovativa! Da noi, 
        l'arte di creare e gustare cocktail unici raggiunge nuove vette di eccellenza. 
        Ogni nostro cocktail è una piccola opera d'arte, frutto di ingredienti selezionati 
        con cura e mescolati con passione da barman esperti. La nostra missione? Offrirti 
        esperienze di degustazione indimenticabili, soddisfacendo anche i palati più esigenti.
        Dietro ogni sorso c'è una storia, una tradizione rivisitata con un tocco moderno. 
        La freschezza dei nostri ingredienti ti farà viaggiare attraverso sapori e profumi unici, 
        mentre il nostro staff, amichevole e professionale, ti guiderà in un viaggio sensoriale 
        che ti lascerà desiderare sempre di più.
        Vieni a trovarci, scopri il fascino dei nostri cocktail artigianali e immergiti nel mondo 
        avvolgente della mixology. Ti aspettiamo per farti vivere l'arte dei cocktail come mai prima d'ora.
        Unisciti a noi, il tuo viaggio nel gusto sta per iniziare!
      </p>
    </div>
  </div>

  <!-- Carousel Section -->
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

  <ul class="carousel-indicators">
      <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
      <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
  </ul>

  <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/pexels-1.jpg" alt="Image 1">
      </div>

      <div class="carousel-item">
        <img src="/pexels-2.jpg" alt="Image 2">
      </div>

      <div class="carousel-item">
        <img src="/pexels-3.jpg" alt="Image 3">
      </div>

      <div class="carousel-item">
        <img src="/pexels-4.jpg" alt="Image 4">
      </div>

      <div class="carousel-item">
        <img src="/pexels-5.jpg" alt="Image 5">
      </div>
  </div>

  <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
  </a>
  </div>

  <!-- Why Us Section -->
  <div class="container-fluid py-5" style="background-color: #9c7858;">
    <h2 class="text-center text-white mb-3 fw-bold">PERCHÉ SCEGLIERE IL D CLASS</h2>
    <div class="col-lg-6 mx-auto text-center mb-4">
      <div class="d-flex justify-content-center">
        <hr class="w-25">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-9 mx-auto text-white">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div>
              <h3 class="h5 fw-bold mb-3">MENU VARIEGATO</h3>
              <p class="lead">
                Nel nostro menu troverai una selezione di cocktail provenienti 
                da diverse parti del mondo, dalla tradizione italiana e francese 
                all'innovazione dei mix thailandesi e giapponesi.
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div>
              <h3 class="h5 fw-bold mb-3">AMBIENTE ACCOGLIENTE</h3>
              <p class="lead">
                Al nostro cocktail bar, l'atmosfera è avvolta da soffitti a volta e 
                ricche texture che creano un ambiente accogliente, permettendo ai 
                nostri ospiti di sentirsi a proprio agio e immersi nella magia dei drink.
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div>
              <h3 class="h5 fw-bold mb-3">CONSEGNA GRATUITA</h3>
              <p class="lead">
                Se non hai tempo di venire al nostro cocktail bar, ti portiamo i tuoi 
                drink preferiti direttamente a casa tua, senza costi aggiuntivi per la consegna.
              </p>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3">
            <div>
              <h3 class="h5 fw-bold mb-3">SERVIZIO ECCELLENTE</h3>
              <p class="lead">
                La nostra dedizione verso i clienti ci spinge a offrire un servizio di prima classe 
                per assicurarci che tutti siano soddisfatti.
                Ci impegniamo al massimo per garantirti un'esperienza indimenticabile 
                ogni volta che entri nel nostro bar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Our Team Section -->
  <div class="container-fluid py-5" style="background-color: #dfbf92;">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="mb-4 fw-bold fs-1">Il Nostro Team</h2>
        <hr class="w-100 mb-4">

        <div class="row team-members-box mt-5 justify-content-center">
          <div class="col-md-6 mb-4">
            <img src="/lporrega.JPG" alt="lorenzo-porrega" class="img-fluid mb-3">
            <h3 class="mb-2 fw-bold">Lorenzo Porrega</h3>
            <p class="text-muted mb-0">PROJECT MANAGER</p>
            <p class="mb-0">
              Project manager creativo e organizzato qui per trasformare il caos in progetti 
              impeccabili!
              Inoltre, è sempre disponibile a creare server minecraft per tutti i gusti.
              Affidati a lui, renderà ogni idea un meme!
            </p>
          </div>

          <div class="col-md-6 mb-4">
            <img src="/apiras.JPG" alt="antonio-piras" class="img-fluid mb-3">
            <h3 class="mb-2 fw-bold">Antonio Piras</h3>
            <p class="text-muted mb-0">MIXOLOGIST</p>
            <p class="mb-0">
              Direttamente dalla Sardegna, mixologist appassionato e creativo pronto a trasformare 
              ogni sorso di codice PHP in un'avventura! 
              Con un tocco di magia e un pizzico di genialità, crea cocktail unici e template geniali. 
            </p>
          </div>

          <div class="col-md-6 mb-4">
            <img src="/ivelikholova.JPG" alt="iryna-velykholova" class="img-fluid mb-3">
            <h3 class="mb-2 fw-bold">Iryna Velykholova</h3>
            <p class="text-muted mb-0">INTERIOR DESIGNER & WEB DESIGNER</p>
            <p class="mb-0"> 
              Interior designer e web designer creativa, trasforma spazi in opere d'arte e 
              idee in esperienze digitali coinvolgenti, tutto in tema pedestre.
              Passione, innovazione e bellezza guidano ogni suo progetto.
            </p>
          </div>

          <div class="col-md-6 mb-4">
            <img src="/dfusco.JPG" alt="dario-fusco" class="img-fluid mb-3">
            <h3 class="mb-2 fw-bold">Dario Fusco</h3>
            <p class="text-muted mb-0">SENIOR FULL STACK DEVELOPER</p>
            <p class="mb-0">
              Cresciuto da Boolean, dopo soli 6 mesi di corso, è già in grado di gestire il database di Amazon Italia,
              e nel tempo libero si diletta a creare corsi specialistici su VueJS.
            </p>
          </div>

          <div class="col-md-6 mb-4">
            <img src="/acolombo.JPG" alt="andrea-colombo" class="img-fluid">
            <h3 class="mb-2 fw-bold">Andrea Colombo</h3>
            <p class="text-muted mb-0">MENTAL COACH & CODE ASSISTANT</p>
            <p class="mb-0">
              Leader autoproclamato, pensa di essere d'aiuto al team, di essere professionale...
              Ci prova a scrivere codice, ma in realtà è l'esempio perfetto di TANTO FUMO E POCO ARROSTO!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

.chi-siamo-container{
    margin-top: 86px;
    min-height: calc(100vh - 214px);
}
.about-section {
  background:
    linear-gradient(to left, transparent 50%, #dfc39d 50%),
    url(../assets/images/about-4.jpg) no-repeat right center;
  object-fit: contain;
  background-position: center right;
  position: relative;
}

.text-icons-color {
  color: green !important;
}

.header-footer-color {
  color: green !important;
}

.border-icons-color {
  border-color: green !important;
}

.custom-button {
  background-color: green !important;
  color: white !important;
  border: none !important;
}

.custom-button-hover:hover {
  background-color: green !important;
  color: white !important;
  border: none !important;
}

.top {
  top: -27px;
}

.bottom {
  bottom: -72px;
}

.team-members-box img{
  border-radius: 50%;
  border: 3px $palette-bg-secondary-darkest;
}

// Risolto problemi puntini neri opachi sotto le barre bianche indicanti l'immagine attiva nel carosello
.carousel-indicators{
  li{
    color: transparent;
  }
}

#carouselExampleControls {
  width: 100%;
  height: 720px;
  overflow: hidden;
}

.carousel-inner .carousel-item img {
  width: 100%; 
  height: 720px; 
  object-fit: cover;
}

</style>