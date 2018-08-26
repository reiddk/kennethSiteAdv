import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/static/books/'
});

export default instance;