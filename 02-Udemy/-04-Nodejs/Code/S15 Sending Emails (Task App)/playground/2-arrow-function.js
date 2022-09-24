// const square = function (x) {
//   return x * x;
// }

const square = (x) => {
  return x * x;
};

console.log(square(3));

const event = {
  name: 'birhtday party',
  guestList: ['Andrew', 'Jen', 'Mike'],
  printGuessList() {
    console.log('Guest log' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + 'is attending' + this.name);
    });
  },
};

event.printGuessList();


