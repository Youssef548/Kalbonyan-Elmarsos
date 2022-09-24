// Object property short hand and Destructuring

const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  userAge,
  location: 'egypt',
};

console.log(user);

// Object Destructuring

const product = {
  label: 'red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
