import express from "express";
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
   console.log("welcome to Custom Form Builder!");
})

app.listen(5500,()=>{
    console.log("port is running on 5500!")
})


