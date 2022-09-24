// CRUD create read update and delete

const { MongoClient, ObjectID } = require("mongodb");

const connectURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// Okay this means object is 24 bytes or character or letter 12 is buffer string and equal other, and another 12 is hexString but its diffrent from one to another

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database");
  }

  const db = client.db(databaseName);

  // Delete Documents

  // db.collection("users")
  //   .deleteMany({
  //     age: 27,
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Use deleteOne to remove a task

  db.collection("tasks")
    .deleteOne({
      _id: new ObjectID("631653481a967c1f2ccc9211"),
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
