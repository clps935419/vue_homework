import axios from 'axios';
import { apiMyData,apiLoginAuth } from '../api';
export default {
    async getUser(context, data) {
        const res = await apiMyData();
        console.log('myData', res.data);
        context.commit('getUserInit', res.data);
    },
    async getLogin(context,data){
        try {
            const res = await apiLoginAuth(data.account, data.password);
            console.log('login',res.data);
            context.commit('loginAuth', res.data);
        } catch (error) {
            console.log('error',error)
        }
        
    }
};
