import axios from 'axios';

export const myData = () => {
    return axios.get('/mock/myData');
};
