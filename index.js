const express = require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

app.use(cors());
app.use(bodyparser.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({limit:"50mb",parameterLimit:1000,extended:true}));

dotenv.config({path:"./.env"})
const port= process.env.PORT || 5001;

mongoose
.connect(process.env.MONGO_DB_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))

app.use('https://food-delivery-u3hj.onrender.com/api/users',require("./Routes/userRouter"));
app.use('https://food-delivery-u3hj.onrender.com/api',require("./Routes/Itemrouter"));
// app.use('https://food-delivery-u3hj.onrender.com/api',require("./Routes/Orderrouter"));
app.listen(port,()=>{
    console.log(`server started at the ${port}`) 
})