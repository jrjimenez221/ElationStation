const express = require('express');
const axios = require ('axios')
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

require ('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post("/LinkedinShare",( req, res) => {
 const linkShare = {
    
    "author": "urn:li:person:" + process.env.LinkedInPerson ,
    "lifecycleState": "PUBLISHED",
    "specificContent": {
        "com.linkedin.ugc.ShareContent": {
            "shareCommentary": {
                "text": req.body
            },
            "shareMediaCategory": "NONE"
        }
    },
    "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
    }
}
let config = {
  headers: {
    Authorization: process.env.ACCESS_TOKEN,
  }
}

axios.post("https://api.linkedin.com/v2/ugcPosts", linkShare, config).then( data => res.json(data))

})

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist'
);
// All you have to do is make sure that you have an .env file with input values for the atlas db connection and plug that into heroku upon deployment as well

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


