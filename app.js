var express=require('express');
var app=express();
var mongoose=require('mongoose');
var Bookorg=require("./book")
mongoose.connect("mongodb+srv://dev:jcb@bookdbfake-rbyfo.mongodb.net/test?retryWrites=true&w=majority")
app.get('/',(req,res)=>{
    res.send("engine running")
});
app.get("/create",(req,res)=>{
    var h=req.query
    Bookorg.create(h,(err,found)=>{
        if (err) {
            res.send('err')
        } else {
            res.send("done successfully")
        }
    })
})
app.get("/view",(req,res)=>{
  
    Bookorg.find({},(err,found)=>{
        if (err) {
            res.send('err')
        } else {
            res.send(found);
        }
    })
})
app.listen(7777);
