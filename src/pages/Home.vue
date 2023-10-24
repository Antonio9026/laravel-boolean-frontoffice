<script>
import axios from "axios";
import Card from "../components/Card.vue";
export default {
    components: {
        Card
    },
    data() {

        return {
            cocktails: [],
            search: {
                name: "",
            }
        }
    },
    methods: {
        fetchData() {
            axios
                .get("http://127.0.0.1:8000/api/cocktails", { params: this.search, })
                .then((response) => {
                    this.cocktails = response.data;
                });
        },
        fetchApi(){
            this.cocktails = [];
            axios
                .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", { params: this.search})
                .then((response) => {
                    this.cocktails = response.data.drinks;
                });
        },

        onSearch() {
            this.fetchData();
        },
        onReset() {
            this.search.name = "";
            this.fetchData();
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div class="container overflow-auto pb-5">
        <div class="row">
            <div class="col-12">
                <div class="accordion my-4" id="accordionExample">
                    <div class="accordion-item position-relative">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span class="fw-bold">Ricerca cocktail per nome</span>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse show collapse position-absolute z-3 w-100" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3 class="mb-1">Cerca qui il tuo cocktail preferito:</h3>
                                <form class="my-3" @submit.prevent="onSearch" @reset="onReset">
                                    <input type="text" placeholder="Nome cocktail" class="search form-control border-dark rounded-1" v-model="search.name">
                                    <div class="row mt-2">
                                        <button class="btn btn-dark" type="submit">Cerca</button>
                                        <button class="btn btn-danger ms-2 ms-sm-2 ms-md-2" type="reset">Cancella</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="d-flex justify-content-center my-4 pb-4">
            <div class="row w-100 d-flex justify-content-center">
                <div class="col-8 border-bottom border-dark border-1 d-flex justify-content-center">
                    <div class="title-box pb-2">
                        <h1 class="py-3 text-center pb-0 fw-bold title">La Nostra Lista Cocktails</h1>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 gap-3 d-flex justify-content-center my-3"
                v-for="cocktail in cocktails">
                <Card :cocktail="cocktail" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

.container {
    margin-top: 86px;
    min-height: calc(100vh - 122px);
    .accordion-button{
        border-color: $palette-bg-secondary-dark;
        background-color: $palette-bg-secondary-darker;
        color: white;
        &:focus{
            box-shadow: 0 0 0 .25rem rgb(156, 120, 88, 0.5);
        }
        &:after{
            background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") !important;
        }
    }
    .accordion-body{
        border: 2px solid $palette-bg-secondary-darker;
        border-top: 0px;
        border-radius: 0 0 7.5px 7.5px;
        background-color: $palette-bg-secondary;
    }
    .accordion-item{
        background-color: $palette-bg-secondary;
        box-shadow: rgba(127, 96, 68, 0.25) 0px 30px 50px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
        border-color: $palette-bg-secondary-dark;
        .search{
            background-color: $palette-bg-primary;
            border-color: $palette-bg-secondary-darker;
            &:focus{
                box-shadow: 0 0 0 .25rem rgb(127, 96, 68, 0.5);
            }
        }
        .accordion-body{
            .row{
                padding-left: 12.5px;
                .btn{
                    width: fit-content;
                }
            }
            
        }
    }
    

    .title-box {
        width: fit-content;
        border-bottom: 5px;
        border-color: rgb(33, 37, 41);

        .title {
            font-size: 3.5rem;
        }
    }
}
</style>