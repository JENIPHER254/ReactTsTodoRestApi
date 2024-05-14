// get db pool config
const pool = require("../config/database");

//creating main module function for CRUD
module.exports = {
  /**
   * Service 1:
   *
   * Create service
   * If Successful user will be able to add todo task to the db
   */
  create: (data, callback) => {
    pool.query(
      `insert into todo_items(todo_item, todo_item_status) values(?,?)`,
      [data.todo_item, data.todo_item_status],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  /**
   *
   * ! Service 1
   */

  /**
   * Service 2:
   *
   * Delete service
   * If Successful user will be able to delete a todo task from the db
   */
  deleteTodo: (data, callback) => {
    pool.query(
      `delete from todo_items where id=?`,
      [
        data.id 
    ],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  /**
   *
   * ! Service 2
   */
/**
   * Service 3:
   *
   * Delete service
   * If Successful user will be able to read and display  tasks from the db
   */
read: (data, callback) => {
    pool.query(
      `select * from todo_items`,
     
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  /**
   *
   * ! Service 3
   */

/**
   * Service 4:
   *
   * Update service
   * If Successful user will be able to update a  task the db
   */
update: (data, callback) => {
    pool.query(
      `update todo_items set todo_item=?, todo_item_status=? where id=?`,
      [
        data.todo_item, 
        data.todo_item_status,
        data.id 
    ],
      (error, result, fields) => {
        if (error) {
          console.log(error);
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },

  /**
   *
   * ! Service 4
   */
};
