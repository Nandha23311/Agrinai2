var express=require("express");
var app=express();
var mongoose=require("mongoose");
var port = process.env.PORT || 9000;
///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////

var mongodbUri = 'mongodb://localhost/Agrinai';


mongoose.connect(mongodbUri,options);
var conn = mongoose.connection;

var options = {
	server: {
		socketOptions: {
			keepAlive: 300000
		}
	}
};

conn.on('disconnected', function() {
	console.log('MongoDB disconnected!', moment().format('YYYY-MM-DD hh:mm'));
	setTimeout(function(){
		mongoose.connect(mongodbUri);
	}, 3000);
});

conn.on('error', function(error) {
	console.error('Error in MongoDB connection: ' + error);
	mongoose.disconnect();
});

conn.on('connected', function(){
	console.log('connected with MongoDB');
});

conn.once('open', function() {
	// Wait for the database connection to establish, then start the app.
});

///////////////////////////////////////////////////////////////////////
////////////Mongoose Connection///////////////////////////////////////

require("./Server/routes.js")(app);
app.listen(port);
console.log('App is listening on port: ' + port);
console.log('http://localhost:' + port);

process.on('uncaughtException', function (err) {
	console.log(err);
	console.error((new Date()).toUTCString() + ' uncaughtException:', err.message);
	console.error(err.stack);
	//process.exit(1)
});
_ = require('underscore');
