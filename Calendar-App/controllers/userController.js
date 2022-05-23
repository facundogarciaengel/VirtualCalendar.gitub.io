const controller = {}
const database = require("../libs/database") //connection 

controller.list = (req,res)=>{
    database.query('SELECT * FROM schedules', )
}

module.exports = controller