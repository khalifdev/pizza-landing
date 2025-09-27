<template>
  <main class="main">
    <!-- Верхнее меню пиццы-->
    <div class="pizza_menu_top">
        <h2 class="pizza_menu_caption" v-html="$t('menu')"></h2>
        <div class="pizza_menu_btns">
            <button class="pizza_menu_button pizza_menu_button_active" v-html="$t('show all')"></button>
            <button class="pizza_menu_button" v-html="$t('meat')"></button>
            <button class="pizza_menu_button" v-html="$t('vegetarian')"></button>
            <button class="pizza_menu_button" v-html="$t('sea products')"></button>
            <button class="pizza_menu_button" v-html="$t('mushroom')"></button>
        </div>
        <div class="pizzas_top">
            <div class="pizza_card">
                <img src="../assets/img/Italian.png" alt="Italian pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption" v-html="$t('italian')"></h4>
                    <p class="pizza_card__desc" v-html="$t('filling')"></p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip" v-html="$t('ingredients')"></span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">8,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button" v-html="$t('order now')"></button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Venecia.png" alt="Venecia pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption" v-html="$t('venecia')"></h4>
                    <p class="pizza_card__desc" v-html="$t('filling')"></p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip" v-html="$t('ingredients')"></span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">7,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button" v-html="$t('order now')"></button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Meat.png" alt="Meat pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption" v-html="$t('meat')"></h4>
                    <p class="pizza_card__desc" v-html="$t('filling')"></p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip" v-html="$t('ingredients')"></span>
                    </button>                    
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">9,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button" v-html="$t('order now')"></button>
                </div>
            </div>
            <div class="pizza_card">
                <img src="../assets/img/Cheese.png" alt="Cheese pizza" class="pizza_card__img">
                <div class="pizza_card__info">
                    <h4 class="pizza_card__caption" v-html="$t('cheese')"></h4>
                    <p class="pizza_card__desc" v-html="$t('filling')"></p>
                    <div class="pizza_card__sizes">
                        <button class="pizza_size">22</button>
                        <button class="pizza_size current_size">28</button>
                        <button class="pizza_size">33</button>
                    </div>
                    <button class="pizza_card__ingred btn_clip">
                        <span class="ingred_btn_text btn_text_clip" v-html="$t('ingredients')"></span>
                    </button>
                    <div class="pizza_card__pricebox">
                        <span class="pizza_price">8,35<sup><small>$</small></sup></span>
                        <div class="pricebox__count">
                            <button class="minus count_btn">-</button>
                            <span class="pizza_count">1</span>
                            <button class="plus count_btn count_able">+</button>
                        </div>
                    </div>
                    <button class="pizza_card__order-button" v-html="$t('order now')"></button>
                </div>
            </div>
        </div>
    </div>
    <!-- Конец вехнего меню пиццы-->

    <!-- Most popular PIZZA-->
     <div class="most_popular">
        <h3 class="most_popular__caption" v-html="$t('most popular pizza')"></h3>
        <img src="../assets/img/most_popular.jpg" alt="popular_pizza" class="most_popular_pizza">
     </div>
  </main>

</template>

<style>

.pizza_menu_top{
    padding: 0px 130px 34px;
}

.pizza_menu_btns{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 54px;
}

.pizza_menu_caption{
    font-family: Muller, Arial, sans-serif;
    font-weight: 800;
    font-size: 58px;
    color: #fff;
    text-align: center;
    margin-bottom: 49px;
}

.pizza_menu_button{
    height: 62px;
    width: 230px;
    border: 0;
    border-radius: 30px;
    background: #210A01;
    color: #fff;
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
}

.pizza_menu_button_active{
    background: linear-gradient(to right, #FF5D29, #FE9C1C); 
}

.pizzas_top{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 297px);
    gap: 21px;
}

.pizza_card{
    height: 516px;
    width: 297px;
    position: relative;
    display: flex;
    justify-content: center;
}

.pizza_card__img{
    position: relative;
    width: 159px;
    height: 157px;
    z-index: 1;
    object-fit: none;
}

.pizza_card__info{
    position: absolute;
    border-radius: 30px;
    background-color: #210A01;
    padding-top: 177px;
    display: flex;
    align-items: center;
    flex-flow: column;
}

.pizza_card__caption{
    font-size: 27px;
    color: #fff;
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    margin-bottom: 20px;
}

.pizza_card__desc{
    color: #A3A3A3;
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    max-width: 229px;
    text-align: left;
    margin-bottom: 20px;
}

.pizza_card__sizes{
    width: 194px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.pizza_size{
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #A3A3A3;
    color: #A3A3A3;
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 12px;
}

.current_size{
    background: linear-gradient(to right, #FF5D29, #FE9C1C);
    color:#fff;
    border: none;
}

.pizza_card__ingred{
    height: 39px;
    width: 194px;
    border: 2px solid transparent !important;
    border-radius: 18px;
    margin-bottom: 20px;
}

.ingred_btn_text{
    font-size: 18px;
}

.pizza_card__pricebox{
    width: 194px;
    display: flex;
    justify-content: space-between;
}

.pizza_price{
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 28px;
    color: #fff;
}

.pricebox__count{
    width: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.count_btn{
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid #A3A3A3;
    color: #A3A3A3;
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 18px;
    padding-top: 2px;
}

.count_able {
    background: linear-gradient(to right, #FF5D29, #FE9C1C);
    color:#fff;
    border: none;
}

.pizza_count{
    color: #A3A3A3;
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 25px;
}

.pizza_card__order-button{
    height: 45px;
    width: 194px;
    border-radius: 22px;
    background: linear-gradient(to left, #FF5D29, #FE9C1C);
    color:#fff;
    border: none;
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
    margin-bottom: 20px;
}

.most_popular{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 286px;
}

.most_popular__caption{
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 44px;
    color: #fff;
    z-index: 1;
}

.most_popular_pizza{
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1248px;
    height: 100%;
    border-radius: 34px;
}

</style>