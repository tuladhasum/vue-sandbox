const API_URL = 'https://rockets.now.sh/';
// const API_URL = 'http://noridian.test/api/rockets';
// const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default {
     async getRockets() {
         return await fetch(API_URL)
             .then(response => response.json());
    }
}