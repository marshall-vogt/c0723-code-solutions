async function getArray(url, options) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response failed');
    }
    const fetchResponse = await response.json();
    console.log(fetchResponse);
  } catch (error) {
    console.error(error.message);
  }
}

const url = 'https://jsonplaceholder.typicode.com/users';
const options = {
  method: 'GET',
};
const pokeApi = 'https://pokeapi.co/api/v2/pokemon/pikachu/';

getArray(url, options);
getArray(pokeApi, options);
