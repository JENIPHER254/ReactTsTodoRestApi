const { createTodoItem, deleteTodoItem, selectTodoItem, updateTodoItem } = require("./todo.controller");

//creating routes
const router = require("express").Router();


router.post('/',createTodoItem);
router.delete('/',deleteTodoItem);
router.get('/',selectTodoItem);
router.put("/",updateTodoItem);

module.exports= router;