<script setup>


</script>

<template>
  <main class="main">
    <!-- Верхнее меню пиццы-->
    <div class="pizza_menu_top">
        <h2 class="pizza_menu_caption">Menu</h2>
        <div class="pizza_menu_btns">
            <button class="pizza_menu_button pizza_menu_button_active">Show All</button>
            <button class="pizza_menu_button">Meat</button>
            <button class="pizza_menu_button">Vegetarian</button>
            <button class="pizza_menu_button">Sea products</button>
            <button class="pizza_menu_button">Mushroom</button>
        </div>
        <div class="pizzas_top">
            <div class="pizza_card">
                <img src="../assets/img/Italian.png" alt="Italian pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption">Italian</h4>
                    <p class="pizza_card__desc">Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip"> + Ingredients</span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">8,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button">Order Now</button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Venecia.png" alt="Venecia pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption">Venecia</h4>
                    <p class="pizza_card__desc">Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip"> + Ingredients</span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">7,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button">Order Now</button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Meat.png" alt="Meat pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption">Meat</h4>
                    <p class="pizza_card__desc">Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip"> + Ingredients</span>
                    </button>                    
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">9,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button">Order Now</button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Cheese.png" alt="Cheese pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption">Cheese</h4>
                    <p class="pizza_card__desc">Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...</p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip"> + Ingredients</span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">8,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button">Order Now</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Конец вехнего меню пиццы-->

    <!-- Most popular PIZZA-->
     <div class="most_popular">
        <h3 class="most_popular__caption">
            MOST POPULAR PIZZA
        </h3>
        <img src="../assets/img/most_popular.jpg" alt="popular_pizza" class="most_popular_pizza">
     </div>
  </main>

</template>

<style scoped>

</style>