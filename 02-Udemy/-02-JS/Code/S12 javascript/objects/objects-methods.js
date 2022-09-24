let restaurant = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  setParty: function (amount) {
    return (this.guestCount = this.guestCount + amount);
  },
  removeParty: function (amount) {
    return (this.guestCount = this.guestCount - amount);
  },
};

// setParty
console.log(restaurant.setParty(72));

console.log(restaurant.checkAvailability(4));

console.log(restaurant.removeParty(5));

console.log(restaurant.checkAvailability(4));

// removeParty
