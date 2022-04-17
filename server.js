var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require("cors");
const { database } = require('firebase');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "native",
    // database: "kgc_crm",
})

var server = app.listen(4545,function(){
    var host = server.address().address;
    var port = server.address().port
    console.log("start")
});
conn.connect(function(error){
    if(error)console.log(error);
    else console.log("connected");
})

app.get('/users', function(req, res){
    conn.query('SELECT * FROM tbl_dashboard', function(error, rows){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

app.get('/detail', function(req, res){
    conn.query('SELECT * FROM tbl_user', function(error, rows){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);
        }
    })
})

app.post('/userinsert', function (req, res) {

    const username = req.body;
    
    debugger
    const sqlquery = `INSERT INTO userdetail SET ?`;

    conn.query(sqlquery, username,function (err, result)  {
        if (err) throw err;
        console.log("User dat is inserted successfully ");
    })

})

app.post('/registration', function (req, res) {

    const dataRequest = req.body;

    
    debugger
    const sqlquery = `INSERT INTO registration SET ?`;

    conn.query(sqlquery, dataRequest,function (err, result)  {
        if (err) throw err;
        console.log("user registration data successfully registered");
    })

})