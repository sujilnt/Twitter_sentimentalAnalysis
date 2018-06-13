import twitterdata from "./Api/test.js";

let twitterdatadata= "do something ";
let bb ="successful server ";
console.log("adding a change",twitterdatadata);

fetch('http://localhost:8080/test', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(text) {
        console.log('Request successful', text);
    })
    .catch(function(error) {
        log('Request failed', error)
    });
