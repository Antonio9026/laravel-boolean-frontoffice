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
    <div class="card rounded-0">
        <div class="card rounded-0  text-center">
            <div class="card-image">
                <img :src="cocktail.thumb" class="card-img-top rounded-0" alt="">
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


<style lang="scss" scoped>
.card{
    width:250px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
    // box-shadow: 5px 5px 2px 0;
}

.card:hover{
    width:230px;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 5px 5px;
   
}


</style>