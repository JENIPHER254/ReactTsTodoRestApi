const express = require('express');

const app = express();
//importing routes
const todoItemRoute = require("./apis/todo.router");

app.use(express.json());
app.use('/api/',todoItemRoute);

app.listen('3000',()=>{
    console.log('Server is now running...');
})