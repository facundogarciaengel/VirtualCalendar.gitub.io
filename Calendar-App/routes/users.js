const express = require("express")
const database= require("../libs/database")
//console.log(database.connection)
const router = express.Router()

//  router.get("/users", async(req,res)=>{
//     database.connection.query("SELECT * FROM user", function(error,result){
//         if(error!=null){
//            return res.json({message: error.sqlMessage})
//        }
//       return res.json(result)
//     })
router.get("/users", async function(req,res){
    try{
        const data = await database.query("SELECT * FROM users")

        return res.json(data)
        
    }catch(error){
        return res.json({
            error:true,
            message:"An error ocurred"
        })
    }
    
})


router.get("/login", (req,res)=>{
    res.json({ruta:"login"})
})

module.exports = router; 