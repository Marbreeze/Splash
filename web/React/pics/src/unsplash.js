import axios from 'axios';

 export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization:
                'Client-ID 8df2a5537e069ad371457aec1590b4a27bdcba2762710ac4b6c4886852edd6e4'
    }
});
 
