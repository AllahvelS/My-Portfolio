
window.onload = () => {
fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(data => {
    const characterList = document.querySelector('#character-list');

    data.results.forEach(character => {
      const li = document.createElement('li');
      const img = document.createElement('img');
      const name = document.createElement('h2');
      const link = document.createElement('a')

      img.src = character.image;
      name.textContent = character.name;
      link.textContent = 'View Details'
      link.href = `character.html?id=${character.id}`
      li.append(img);
      li.append(name);
      li.append(link)
      characterList.append(li);
    });
  })
  .catch(error => console.log(error));
}