'use strict';
// script.js
//const fs = require('fs');
//const text = fs.readFileSync('script.js', 'utf8');
//console.log(text);

const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response){
	//console.log('Hello');
	console.log(request.method, request.url);
	if(request.url == '/style.css'){
		const css = fs.readFileSync('style.css', 'utf8');
		response.end(css);
	} else{
	const html = fs.readFileSync('index.html', 'utf8');
	//response.end();
	response.end(html);
	}
});
console.log('port = ', process.env.PORT);
server.listen(process.env.PORT || 3888);
console.log('Server started');