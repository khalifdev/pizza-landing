<template>
  <header class="header">
    <div class="navbar">
        <div class="logo">
            <a href="#" class="logo__ref">pizzashop</a>
        </div>
        <ul class="menu">
            <li class="menu__item">
              <a href="#" class="menu-ref menu_active" v-html="$t('home')"></a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref" v-html="$t('menu')"></a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref" v-html="$t('events')"></a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref" v-html="$t('about us')"></a>
              <span class="menu-mark"></span>
            </li>
        </ul>
        <div class="navbar__buttons">
            <button class="login-button" v-html="$t('log in')"></button>
            <button class="cart-button"><img src="../assets/img/shopping_bag.svg" alt="shopping-bag"></button>
        </div>
    </div>
    <div class="header__content">
      <div class="shop-desc">
        <h1 class="shop-desc__caption" v-html="$t('h1')"></h1>
        <p class="shop-desc__utp" v-html="$t('descr')"></p>
        <div class="cooking-box">
          <p class="cooking-box__caption" v-html="$t('cooking_caption')"></p>
          <div class="cooking-video">
            <button class="play-btn"></button>
          </div>
        </div>
        <div class="double-btn">
          <button class="to-order-btn">
            <span class="to-order-btn__text" v-html="$t('to order')"></span>
          </button>
          <button class="menu-btn btn_clip">
            <span class="menu-btn__text btn_text_clip" v-html="$t('pizza-menu')"></span>
          </button>
        </div>
        <img src="../assets/img/Vector1.png" alt="vector2" class="shop-desc__vector">
      </div>
      <div class="poster-box">
        <img src="../assets/img/fries1.png" alt="fries" class="fries-pic">
        <img src="../assets/img/pizza_slice.png" alt="pizza" class="pizza-pic">
      </div>
    </div>
  </header>

</template>

<style>

.header{
    height: 880px;
    padding: 48px 130px 0px;
}

.navbar{
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
}

.logo{
    width: 162px;
    height: 37px;
}

.logo__ref{
    font-family: Muller, Arial, sans-serif;
    font-weight: 800;
    font-size: 37px;
    background-image: linear-gradient(to left, #FF6432, #FFA228);
    color: transparent;
    background-clip: text;
    cursor: pointer;
}

.menu {
    display: flex;
    width: 469px;
    justify-content: space-between;
    align-items: center;
    height: inherit;
}

.menu__item{
    font-family: Muller, Arial, sans-serif;
    font-weight: normal;
    font-size: 20px;
    list-style-type: none;
    position: relative;
}

.menu-ref{
    display: block;
    text-decoration: none;
    color: #A3A3A3;
}

.menu-mark{
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translate(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-image: linear-gradient(to left, #FF6432, #FFA228);
    visibility: hidden;
}

.menu_active:nth-child(1){
    background-image: linear-gradient(to left, #FF6432, #FFA228);
    color: transparent;
    background-clip: text;
}

.menu-ref:hover{
    cursor: pointer;
    background-image: linear-gradient(to left, #FF6432, #FFA228);
    color: transparent;
    background-clip: text;
}

.navbar__buttons{
    display: flex;
    width: 223px;
    justify-content: space-between;
}

.login-button{
    width: 163px;
    height: 40px;
    border: 0;
    border-radius: 20px;
    background: linear-gradient(to left, #FF5D29, #FE9C1C);
    color: #fff;
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
}

.cart-button{
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 50%;
    background: linear-gradient(to left, #FF5D29, #FE9C1C);
    color: #fff;
    cursor: pointer;
}

.header__content{
    display: flex;
    justify-content: space-between;
}

.shop-desc{
    position: relative;
    padding-top: 60px;
    max-width: 565px;
}

.shop-desc__caption{
    font-family: Muller, Arial, sans-serif;
    font-weight: 800;
    font-size: 58px;
    color: #fff;
    text-align: left;
    margin-bottom: 37px;
}

.caption__vector{
    transform: translateY(30%);
}

.caption-lightning{
    margin: 0 5px;
    transform: translate(5px, 15px);
}

.shop-desc__utp{
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #A3A3A3;
    line-height: 30px;
    text-align: left;
    max-width: 420px;
    margin-bottom: 23px;
}

.white{
    color: #fff;
    font-weight: 400;
}

.cooking-box{
    text-align: left;
    margin-bottom: 58px;
}

.cooking-box__caption{
    font-family: Muller, Arial, sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #A3A3A3;
    margin-bottom: 12px;
}

.cooking-video{
    height: 184px;
    width: 272px;
    border-radius: 23px;
    background-image: url("../assets/img/cooking_poster.jpg");
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.play-btn{
    width: 84px;
    height: 84px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background: url("/src/assets/img/Polygon.png") center no-repeat,
    url("/src/assets/img/Ellipse.png") -35px -30px no-repeat;
    
}

.double-btn{
    position: relative;
    width: 388px;
}

.to-order-btn{
    position: absolute;
    left: 0;
    z-index: 1;
    height: 62px;
    width: 230px;
    border: 0;
    border-radius: 30px;
    background: linear-gradient(to left, #FF5D29, #FE9C1C);
    color: #fff;
    font-family: Muller, Arial, sans-serif;
    font-weight: 500;
    font-size: 19px;
    cursor: pointer;
}

.menu-btn{
    position: absolute;
    right: 0;
    height: 62px;
    width: 230px;
    border-radius: 30px;
}

.menu-btn__text{
    padding-left: 60px;
    font-size: 19px;
}

.shop-desc__vector{
    position: absolute;
    bottom: -60px;
    right: -40px;
}

.poster-box{
    width: 456px;
    height: 676px;
    border-radius: 46px;
    position: relative;
    background: url("src/assets/img/poster.jpg") center no-repeat;
}

.fries-pic{
    position: absolute;
    bottom: -113px;
    left: -170px;
}

.pizza-pic{
    position: absolute;
    top: -61px;
    right: -95px;
}

</style>