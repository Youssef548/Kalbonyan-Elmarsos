const products = [{ name: 'Computer mouse' }];
const product = products[0];

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values-false,0,empty string,null,undefined

if (product) {
  console.log('product found');
} else {
  console.log('product not found');
}
