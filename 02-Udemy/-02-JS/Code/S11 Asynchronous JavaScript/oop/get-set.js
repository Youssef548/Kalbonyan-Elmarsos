const data = {
  location: [],
  get location() {
    return this._location;
  },

  set location(value) {
    this.location = value.trim();
    this.location.push(this._location);
  },
};

// Code that uses data object
data.location = '   Philadelphia    ';
data.location = ' New York ';

console.log(data);
