const express = require("express");
const app = express();
const PORT = 4000;

const UserRouter = require("./Routes/userRoute");
const TodoRouter = require("./Routes/todoRoute");
app.use(express.json());
app.use("/users", UserRouter);

app.use("/todos", TodoRouter);
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
