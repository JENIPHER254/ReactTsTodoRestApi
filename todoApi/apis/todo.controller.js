
const { create, deleteTodo, read ,update } = require("./todo.services.js");

//main module for all controllers
module.exports = {
  /**
   *
   * create todoItem controller
   *
   * */
  createTodoItem: (req, res) => {
    //get request body
    const body = req.body;
    //call create service
    create(body, (err, request) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error ...",
        });
      }
      return res.status(200).json({
        success: 1,
        data: request,
      });
    });
  },
  /**
   *
   * delete todoItem controller
   *
   * */
  deleteTodoItem: (req, res) => {
    //get request body
    const body = req.body;
    //call create service
    deleteTodo(body, (err, request) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error ...",
        });
      }
      return res.status(200).json({
        success: 1,
        data: request,
      });
    });
  },

/**
   *
   * select todoItem controller
   *
   * */
selectTodoItem: (req, res) => {
    //get request body
    const body = req.body;
    //call create service
    read(body, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error ...",
        });
      }
      return res.status(200).json({
        success: 1,
        data: result,
      });
    });
  },

/**
   *
   * update todoItem controller
   *
   * */
updateTodoItem: (req, res) => {
    //get request body
    const body = req.body;
    //call create service
    update(body, (err, request) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error ...",
        });
      }
      return res.status(200).json({
        success: 1,
        data: request,
      });
    });
  },
};
