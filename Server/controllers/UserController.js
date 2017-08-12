var http=require("http")
var HttpStatus = require('http-status');
var User = require('../models/User.js');
var express=require("express");

var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());






exports.login= app.post("/agri/v1/login",function( req , res){
    var reqBody=req.body;
    var NumOrMailId=reqBody.NumOrMailId;
    var check=
    User.find({mailId:NumOrMailId,phoneNumber:NumOrMailId},function(err,user)
    {
        if (err)
        {
            res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            code:  HttpStatus.INTERNAL_SERVER_ERROR,
            data: '',
            error: 'Unexpected error accessing data'
            });
            return;
         }
         if (users)
         {
             res.status(HttpStatus.OK).json({
             status: 'success',
             code: HttpStatus.OK,
             data: user
             });
         };


    });
});


exports.newUser= app.post("/agri/v1/newuser",function( req , res){
console.log("Server Hitted");
console.log(req.body);

//    var reqBody=req.body;
//    var name=reqBody.name;
//    var mailId=reqBody.mailId;
//    var phoneNumber=reqBody.phoneNumber;
//    var password=reqBody.password;

    var reqBody=req.body;
    var name=reqBody.name;
    var mailId=reqBody.id;

    var userSchema=new User({
            name:name,
            mailId:"m0052",
            phoneNumber:000909897,
            password:mailId
    });

    userSchema.save(function(err,user){
     if (user)
                 {
                     res.status(HttpStatus.OK).json({
                     status: 'success',
                     code: HttpStatus.OK,
                     data: user
                     });
                 };
    if (err)
            {
                res.status( HttpStatus.INTERNAL_SERVER_ERROR).json({
                status: 'failure',
                code:  HttpStatus.INTERNAL_SERVER_ERROR,
                data: '',
                error: 'Unexpected error accessing data'
                });
                return;
             }


    });

});


