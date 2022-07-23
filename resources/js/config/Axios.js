import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://ccap.test/api/',
});

export default Axios;
