const axios = require('axios')

async function main()
{
    let baseURL = "https://jsonplaceholder.typicode.com";
    let response = await axios.patch(baseURL + '/posts/1', {
        'userId': 505,
        'id': 606,
        'title':"Otters spotted at Bishan",
        'body':"People are fascinated by water-dogs"
    })
    console.log(response.data);
}

main();

/* the above main() function and calling it can be replaced with the annoymous function below
(async function(){

})()
*/