const path = require("path")

const express = require("express");
const port = 4000; 

const app = express()


app.get("/", (req,res)=>{
    console.log(__dirname)
    return res.sendFile(path.join(__dirname,"static", "index.html")); 
})



app.listen(port, ()=>{
    console.log("Escuchando en http://localhost:"+port)
})