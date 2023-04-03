const form = document.querySelector('form');
const searchInput = document.querySelector('#search');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value;

  fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';

      // if (data.results.length === 0) {
      //   resultsContainer.innerHTML = '<p>No results</p>';
       if (data.results.length > 0){
        data.results.forEach(result => {
          const resultDiv = document.createElement('div');
          resultDiv.innerHTML = `
            <h2>${result.name}</h2>
            <img src="${result.image}">
            <p> <a href="character.html?id=${result.id}">View Details</a></p>
          `;
          resultsContainer.append(resultDiv);
        });
      } 
    })
    .catch(error => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Error! Character does not exist!'
      resultsContainer.innerHTML = ''
      resultsContainer.appendChild(errorMessage)
    });
});


