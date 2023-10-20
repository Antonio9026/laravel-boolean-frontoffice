import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ContattiPage from "./pages/ContattiPage.vue";
import ChiSiamo from "./pages/ChiSiamo.vue";
const routes = [
    {
      path: "/contatti", 
      name: "contatti",
      component: ContattiPage,
    },
    {
        path: "/", 
        name: "home",
        component: Home,
      },
      {
        path: "/", 
        name: "chi-siamo",
        component: ChiSiamo,
      },
];


const router = createRouter({
   
    history: createWebHistory(),
     
    routes
  });
  
  
  export { router };