///Obtener las referencias a los elementos del DOM

 const boton = document.getElementById('btn-cargar');
 const contenedorResultado = document.getElementById('resultado');

 //2. Agregar un evento al boton

 boton.addEventListener('click',obtenerDatosConAxios);
 function obtenerDatosConAxios(){
    contenedorResultado.innerHTML='<p></p>';
    const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';


    //3. Realizar la peticion a la API con Axios
    axios.get(URL)
    .then(response =>{
        mostrarDatos(response.data);
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