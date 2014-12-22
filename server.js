var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname+"/components"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index");
});
var names = ['logesh', 'lalitha', 'anand', 'vasee', 'prem'];

io.on('connection', function(socket){
	
	/*console.log("user connected");	
	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});*/

  	socket.on('chat',function(message){
  		io.emit('chat', message);
  		console.log(names[Math.floor(Math.random() * names.length)]+":"+message);
  	});
})

var port = process.env.PORT || 3000;

http.listen(port);