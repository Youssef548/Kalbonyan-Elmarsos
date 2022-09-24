const express = require("express");
require("./db/mongoose");
// const User = require("./models/user");
// const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Regiseter middleware
// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("website is a maintaince now");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});

const Task = require("./models/task");
const User = require("./models/user");

const main = async (req, res) => {
  // const task = await Task.findById("631c32d8623831154c6c0ded");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);
  try {
    const user = await User.findById("631c32d3623831154c6c0dea");
    await user.populate("tasks").execPopulate();
    console.log(user.tasks);
  } catch (e) {
    console.log(e);
  }
};

main();

// mypass -> mposadpdaspod
