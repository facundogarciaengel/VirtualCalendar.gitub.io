const express = require("express")
const view = require("../helpers/views")
const database = require("../libs/database")
const userController = require("../controllers/userController")
const User = require("../models/user")
const Schedule = require("../models/schedule")

const router = express.Router()


router.get("/users",async function(req,res){
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

router.get("/",function(req,res){
    return view("index.html", res)
})
router.get("/registro",function(req,res){
    return view("registro.html",res)
})

router.post("/registro",async function(req,res){
    const user = new User(req.body)
    const validation = user.validate()

    if(validation.validated){
        return res.json(await user.save())
    }

    return res.json(validation)
})

router.get("/inicio_sesion",async function(req,res){
    return view("inicio_sesion.html",res)
})
router.post("/inicio_sesion",async function(req,res){
    const user = new User(req.body)

    const result = await user.login()

    return res.json(result)

})

router.get("/schedule", function(req,res){
    return view("schedule.html", res)
})

router.post("/schedule", async function(req,res){
    const schedule = new Schedule(req.body)
    const validation = schedule.validate()
    
    if(validation.validated){
        return res.json(await schedule.save())
    }
    return res.json(validation)
})


module.exports = router // Exportando