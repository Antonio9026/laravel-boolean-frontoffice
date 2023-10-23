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
        }
    },
    methods: {
        fetchData() {
            axios
                .get("http://127.0.0.1:8000/api/cocktails")
                .then((response) => {
                    this.cocktails = response.data;
                });
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<template>
    <div class="container overflow-auto pb-5">
        <div class="d-flex justify-content-center my-4 mt-5 mb-5">
            <div class="title-box border-bottom border-3 border-secondary">
                <h1 class="py-3 text-center pb-0 fw-bold title">La nostra Lista Cocktails</h1>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 gap-3 d-flex justify-content-center my-3" v-for="cocktail in cocktails">
                <Card :cocktail="cocktail" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/_variables.scss" as *;

.container{
    margin-top: 92px;
    min-height: calc(100vh - 92px);
    .title-box{
        width: fit-content;
        border-color: $palette-text-color;
        .title{
            font-size: 3.5rem;
        }
    }
}

</style>