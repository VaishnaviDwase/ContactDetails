const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/contacts',(req,res)=>{
    connection.query('SELECT * FROM contact',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(rows);
            res.send(rows);
        }
    });
})
app.get('/contacts/:id',(req,res)=>{
    connection.query('SELECT * FROM contact WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(rows);
            res.send(rows);
        }
    });
})

app.delete('/contacts/:id',(req,res)=>{
    connection.query('DELETE  FROM contact WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(rows);
            res.send(rows);
            console.log('row deleted');
        }
    });
})

app.post('/contacts',(req,res)=>{
    var emp = req.body
    var empData = [emp.id,emp.firstname,emp.lastname]
    connection.query('INSERT INTO contact(id,firstname,lastname) values(?)',[empData],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(rows);
            res.send(rows);
        }
    });
})



app.listen(3000,()=>console.log('Express server is running on port 3000'))