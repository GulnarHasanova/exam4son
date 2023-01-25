//1 body-parser cors nodemon express dotenv mongoose


//2 
const bodyParser = require("body-parser")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")

//3

dotenv.config()

//4

const {Schema} = mongoose

const newSchema = Schema({
    img:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true}

})

const Products = mongoose.model("flows",newSchema)

//5 

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

//6 get all

app.get("/flows",(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//7 with id

app.get("/flows/:id",(req,res)=>{
    const {id} = req.params
    Products.findById(id,(err,doc)=>{
        if(!err){
            if(doc){

                res.send(doc)
            }
            else{
                res.status.json({message:"Not Found"})
            }
        }
        else{
            res.status(500).json({message:err})
        }
       
    })
})


//8 delete 

app.delete("/flows/:id",(req,res)=>{
    const {id} = req.params
    Products.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send("deleted")
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//9 add

app.post("/flows",(req,res)=>{
    const flower = new Products({
        img:req.body.img,
        name:req.body.name,
        price:req.body.price
    })

    flower.save()
    res.send("added")



})

//10 .env
const url = process.env.URL.replace("<password>",process.env.PASSWORD)
const port =process.env.PORT






//11
mongoose.set('strictQuery',true)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("db connect");
        app.listen(port,()=>{
            console.log("server started");
        })
    }
    else{
        console.log("disconnect");
    }

})













