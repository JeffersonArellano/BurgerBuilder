import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-7615d.firebaseio.com/',
});

export default instance;
