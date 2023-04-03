const queryParams = new URLSearchParams(window.location.search);
const characterId = queryParams.get('id');

fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
  .then(response => response.json())
  .then(data => {
    const name = document.querySelector('#name');
    const image = document.querySelector('#image');
    const status = document.querySelector('#status');
    const species = document.querySelector('#species');
    const gender = document.querySelector('#gender');

    name.textContent = data.name;
    image.src = data.image;
    status.textContent = `Status: ${data.status}`;
    species.textContent = `Species: ${data.species}`;
    gender.textContent = `Gender: ${data.gender}`;
  })
  .catch(error => console.log(error));

  console.log(queryParams)