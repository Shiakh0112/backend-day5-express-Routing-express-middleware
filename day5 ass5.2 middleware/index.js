const express = require("express");

const app = express();

const PORT = 9808;

app.use(express.json());
const Data = [];
const validateInput = (req, res, next) => {
  const { Id, Name, Rating, Description, Genre, Cast } = req.body;

  if (typeof Id !== "number" || typeof Rating !== "number") {
    return res.status(400).send("Id and rating must be a number");
  }
  if (
    typeof Name !== "string" ||
    typeof Description !== "string" ||
    typeof Description !== "string" ||
    typeof Genre !== "string"
  ) {
    return res.status(400).send("Name,Genre and description must be a string");
  }

  if (!Array.isArray(Cast) || !Cast.every((c) => typeof c === "string")) {
    return res.status(400).send("Cast must be an array of strings");
  }
  next();
};

app.post("/", validateInput, (req, res) => {
  Data.push(req.body);
  res.status(200).send("data received");
});
app.get("/", (req, res) => {
  res.status(200).json(Data);
});

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});
