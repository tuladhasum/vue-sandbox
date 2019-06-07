import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      products: [
         {name: 'Apples', price: 20},
         {name: 'Oranges', price: 50},
         {name: 'Bananas', price: 60},
         {name: 'Lemons', price: 60},
         {name: 'Water Melons', price: 70},
         {name: 'Grapes', price: 90},
      ],
      filter: 'all',
      todos: [
         {
            'id': 1,
            'title': 'Todo Item number 111',
            'completed': false,
            'editing': false
         },
         {
            'id': 2,
            'title': 'Todo Item number 2',
            'completed': true,
            'editing': false
         },
      ]
   },
   mutations: {
      reducePrice(state, payload) {
         state.products.forEach(product => {
            product.price -= payload;
         });
      }
   },
   actions: {
      reducePrice(context, payload) {
         setTimeout(() => {
            context.commit('reducePrice', payload);
         }, 2000);
      }
   },
   getters: {
      saleProducts(state) {
         const saleProducts = state.products.map(product => {
            return {
               name: '**' + product.name + '**',
               price: product.price / 2
            }
         });
         return saleProducts;
      }
   }
})
