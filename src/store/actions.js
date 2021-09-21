import axios from 'axios';
export default {
    getUser(context, data) {
        console.log('test---');
        axios.get('/api/my_api/my_json.json').then(function(response) {
            // handle success
            context.commit('getUserInit', response.data);
        });
    },
};
