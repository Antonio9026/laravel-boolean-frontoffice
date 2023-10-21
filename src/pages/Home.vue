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
    <div class="container">
        <div class="row">
            <h1 class="py-3">Lista Cocktails</h1>
            <div class="col-3 py-4 px-3" v-for="cocktail in cocktails">
                <Card :cocktail="cocktail" />

            </div>
        </div>
    </div>
</template>

<style lang="scss">


</style>