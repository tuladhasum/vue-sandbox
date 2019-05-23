<template>
   <div class="container">
      <h1>Reddit
         <small class="text-muted">/r/rarePuppers</small>
      </h1>
      <hr>
      <ul v-if="posts" class="list-unstyled">
         <li v-for="(post,i) in posts" class="media m-3">
            <img :src="post.data.thumbnail" class="mr-3" alt="...">
            <div class="media-body">
               <h5 class="mt-0 mb-1"><a :href="createUrl(post.data.permalink)" target="_blank">{{post.data.title}}</a>
               </h5>

               <p>
               <h3 class="text-danger">{{post.data.ups}} ⬆️</h3>
               <p>created {{formatDate(post.data.created_utc)}} ago by {{post.data.author}}</p>
               <span class="badge badge-pill badge-secondary">{{post.data.num_comments}} comments</span>
               <button v-if="isImage(post)"
                       @click="post.showImage = !post.showImage"
                       type="button" class="btn btn-primary btn-sm">{{post.showImage ? 'Hide':'Show'}} Image</button>
               <div v-if="post.showImage">
                  <img :src="post.data.url" width="800px" alt="">
               </div>
               </p>
            </div>
         </li>
      </ul>
   </div>
</template>

<script>
    // destructuring
    import {parse, distanceInWords} from 'date-fns';

    export default {
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.load()
        },
        methods: {

            load() {
                const url = 'https://www.reddit.com/r/rarepuppers.json';
                fetch(url)
                    .then(response => response.json())
                    .then((result) => {
                        result.data.children.forEach(child => {
                            child.showImage = false;
                        })
                        this.posts = result.data.children;
                    })
            },
            formatDate(date) {
                return distanceInWords(parse(date * 1000), new Date())
            },
            createUrl(path) {
                return `https://www.reddit.com${path}`;
            },
            isImage(post){
                return post.data.url.match(/\.(jpg|png|jpeg|bpm)$/);
            }
        },
        name: "Reddit"
    }
</script>

<style scoped>

</style>