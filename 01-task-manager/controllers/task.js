const task = require('../models/Task')

const getAllTasks = (req, res) => {
  return res.send("All Items from file");
};

const createTask = async (req, res) => {
const task = await Task.create(req.body);
  return res.status(201).json({task });
};
const getTask = (req, res) => {
  return res.send("Get a single task");
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
  deleteTask
};
