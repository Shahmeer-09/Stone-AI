import axios from 'axios'
const customFetch = axios.create({
  baseURL: `${window.location.origin}/api`,
});

export default customFetch;