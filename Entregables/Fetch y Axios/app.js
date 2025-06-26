const fetchBtn = document.getElementById('fetch-btn');
const axiosBtn = document.getElementById('axios-btn');
const dataContainer = document.getElementById('data-container');

// Función para renderizar personajes
function renderCharacters(characters) {
  dataContainer.innerHTML = ''; // Limpiar antes de mostrar
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
      <p>Status: ${character.status}</p>
      <p>Especie: ${character.species}</p>
    `;
    dataContainer.appendChild(characterElement);
  });
}

// FETCH
fetchBtn.addEventListener('click', () => {
  dataContainer.innerHTML = 'Cargando personajes con Fetch...';
  fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
      renderCharacters(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = '❌ Error al obtener datos con Fetch.';
    });
});

// AXIOS
axiosBtn.addEventListener('click', () => {
  dataContainer.innerHTML = 'Cargando personajes con Axios...';
  axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      renderCharacters(response.data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = '❌ Error al obtener datos con Axios.';
    });
});
