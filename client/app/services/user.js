import Api from './api.js';

export default {
    signIn (data) {
        return Api.post('sign-in', data);
    }
};
