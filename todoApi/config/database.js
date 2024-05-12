const {createPool}= require('mysql');

const pool=createPool({
    port: "3306",
    host: "localhost",
    password:"",
    user:"root",
    database:"todo_project",
    connectionLimit:10
})