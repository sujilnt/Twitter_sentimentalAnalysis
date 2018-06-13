//import webpackhotplugin from "webpack-hot-middleware/client?reload=true";
console.log("working !!!!");
import TwitterApi from "twitter";
var Twitter = require('twitter');

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

// using twitter api
const Key="URn1hIjephCBThs2D9DMOo7XI";
const consumersecretkey="4BFJSg4sL6NCtPFZ4lZx8zyazddahmUq7xOo4C0cJwtIrCSOPl";
const accessToken ="897616760-ts1ZrKENT8PREFwBSbhdlvjEEjjUGadORuYBKnlN";
const accessTokenSecret = "36uOUItjy5CS7RUtCrGNb2ZO56HLgDTPyza8Y9eiyQDWk";
const twitterapi = " https://api.twitter.com/1.1/followers/ids.json?screen_name=katyperry";

const clientkey= new TwitterApi({
    consumer_key: Key,
    consumer_secret: consumersecretkey,
    access_token_key: accessToken,
    access_token_secret: accessTokenSecret
});

// twit api

let bb ="successful server ";
console.log("adding a change",bb);


