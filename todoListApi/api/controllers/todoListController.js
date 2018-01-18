'use strict';
var mongojs = require('mongojs'), 
db = mongojs('Tododb');
exports.list_all_tasks = function(req, res) {  
  db.customs.find().sort({"_id":-1},function (err, docs) {
    if (err)
      res.send(err);
    console.log(docs);
    res.json(docs)
});
};




exports.create_a_task = function(req, res) {
  console.log(req.body);
  db.customs.save(req.body,function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};   


exports.view_a_task = function(req, res) {
  db.customs.find({_id: mongojs.ObjectId(req.params.id)},function (err, docs) {
    if (err)
      res.send(err);
    console.log(docs);
    res.json(docs)
});
};  

exports.delete_a_task = function(req, res) {
console.log(req.params.delid); 
  db.customs.remove({_id: mongojs.ObjectId(req.params.delid)},function (err, docs) {
    if (err)
      res.send(err);
    console.log(docs);
    res.json("Data Delete")
});
};

