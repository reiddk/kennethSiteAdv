import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost/books/'
});

export default instance;