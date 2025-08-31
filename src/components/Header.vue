<script setup>


</script>

<template>
  <header class="header">
    <div class="navbar">
        <div class="logo">
            <a href="#" class="logo__ref">pizzashop</a>
        </div>
        <ul class="menu">
            <li class="menu__item">
              <a href="#" class="menu-ref menu_active">Home</a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref">Menu</a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref">Events</a>
              <span class="menu-mark"></span>
            </li>
            <li class="menu__item">
              <a href="#" class="menu-ref">About us</a>
              <span class="menu-mark"></span>
            </li>
        </ul>
        <div class="navbar__buttons">
            <button class="login-button">Log in</button>
            <button class="cart-button"><img src="../assets/img/shopping_bag.svg" alt="shopping-bag"></button>
        </div>
    </div>
    <!-- Контент хэдера-->
    <div class="header__content">
      <!-- Описание, УТП...-->
      <div class="shop-desc">
        <h1 class="shop-desc__caption">
          The Fastest <img class="caption__vector" src="../assets/img/Vector2.png" alt="vector"> Pizza <i class="fa-solid fa-bolt-lightning caption-lightning"></i> Delivery
        </h1>
        <p class="shop-desc__utp">
          We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <b class="white">pizza is free!</b>
        </p>
        <div class="cooking-box">
          <p class="cooking-box__caption">Cooking process:</p>
          <div class="cooking-video">
            <button class="play-btn"></button>
          </div>
        </div>
        <div class="double-btn">
          <button class="to-order-btn">
            <span class="to-order-btn__text">To order</span>
          </button>
          <button class="menu-btn btn_clip">
            <span class="menu-btn__text btn_text_clip">Pizza-Menu</span>
          </button>
        </div>
        <img src="../assets/img/Vector1.png" alt="vector2" class="shop-desc__vector">
      </div>
      <div class="poster-box">
        <img src="../assets/img/fries1.png" alt="fries" class="fries-pic">
        <img src="../assets/img/pizza_slice.png" alt="pizza" class="pizza-pic">
      </div>
    </div>
    <!-- Конец контента хэдера-->
  </header>

</template>

<style scoped>

</style>