'use strict';
// script.js
//const fs = require('fs');
//const text = fs.readFileSync('script.js', 'utf8');
//console.log(text);

const http = require('http');
const server = http.createServer(function(request, response){
	console.log('Hello');
});
server.listen(3888);
console.log('Server started');