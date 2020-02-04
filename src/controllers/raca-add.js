const Task = require('../models/Task');

module.exports = {
  add: function (req, res) {
    let task = new Task(req.body);
    
    task.save()
      .then(task => res.status(200).json(task))
      .catch(err => {
        res.status(400).send("There's was an error while adding the task", err)
      });
  },
  
};