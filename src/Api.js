import axios from 'axios';

const BASEURL = 'https://jsonplaceholder.typicode.com';

export const api = {
  get,
  post
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
    console.log(error)
    return Promise.reject(error.response);
  }  
}

async function post(endPoint, payload){
  try {
    const response = await axios.get(BASEURL + endPoint, payload, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
    return response;
  } catch (error) {
    return Promise.reject(error.response);
  }  
}