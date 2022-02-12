import axios from 'axios';

export const feedData = ()=>{
    return axios.get('/mock/feed');
}