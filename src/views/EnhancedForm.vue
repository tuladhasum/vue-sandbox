<template>
   <section class="container">
      <h1>Enhanched Form</h1>

      <div class="alert alert-danger d-flex justify-content-between " v-if="hasNotifications">

         <div>
            <h6>Order Update</h6>
            <p v-text="status.text"></p>
         </div>
         <button class="btn btn-light btn-sm "
                 type="button"
                 @click="removeNotification()">
            x
         </button>

      </div>
      <form method="post" @submit.prevent="handleSubmit">
         <div class="tea form-group">

            <h2>Tea</h2>
            <div class="form-check" v-for="tea in teaNames">
               <label class="form-check-label"
                      :class="{'tea-label': true, 'checked': tea === chosenTea}">

                  <input class="form-check-input"
                         id="tea"
                         name="tea"
                         type="radio"
                         :value="tea"
                         v-model="chosenTea">
                  <span>{{ tea }}</span>
               </label>

            </div>
         </div>
         <div class="milk form-group">
            <h6><a href="#" @click="togglePopup">Milk</a></h6>
            <div class="alert alert-light" v-show="showPopup">{{helptext}}</div>
            <div class="form-check" v-for="milk in milkNames">
               <label  class="form-check-label"
                      :class="{
        'tea-label': true,
        'checked': milk === chosenMilk,
        'disabled': isMilkDisabled(milk)
      }"
               >
                  <input class="form-check-input"
                          id="milk"
                          name="milk"
                          type="radio"
                          :disabled="isMilkDisabled(milk)"
                          :value="milk"
                          v-model="chosenMilk">
                  <span>{{milk}}</span>
               </label>
            </div>
         </div>
         <div class="phone"></div>
         <div class="form-group">
            <button type="submit" class="btn btn-primary">Order Up!</button>
         </div>
      </form>

   </section>
</template>

<script>
   export default {
      name: "EnhancedForm",
      data() {
         return {
            countdown: null,
            hasNotifications: false,
            sent: false,
            status: {},
            chosenTea: 'Earl Grey',
            chosenMilk: 'Whole Milk',
            teaTypes: {
               "Earl Grey": ['London', 'Manchester', 'Seattle'],
               "Irish Breakfast": ['Dublin'],
               "Chai": ['Bombay'],
               "Rose": ['Atlantic City'],
               "Matcha": ['Tokyo'],
               "Rooibos": ['Cape Town'],
               "Yerba Mate": ['Montreal'],
               "Green": ['Oregon Mist']
            },
            milkTypes: {
               'Whole Milk': ['London', 'Oregon Mist', 'Dublin', 'Bombay', 'Atlantic City', 'Maui', 'Tokyo', 'Cape Town', 'Nanaimo Mist', 'Montreal', 'Mexico', 'Halifax'],
               'Soy Milk': ['Manchester', 'Seattle'],
            },
            showPopup: false,
            helptext: "Anyone who has used that comforting phrase 'a nice cup of tea' invariably means tea with a spot of milk. ",
         }
      },
      watch: {
         status() {
            this.hasNotifications = true
            this.countdown = setTimeout(this.removeNotification, 3000)
         }
      },
      methods: {
         togglePopup(){
            this.showPopup = !this.showPopup;
         },
         removeNotification() {
            clearTimeout(this.countdown)
            this.hasNotifications = false
         },
         handleSubmit() {
            new Promise((resolve, reject) => {
               setTimeout(function () {
                  resolve("Success!");
               }, 250);
            })
               .then((res) => {
                  this.sent = true
                  console.log(res)
                  this.status = {
                     code: 'success',
                     text: `1 ${this.name[0]} Fog Coming Right Up!`
                  }
               })
               .catch(error => {
                  this.sent = true
                  this.status = {
                     code: 'error',
                     text: error
                  }
               })
         },
         isMilkDisabled(milk) {
            //blargh//
            const tea = this.teaTypes[this.chosenTea].filter(element => this.milkTypes[milk].includes(element))
            //pick other milk//
            if (this.chosenMilk === milk && tea.length === 0) {
               var idx = Object.keys(this.milkTypes).indexOf(milk)
               if (idx === 0) {
                  this.chosenMilk = Object.keys(this.milkTypes)[1]
               } else {
                  this.chosenMilk = Object.keys(this.milkTypes)[0]
               }
            }
            return tea.length === 0
         }
      },
      computed: {
         iconClass() {
            switch (this.status.code) {
               case 'success':
                  return 'fa-check'
               case 'error':
                  return 'fa-exclamation'
            }
         },
         teaNames() {
            return Object.keys(this.teaTypes)
         },
         milkNames() {
            return Object.keys(this.milkTypes)
         },
         name() {
            const tea = this.teaTypes[this.chosenTea].filter(element => this.milkTypes[this.chosenMilk].includes(element))
            return tea
         }
      }
   }
</script>

<style scoped>
</style>