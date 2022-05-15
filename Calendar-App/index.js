const path = require("path")

const express = require("express");
const port = 4000; 

const app = express()

//import routers
const users = require("./routes/users")


//middlewares section

app.use("/static", express.static(path.join(__dirname,"static"))) // middleware for static documents

//router code section
app.use(users); // using a router


app.get("/", function(req,res){
    console.log(__dirname)
    return res.sendFile(path.join(__dirname,"views", "index.html")); 
})



app.listen(port, ()=>{
    console.log("Escuchando en http://localhost:"+port)
})