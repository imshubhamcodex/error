const axios = require('axios');

async function apiCall(){
    await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response.data.title)
      return response.data.title;
    })
    .catch(function (error) {
      console.log(error);
    })

}

var userData = `My user id ${apiCall()}`
console.log(userData)

