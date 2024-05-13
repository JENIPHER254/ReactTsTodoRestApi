const express = require('express');
const cors = require('cors');
const app = express();


//importing routes
const todoItemRoute = require("./apis/todo.router");
// Enable CORS for all requests
app.use(cors());
app.use(express.json());
app.use('/api/',todoItemRoute);

app.listen('3000',()=>{
    console.log('Server is now running...');
})