import axios from 'axios';
import store from '../store'

const Axios = axios.create({
    baseURL: 'http://ccap.test/api/',
});

export default Axios;
