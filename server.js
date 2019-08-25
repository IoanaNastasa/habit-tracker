const express = require("express");
const mongoose = require("mongoose");

const user = require("./routes/api/habits");
const app = express();

app.use(express.json());

// Connect DB
const { db } = require("./config");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/habits", require("./routes/api/habits"));

// process.env.PORT for later Heroku deployment
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
