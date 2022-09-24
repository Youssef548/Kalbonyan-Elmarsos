require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("63183aef4764d12d60116e6b")
//   .then((result) => {
//     console.log(result);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((counts) => {
//     console.log(counts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63183b0d4764d12d60116e6d")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log("E:" + e);
  });
