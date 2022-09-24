const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
    {}
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle');
  }
};

const getCurrenctCountry = async () => {
  const location = await getLocation();
  return await getCountry(location.country);
};

const getCountry = async (countryCode) => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.cca2 === countryCode);
  } else {
    throw new Error('Unable to Fetch country');
  }
};
// 1. Create a new function called getCurrentCountry
// 2. Should return a promise that resolves the coutry object for your current location
// 3. use async/await for the new function

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=5ffc0b95b5c857');
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch this api');
  }
};
