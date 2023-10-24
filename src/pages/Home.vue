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
        <h3 class="my-4">Cerca qui il tuo cocktail preferito</h3>
        <form class="my-4" @submit.prevent="onSearch" @reset="onReset">
            <input type="text" placeholder="Nome cocktail" class="form-control" style="width: 430px;" v-model="search.name">
            <button class="btn btn-dark my-2 " type="submit" >Cerca</button>
            <button class="btn btn-danger mx-2" type="reset">Cancella</button>
        </form>
        <div class="d-flex justify-content-center my-4 mt-5 mb-5">
            <div class="title-box">
                <h1 class="py-3 text-center pb-0 fw-bold title">La nostra Lista Cocktails</h1>
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