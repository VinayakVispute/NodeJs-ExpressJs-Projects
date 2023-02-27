const getAllTasks = (req, res) => {
  return res.send("All Items from file");
};

const createTask = (req, res) => {
  return res.json(req.body);
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
