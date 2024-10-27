const express = require("express");
const router = express.Router();
// data
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
// get all users
router.get("/", (req, res) => {
  res.json(users);
});
// get user by id
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});
// create a new user
router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// update an existing user

router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (user) {
    Object.assign(user, req.body);
    res.json(user);
  }
});

// delete a user
router.delete("/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex > -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
module.exports = router;
