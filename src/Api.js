import axios from 'axios';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const api = {
  get
}

async function get(endPoint){
  try {
    const response = await axios.get(BASEURL + endPoint, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response;
  } catch (error) {
    return Promise.reject(error.response);
  }  
}