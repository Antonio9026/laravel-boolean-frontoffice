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
        fetchData() {
            axios
                .get("http://127.0.0.1:8000/api/cocktails")
                .then((response) => {
                    this.cocktails = response.data;
                });
        },
        arrayfyIngredients(){
            this.arraiedIngridients = this.cocktail.ingredients.replace(/\[|\]|\"/g,'');
        }
    },
    mounted() {
        this.fetchData();
        this.arrayfyIngredients();
    },
};

</script>

<template>
    <div class="card up rounded-0">
        <div class="card sub rounded-0  text-center">
            <div class="card-image">
                <img :src="cocktail.thumb" class="card-img-top rounded-0" alt="">
            </div>
            <div class="card-body">
                <h5 class="card-title "><strong>{{ cocktail.name }}</strong></h5>
                <div id="adult" class="card-image">
                    <img src="../assets/images 18+.png" alt="">
                </div>
                <ul>
                    <li v-for='singleIngredient in this.cocktail.ingredients.replace(/\[|\]|\"/g,"").split(",")'>{{ singleIngredient }}</li>
                </ul>
                <p class="card-text">{{ cocktail.category }}</p>
                <p class="card-text">{{ cocktail.instructions }}</p>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    position: relative;
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 10px;
   
}

.card:hover {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 5px 5px black;
    background: rgb(28, 27, 27);
    background: linear-gradient(90deg, rgba(28, 27, 27, 1) 0%, rgba(42, 37, 32, 0.7917366775811887) 100%);
    color: white;
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