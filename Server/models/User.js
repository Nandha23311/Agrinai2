var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var UserSchema=new Schema
({
    name:String,
    mailId: String,
    phoneNumber:String,
    password:String

});

module.exports=mongoose.model("User",UserSchema)