const { createTodoItem, deleteTodoItem, selectTodoItem } = require("./todo.controller");

//creating routes
const router = require("express").Router();


router.post('/',createTodoItem);
router.delete('/',deleteTodoItem);
router.get('/',selectTodoItem);

module.exports= router;