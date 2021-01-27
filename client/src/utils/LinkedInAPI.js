


var request = require('request');
var access_token = 'AQVOYJXrSlHt5JY9x2W044t92WKObJGMa3IcV36us55NvfkR8CqbdfxBE5SBU5s0nVN69UToUcquB-IfLEBCh5nEGNSmMZbrzsO8crbkA4zVuy4z1r2LaBS80jvBevtejmcfuPZ7G8npZOloVAwUJ8dqXz_N_mXI3aN6ptXhMtyaob9M7w99Eclr1ba80xyxc_0fClSkwi9Jl1VLl-xWjjtdn7_t0ZYl4RuUdlZOxggSTMnE7f2Qm44-d7Rd0y9n1FV9K5F_GD4AGappmid1W_zBf3cN0psmrywltRX3QgN-kLrklSsY9kuSEMTZlAvTTh3-HpQdGKt07CTFRgxYaq9r6ExSFQ';


// function callMailchimpAPI(email, done){
// 	var requestObj={
// 		email_address:email,
// 		status:"subscribed"
// 	}
// 	request.post({url:"https://us9.api.mailchimp.com/3.0/lists/TODO_YOUR_AUDIENCE_ID/members",headers:{"Authorization": "Basic TODO_Base64Encode(abc:YOUR_MAILCHIMP_APIKEY)"},body:JSON.stringify(requestObj)}, function(err,res,responseBody){
// 		if (err) {
// 			console.log(err);
// 			done(err,null); 
// 		}
// 		else {
// 			console.log(responseBody);
// 			done(null,JSON.parse(responseBody)); 
// 		}
// 	});
// }



function callMeAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/me",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

function callEmailAPI(accessToken, done){
	request.get({url:"https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",headers:{"Authorization": "Bearer "+accessToken}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}


function main(authCode, done){
	getAccessToken(authCode,function(err, res){
		if (err) {done(err)}
		else{
			var access_token = res.access_token;
			callMeAPI(access_token,function(err, res){
				if (err) {done(err)}
				else{
					var firstname = res.localizedFirstName;
					var lastname = res.localizedLastName;
					callEmailAPI(access_token,function(err, res){
						if (err) {done(err)}
						else{
							var email = res.elements[0]["handle~"].emailAddress;
							done(null,"success");
						}
					});
				}
			});
		}
	});
}

function getAccessToken(authCode, done){
	request.post({url:"https://www.linkedin.com/oauth/v2/accessToken",form:{
		grant_type:'authorization_code',
		code:authCode,
		redirect_uri: "https://elation-station.herokuapp.com/",
		client_id:"78o6w4y2569mqx",
		client_secret: "mRwNS7N5N5AygZcn",
	}}, function(err,res,responseBody){
		if (err) {
			console.log(err);
			done(err,null); 
		}
		else {
			console.log(responseBody);
			done(null,JSON.parse(responseBody)); 
		}
	});
}

// exports.handler = (event, context, callback) => {
// 	const done = (err, res) => callback(null, {
// 		statusCode: err ? '400' : '302',
// 		body: err ? err.message : JSON.stringify(res),
// 		headers: {
// 			'Location': 'URL_TO_YOUR_HOMEPAGE',
// 			'Content-Type': 'text/html',
// 			'Access-Control-Allow-Methods': 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
// 			'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
// 			'Access-Control-Allow-Origin': '*'
// 		},
// 	});
// 	if (event){
// 		switch (event.httpMethod) {
// 			case 'GET':
// 				if (event && event.queryStringParameters && event.queryStringParameters.code && event.queryStringParameters.state){ 
// 					var state = decodeURIComponent(event.queryStringParameters.state);
// 					var code = decodeURIComponent(event.queryStringParameters.code);
// 					main(code, done);
// 				} else {
// 					console.log("ERROR:  Malformed query parameters. Expected code and state.");
// 					done(new Error('<h1>Something went wrong. Please go back and use the email signup instead.</h1>'));  
// 				}
//         	break;
// 		}
// 	}
// }

//  {"localizedLastName":"Barnes","profilePicture":{"displayImage":"urn:li:digitalmediaAsset:C4E03AQGkijna8jdf-A"},"firstName":{"localized":{"en_US":"Lloyd"},"preferredLocale":{"country":"US","language":"en"}},"lastName":{"localized":{"en_US":"Barnes"},"preferredLocale":{"country":"US","language":"en"}},"id":"PHIIPGH5B5","localizedFirstName":"Lloyd"}
// {"elements":[{"handle~":{"emailAddress":"barnes.lloyd86@gmail.com"},"handle":"urn:li:emailAddress:1689296270"}]}