import express from "express"
import mongoose from "mongoose"
//import data from "./data.js"
import Videos from "./dbmodel.js"

//app config 
const app=express()
const port=process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header','*');
    next()
})

//db config
const conurl="mongodb+srv://sai:pxs5JJlO4H0zJsJR@cluster0.grnv3bb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(conurl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//api endpoints 
app.get("/",(req,res)=>res.status(200).send("hellow World"))
app.get("/v1/posts",(req,res)=>res.status(200).send(data))

app.get("/v2/posts",(req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    
    })
})

app.post("/v2/posts",(req,res)=>{
const dbdata=req.body
Videos.create(dbdata,(err,data)=>{
    if(err){
        res.status(500).send(err)
    }else{
        res.status(201).send(data)
    }

})

})


//listener
app.listen(port,()=>console.log("listenting on"+port))