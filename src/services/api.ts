import axios from 'axios';

const api = axios.create({
  baseURL: 'https://podcastrapi.herokuapp.com/'
})

export default api;