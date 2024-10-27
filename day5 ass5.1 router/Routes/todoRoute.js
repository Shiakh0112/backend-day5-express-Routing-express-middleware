const express = require("express");

const router = express.Router();
let todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Write Express.js server", completed: true },
];
// get all todo
router.get("/", (req, res) => {
  res.json(todos);
});
// get single todo using by id

router.get("/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === Number(req.params.id));

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});

// create a new todo
router.post("/", (req, res) => {
  const NewTodo = { id: todos.length + 1, ...req.body };

  todos.push(NewTodo);
  res.status(200).json(NewTodo);
});
// update an existing Todo

router.put("/:id", (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (todo) {
    Object.assign(todo, req.body);
    res.json(todo);
  }
});
// delete a user
router.delete("/:id", (req, res) => {
  const userIndex = todos.findIndex((t) => t.id === parseInt(req.params.id));
  if (userIndex > -1) {
    todos.splice(userIndex, 1);
    res.json({ message: "todo deleted successfully" });
  } else {
    res.status(404).json({ message: "todo not found" });
  }
});

module.exports = router;
