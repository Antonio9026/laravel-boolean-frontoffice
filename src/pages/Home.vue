<script>
import axios from "axios";
export default {
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
    <h1>Home</h1>
    <div class="container">
        <div class="row">
            <h1 class="py-3">Lista Cocktails</h1>
            <div class="col-3" v-for="cocktail in cocktails">
                <div class="card text-center" style="width: 18rem;">
                    <img :src="cocktail.thumb" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ cocktail.name }}</h5>
                        <p class="card-text">{{ cocktail.instructions }}</p>
                    </div>
                    <div class="card-footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>