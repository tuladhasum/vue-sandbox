<template>
   <section>
      <button class="btn  btn-sm mb-3 btn-danger"
              @click="showForm= !showForm">
         {{ showForm ? 'Hide' : 'Show'}} Form
      </button>
      <form @submit.prevent="onAddRocket" v-if="showForm">
         <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="rocket.name" name="name" id="name" class="form-control">
         </div>

         <div class="form-group">
            <label for="country">Country</label>
            <input type="text" v-model="rocket.country" name="country" id="country" class="form-control">
         </div>

         <div class="form-group">
            <label for="description">Description</label>
            <textarea type="text" v-model="rocket.description" name="description" id="description"
                      class="form-control"></textarea>
         </div>

         <div class="form-group">
            <label for="image">Image</label>
            <input type="text" v-model="rocket.image" name="image" id="image" class="form-control">
         </div>

         <div class="form-group">
            <button type="submit" class="btn btn-success ">Add Rocket</button>
         </div>
      </form>
   </section>
</template>

<script>

    function getEmptyRocket() {
        return {
            name: '',
            description: '',
            country: '',
            image: ''
        };
    }

    export default {
        props: ['addRocket'],
        data() {
            return {
                showForm: false,
                rocket: getEmptyRocket()
            }
        },
        methods: {
            onAddRocket() {
                this.addRocket(this.rocket);
                this.rocket = getEmptyRocket();
                this.showForm = false;
            }
        },
        name: "NewRocketForm"
    }
</script>

<style scoped>

</style>