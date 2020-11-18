const axios = require('axios');
async function main(){
    let baseURL = "https://ckx-movies-api.herokuapp.com";

    let postResponse = await axios.post(baseURL + "/movie/create",{
        title:"The Hobbit",
        plot: "13 dwarves and a hobbit go mountain climbing"
    })
    console.log(postResponse.data)

    let response = await axios.get(baseURL + "/movies");
    console.log(response.data);
}

main();