
import { createApp } from 'vue'
import './style.css'
import i18n from './i18n'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'

library.add(faBoltLightning);



i18n(createApp(App))
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
