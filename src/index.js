const newApiKey="810b0902cabf4fbaab29be8154f3bd93";
const url  = `https://newsapi.org/v2/everything?q=brexit&apiKey=${newApiKey}`;
fetch(url)
    .then((response)=> response.json())
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });

let a ="successful ";
console.log("adding a change",a );