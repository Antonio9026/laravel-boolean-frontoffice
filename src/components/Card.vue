<script>

export default {
    data() {
        return {
            arraiedIngridients: [],
        }
    },
    props: {
        cocktail: {
            type: Object,
            required: true
        }
    },
    methods: {
        /* changeDisplayOnHover(param){
            if(param === "Hover"){
                return "d-block";
            }
            else{
                return "d-none";
            } */
    }
};

</script>

<template>
    <div class="card-box-container">

        <div class="card up rounded-0">
            <div class="card sub border-0 rounded-0">
                <div class="card-image">
                    <img :src="cocktail.thumb" class="card-img-top rounded-0" alt="">
                </div>
                <div class="card-body w-100">
                    <div class="row">
                        <div class="col-9 d-flex align-items-center">
                            <h5 class="card-title p-0"><strong>{{ cocktail.name }}</strong></h5>
                        </div>
                        <div class="col-3 d-flex align-items-start">
                            <span class="text-decoration-underline">€{{ cocktail.price }}</span>
                        </div>
                    </div>
                    
                    <div id="adult" class="card-image">
                        <img src="../assets/images 18+.png" alt="">
                    </div>

                    <ul class="ps-0 hidden-on-hover">
                        <li class="list-unstyled"
                            v-for='singleIngredient in this.cocktail.ingredients.replace(/\[|\]|\"/g, "").split(",")'><i
                                class="fa-solid fa-flask" style="margin-right: 10px;"></i>{{ singleIngredient }}</li>
                    </ul>

                    <p class="card-text hidden-on-hover">{{ cocktail.category }}</p>
                    <p class="card-text instructions">{{ cocktail.instructions }}</p>
                </div>

            </div>
        </div>

    </div>

</template>


<style lang="scss" scoped>
@use "../styles/partials/_variables.scss" as *;

.card-box-container{
    width: fit-content;
    height: 450px;
    .card {
        position: relative;
        max-width: 250px;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 10px;
        transition: 0.5s linear;
        &:hover {
            cursor: pointer;
            display: flex;
            align-items: center;
            box-shadow: 5px 5px 5px 5px black;
            background: rgb(28, 27, 27);
            background: linear-gradient(90deg, rgba(28, 27, 27, 1) 0%, rgba(42, 37, 32, 0.7917366775811887) 100%);
            color: white;
            transition: 0.25s linear;
        }
        .card.body{
            background-color: $palette-bg-primary;
        }
    }
}

.instructions{
    display: none;
}
.card:hover {
    .instructions{
        display: block;
        transition: 1s;

    }
    .hidden-on-hover{
        display: none;
        transition: 1s;
    }

}

#adult {
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
}

#adult img {
    width: 100%;
    border-radius: 60%;

}
</style>