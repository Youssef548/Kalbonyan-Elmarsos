const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7, 4, 1]);
    reject("Things went wrong!");
  }, 2000);
});

// then dot allow us to register a fucntion to run when things go well
// cathc dow allow us to register a function to run when reject is call
doWorkPromise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });
