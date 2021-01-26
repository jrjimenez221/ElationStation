const path = require("path");
const router = require("express").Router();
const Twit = require("twit")
require("dotenv").config()




//From node library Twit creates a twitter constructor 
let client = new Twit({
    consumer_key:process.env.REACT_APP_TWITTER_API_KEY,
    consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET_KEY,
    access_token: process.env.REACT_APP_ACCESS_TOKEN,
    access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET

});


let params = {screen_name:"fallguysgame" ,  count:"10" }

client.get('statuses/user_timeline', params, function (err,data,response) {
if (!err) {
console.log(data);
}
})



// API Routes
router.get("/twitter", function(req,res) {
    let client = new Twit({
        consumer_key:process.env.REACT_APP_TWITTER_API_KEY,
        consumer_secret: process.env.REACT_APP_TWITTER_API_SECRET_KEY,
        access_token: process.env.REACT_APP_ACCESS_TOKEN,
        access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET
    
    });
    
    
    let params = {screen_name:"fallguysgame" ,  count:"10" }
    
    client.get('statuses/user_timeline', params, function (err,data,) {
    if (!err) {
    res.json(data);
    } else{
        res.json(err)
    }
    })
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;

// Example POST method implementation:
// async function postData(
//     url = '',
//     data = {},
//     additionalHeaders = {},
//     defaultContentType = 'application/json',
// ) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         headers: {
//             ...additionalHeaders,
//             'Content-Type': defaultContentType,
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: defaultContentType === 'application/json' ?
//             JSON.stringify(data) : data,
//         // body data type must match "Content-Type" header
//     });
//     return response.json();
//     // parses JSON response into native JavaScript objects
// }























// module.exports = twitterSearch;
