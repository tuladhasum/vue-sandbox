import axios from 'axios';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

export default class PostService {
   getAllPosts() {
      return axios.get(`${apiBaseUrl}/posts`);
   }
}