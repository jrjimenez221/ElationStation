const fetch = require(`node-fetch`);
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






// function twitterSearch(bodyParamSearch) {
//     // console.log('test')
//     return postData(process.env.GET_TOKEN, {
//         client_id: process.env.CLIENT_ID_TWITCH,
//         client_secret: process.env.CLIENT_SECRET_TWITCH,
//         grant_type: `client_credentials`,
//     }).then((data) => {
//         // console.log(data); // JSON data parsed by `data.json()` call
//         bodyParamSearch = `"${bodyParamSearch}"`;
//         return postData(
//             `https://api.igdb.com/v4/games`,
//             'fields *; search ' + bodyParamSearch + '; limit 10;', {
//                 'Client-ID': process.env.CLIENT_ID_TWITCH,
//                 'Authorization': `Bearer ` + data.access_token,
//             },
//             'text/plain',
//         );

//     });


// }

















// module.exports = twitterSearch;
