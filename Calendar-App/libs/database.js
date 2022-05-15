//import tool for db connection
const mysql = require("mysql2"); 

//firs method used for connection with our db, we need pass the neccesary from our db. 
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'usuario',
    password:'robot',
    database: 'calendarapp'
})

// function myCreateConnection(object){
//     return {
//         info:{
//             name: "Coneccion personalizada",
//             status: "Succes"
//         },
//         query: function(){
//             console.log("Realizando consulta...")
//         }
//     }
// }

//export the connection inside the object

function query(sql){
    const miPromesa = new Promise(function(resolve,reject){
        connection.query(sql,function(error, result, fields){
            if(error!=null){
                console.log(error)
                return reject({
                    error: true,
                    message:error.sqlMessage
                })
            }else{
                return resolve(result)
            }
        })
    })
    return miPromesa; 
}
module.exports = {
    connection,
    query
}