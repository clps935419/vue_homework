import axios from 'axios';

export const loginAuth = (acc,password) => {
    console.log('acc',acc,password)
    let data = {
        account: acc.value,
        password: password.value,
    };
    return axios.post('/mock/login', data);
};
