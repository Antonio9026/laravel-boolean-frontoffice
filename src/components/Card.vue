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
</template>


<style lang="scss" scoped></style>