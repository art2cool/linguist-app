import Api from './api.js';

export default {
    signIn (data) {
        return Api.post('/api/v1/auth/sign-in', data);
    }
};
