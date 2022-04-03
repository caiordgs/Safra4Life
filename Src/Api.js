import axios from 'axios';
const baseUrl = 'http://localhost:3000';

// Invoking get method to perform a GET request
axios.get(`${baseUrl}/users/sign_in`).then((response) => {
  console.log(response.data);
});