// setTimeout(() => {
//   console.log('hello world');
// }, 2000);

// const names = ['Andrew', 'Jen', 'Jess'];
// const shortName = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latidude: 0,
//       langitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// const data = geocode('egypt', (data) => {
//   console.log(data);
// });

// Goal: Mess around with the call back pattern

// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const result = num1 + num2;

    callback(result);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // should print: 5
});
