<script>
import axios from "axios";
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: "",
            },
            errors: null,
            success: null,
        };
    },
    methods: {
        onFormSubmit() {
            axios.post("http://localhost:8000/api/contacts", this.formData)
            .then((resp) => {
                this.success = resp.data.message;
                this.errors = null;
            })
            .catch((e) => {
                this.errors = e.response?.data?.message ?? e.message;
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="pt-3 pb-3">Contattaci!</h1>

        <!-- messaggio errore -->
        <div class="alert alert-danger" v-if="errors">Sembra che tu non abbia compilato tutti i campi. Riprova!</div>

        <!-- form -->
        <form @submit.prevent="onFormSubmit" v-if="!success">
            <div class="mb-3">
                <label>Nome e Cognome</label>
                <input type="text" class="form-control" v-model="formData.name">
            </div>

            <div class="mb-3">
                <label>Email</label>
                <input type="text" class="form-control" v-model="formData.email">
            </div>

            <div class="mb-3">
                <label>Messaggio</label>
                <textarea class="form-control" v-model="formData.message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary mb-3">Invia</button>
        </form>

        <!-- messaggio invio SE a buon fine -->
        <div class="alert alert-success" v-else>{{ this.success }}</div>
    </div>
    </template>

<style lang="scss">

</style>