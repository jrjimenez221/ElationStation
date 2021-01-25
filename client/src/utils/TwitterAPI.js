
const Twit = require("twit")
require("dotenv").config()




//From node library Twit creates a twitter constructor 
let client = new Twit({
    consumer_key:process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET

});


let params = {screen_name:"fallguysgame" ,  count:"10" }

client.get('statuses/user_timeline', params, function (err,data,response) {
if (!err) {
console.log(data);
}
})