<script>

export default {
    props: {
        cocktail: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="card">
        <div class="card text-center">
            <div class="card-image">
                <img :src="cocktail.thumb" class="card-img-top" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ cocktail.name }}</h5>
                <p class="card-text">{{ cocktail.alcoholic }}</p>
                <p class="card-text">{{ cocktail.category }}</p>
                <p class="card-text">{{ cocktail.instructions }}</p>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>