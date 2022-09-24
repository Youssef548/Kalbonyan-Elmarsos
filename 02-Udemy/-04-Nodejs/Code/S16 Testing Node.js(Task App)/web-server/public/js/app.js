const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const address = search.value;

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  fetch(`http://localhost:3000/weather?address=${address}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.foreast;
      }
    });
  });
});

// Goal: Use input value to get weather

// 1. Migrate fetch call in the submit callback
// 2. Use the search text ast the address query string value
// 3. Submit the fo rm with a valid and invalid value to test
