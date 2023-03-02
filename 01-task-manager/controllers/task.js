const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const tas k = await Task.findOne({_id : taskID})
    const {id:taskID} = req.params
    if(!task){
      return res.status(404).json({msg : `No Task found with this ID : {taskID}` })
    }else{
    return res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
 
  }
};

const updateTask = (req, res) => {
  return res.send("Update the task");
};
const deleteTask = (req, res) => {
  return res.send("delete a task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
