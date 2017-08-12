var express=require("express")
var app=express();

app.get("/",function(req,res){
res.send("SENDED")});

app.listen(8000)