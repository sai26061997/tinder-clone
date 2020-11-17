//import express from "express";
const express = require('express');
const mongoose=require('mongoose');
const cards =require("./dbCards");
const cors= require('cors');



//App Config

const app =express()
const port= process.env.PORT ||8001
const connection_url='mongodb+srv://admin:6ifny7G4FA9nPWcM@cluster0.xga5v.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middleware
app.use(express.json());
app.use(cors());
//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
//API endpoints 
app.get('/',(req,res)=>res.status(200).send( "hello"));
app.post("/tinder/card",(req,res)=>{
    const dbcards= req.body
    console.log(dbcards);
        cards.create(dbcards,(err,data)=>{
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });

});

app.get("/tinder/card",(req,res)=>{
cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });

});
//Listeners

app.listen(port,()=>console.log("listening at port:" +{port} ));