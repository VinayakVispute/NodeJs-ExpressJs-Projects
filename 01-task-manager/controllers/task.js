const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const {createCustomeError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks,amount:tasks.length });
  // res.statis(200).json({status:'success',data:{tasks,nbHits : tasks.length}})
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body); 
    return res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id:taskID })
    if (!task) {
      return next(createCustomError(`No Task Found with id : ${taskID}`,404))
      // const error = new Error('Not Found');
      // error.status = 404;
      // return next(error)


      // return res
      //   .status(404)
      //   .json({ msg: `No Task found with this ID : ${taskID}` });
    } else {
      return res.status(200).json({ task });
    }
});

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No Task Found with id : ${taskID}`,404))
      // return res
      //   .status(404)
      //   .json({ msg: `No Task found with this ID : ${taskID}` });
    } else {
      return res.status(200).json({ task });
      // return res.status(200).send();
      // return res.status(200).json({task:null, status:'success'});
    }
});

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`No Task Found with id : ${taskID}`,404))
      // return res
      //   .status(404)
      //   .json({ msg: `No Task found with this ID : ${taskID}` });
    } else {
      return res.status(200).json({ task });
    }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
