import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import ContattiPage from "./pages/ContattiPage";
const routes = [
    {
      path: "/", 
      name: "chi-siamo"
      component: "ContattiPage",
    },
    {
        path: "/", 
        name: "home"
        component: "Home",
      },
],


const router = createRouter({
   
    history: createWebHistory(),
     
    routes
  });
  
  
  export { router };