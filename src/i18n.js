import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          'home': 'Home',
          'menu': 'Menu',
          'events':'Events',
          'about us':'About us',
          'log in':'Log in',

            'h1': 'The Fastest <img class="caption__vector" src="src/assets/img/Vector2.png" alt="vector"> '
            + 'Pizza <img src="src/assets/img/Lightning2.svg" alt="lightning" class="caption-lightning"> Delivery',

            'descr': 'We will deliver juicy pizza for your family in 30 minutes, '
            + 'if the courier is late - '
            + '<b class="white">pizza is free!</b>',
            
            'cooking_caption': 'Cooking process:',
            'to order':'To order',
            'pizza-menu':'Pizza-Menu',
      
            'show all':'Show All',
            'meat':'Meat',
            'vegetarian':'Vegetarian',
            'sea products':'Sea products',
            'mushroom':'Mushroom',

            'italian':'Italian',
            'venecia':'Venecia',
            'cheese':'Cheese',
            'filling':'Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...',
            'ingredients':'+ Ingredients',
            'order now':'Order Now',

            'most popular pizza': 'MOST POPULAR PIZZA',
        }
      },
      ru: {
        translation: {
          'home': 'Главная',
          'menu': 'Меню',
          'events':'События',
          'about us':'О нас',
          'log in':'Войти',

            'h1': 'Самая быстрая  <img class="caption__vector" src="src/assets/img/Vector2.png" alt="vector"> '
            + 'Доставка <img src="src/assets/img/Lightning2.svg" alt="lightning" class="caption-lightning"> Пиццы',

            'descr': 'Мы доставим сочную пиццу для вашей семьи за 30 минут, '
            + 'если курьер опаздает - '
            + '<b class="white">пицца бесплатна!</b>',          
            'cooking_caption': 'Процесс приготовления:',
            'to order':'Заказать',
            'pizza-menu':'Меню',
      
            'show all':'Все виды',
            'meat':'Мясная',
            'vegetarian':'Вегетерианская',
            'sea products':'С морепродуктами',
            'mushroom':'Грибная',

            'italian':'Итальянская',
            'venecia':'Венеция',
            'cheese':'Сырная',
            'filling':'Состав: лук, картофель, томаты, грибы, сыр, оливки, говядина...',
            'ingredients':'+ Ингредиенты',
            'order now':'Заказать',

            'most popular pizza': 'САМАЯ ПОПУЛЯРНАЯ ПИЦЦА',
        }
      }
    }
  });

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}