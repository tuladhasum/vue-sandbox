import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import FishUI from 'fish-ui';
import VueLodash from 'vue-lodash'

const options = { name: 'lodash' } // customize the way you want to call it
Vue.use(VueLodash, options) // options is optional


import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(FishUI);


require('./bootstrap');


Vue.config.productionTip = false

Vue.filter('capitalize', function(value){
  if(!value) return '';

  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
