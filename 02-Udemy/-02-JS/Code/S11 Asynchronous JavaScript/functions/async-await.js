const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number'
        ? resolve(num * 2)
        : reject('Number Must Be Provided');
    }, 2000);
  });

const processData = async () => {
  let data = await getDataPromise('abc');
  data = await getDataPromise(data);
  return data;
};

processData()
  .then((data) => console.log('Data', data))
  .catch((err) => console.log('Error', err));
