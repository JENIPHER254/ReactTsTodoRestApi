const { createTodoItem } = require("./todo.controller");

//creating routes
const router = require("express").Router();


router.post('/',createTodoItem);

module.exports= router;