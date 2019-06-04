<template>
   <section class="container">
      <h1>Post Crud</h1>
      <div class="row">
         <div class="col-4" v-for="post in posts" :key="post.id">
            <div class="card">
               <div class="card-body">
                  <h3 class="card-title">{{post.title}}</h3>
                  <p>{{post.body}}</p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
   import _ from 'lodash';
   import PostService from '../lib/PostService';

   const postService = new PostService();
   export default {
      name: "PostCrud",
      data() {
         return {
            posts: []
         }
      },
      created() {
         postService.getAllPosts()
            .then(res => {
               this.posts = res.data;
               console.log(this.posts);
            })
            .catch(err => console.error(err));
      }
   }
</script>

<style scoped>

</style>