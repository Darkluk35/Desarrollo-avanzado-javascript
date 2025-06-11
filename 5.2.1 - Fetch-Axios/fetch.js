///Obtener las referencias a los elementos del DOM

 const boton = document.getElementById('btn-cargar');
 const contenedorResultado = document.getElementById('resultado');

 //2. Agregar un evento al boton

 boton.addEventListener('click',obtenerDatosConFetch);
 function obtenerDatosConFetch(){
    contenedorResultado.innerHTML='<p></p>';
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

    fetch(URL)
    .then(response => {
        if(!response.ok){
            throw new Error(`Error en la peticion ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data =>{
        mostrarDatos(data);
    })
    .catch(error=>{
        console.error(`Error al obtener los datos: `, error.message);
        contenedorResultado.innerHTML = `<p style="color: red;>Error al cargar los datos: ${error.message}</p>`;
        
    })
 }

function mostrarDatos(datos) {
  contenedorResultado.innerHTML = ''; // Limpiar el contenedor
  datos.forEach(post => {
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    contenedorResultado.appendChild(postElement);
  })
}