'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/update/:id')   
    .get(todoList.update_a_task);

   app.route('/view/:id')   
    .get(todoList.view_a_task); 
   

    app.route('/delete/:delid')
    .get(todoList.delete_a_task);
};