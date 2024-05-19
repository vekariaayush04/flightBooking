import express from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("gand marao");
});

app.listen(3000,()=>{
    console.log("Server connected to port 3000")
});