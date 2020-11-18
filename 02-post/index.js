const axios = require('axios');

async function getMovies() {
    let url = "https://ckx-movies-api.herokuapp.com";
    let response = await axios.get(url + '/movies');
    console.log(response.data);
}

async function main() {
    let url = 'https://jsonplaceholder.typicode.com';
    let response = await axios.post(url + '/posts',{
        "userId": 404,
        "id": 500,
        "title":"Good places to eat laska",
        "body":"The famous Katong Laska is not at Katong anymore"
    })
    console.log(response.data);
}
// main();
getMovies();
