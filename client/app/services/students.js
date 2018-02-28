import Api from './api.js';

export default {
    getAllStudents (data) {
        return Api.get('/api/v1/students', data);
    }
};
