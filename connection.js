const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'contactdb'
})
mysqlConnection.connect((err)=>{
    if(err){
        console.log("Error in DB connection: "+JSON.stringify(err,undefined,2));
    }else{
        console.log("DB connected");

    }
})
module.exports=mysqlConnection