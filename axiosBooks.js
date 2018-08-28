import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://s3.us-east-2.amazonaws.com/kennethbooks/books'
});

export default instance;
