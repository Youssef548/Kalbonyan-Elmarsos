// Call back
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Number Must Be provided');
    }
  }, 2000);
};

getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log('error');
      } else {
        console.log(data);
      }
    });
  }
});

// Promise

const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('Number Must Be Provided');
    }, 2000);
  });

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise Data : ${data}`);
      },
      (err) => console.log(`Error : ${err}`)
    );
  },
  (err) => {
    console.log(`Error : ${err}`);
  }
);

// Promise Chain

getDataPromise('10')
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => {
    return getDataPromise(data);
  })
  .then((data) => console.log(`This promise chain data : ${data}`))
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
