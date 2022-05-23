const database = require("../libs/database")


class Schedule{
    constructor(data){
        this.date = data.date,
        this.description = data.description,
        this.data = data
    }

    validate(){
        if(!(this.date && this.description)){
            return {
                message:"Debes completar todos los campos",
                validated:false
            }
        }
        if(this.description.length<3){
            return {
                message:"Description debe tener mas de 3 caracteres",
                validated:false
            }
        }

        return {
            validated:true
        }
    }

    async save(){
        const data = {
            date: this.date,
            description : this.description
        }
        try {
            const result = await database.query(
                "INSERT INTO schedules(??) VALUES(?)",
                [Object.keys(data),Object.values(data)]
            )

            console.log(result)

        
            data.id = result.insertId // propiedad que toma un id para poder mostrarlo devolverlo

            return {
                schedule:data,
                success:true,
                message:"schedule completado correctamente"
            }

        }catch(error){
            return error
        }
    }
}

   module.exports = Schedule