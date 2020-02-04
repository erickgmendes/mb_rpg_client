const Task = require('../models/Task');

module.exports = {
    getAll: function (req, res) {
        Task.find(function (err, tasks) {
            if (err) {
                res.status(400).send("There's was an error while retrieving the tasks");
            }
            else {
                res.status(200).json(tasks);
            }
        });
    },
};