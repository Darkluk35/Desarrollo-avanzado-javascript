// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos
function leerDatos(callback) {
    setTimeout(() => {
        callback(biblioteca);
    }, 1000);
}

// Función para simular la escritura de datos
function escribirDatos(nuevosDatos, callback) {
    setTimeout(() => {
        biblioteca = nuevosDatos;
        callback(); // opcional, solo si quieres hacer algo después
    }, 1000);
}

// Función para mostrar todos los libros
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("📚 Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        console.log("\n");
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    leerDatos((datos) => {
        const nuevoLibro = { titulo, autor, genero, disponible };
        datos.libros.push(nuevoLibro);
        escribirDatos(datos, () => {
            console.log(`✅ Libro "${titulo}" agregado correctamente.`);
        });
    });
}

// Función para actualizar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    leerDatos((datos) => {
        const libro = datos.libros.find(libro => libro.titulo === titulo);
        if (libro) {
            libro.disponible = nuevoEstado;
            escribirDatos(datos, () => {
                console.log(`📌 Estado de "${titulo}" actualizado a: ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
            });
        } else {
            console.log(`❌ Libro "${titulo}" no encontrado.`);
        }
    });
}

// --- Ejecución de la aplicación ---
mostrarLibros();

setTimeout(() => {
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
}, 1500);

setTimeout(() => {
    actualizarDisponibilidad("1984", false);
}, 3000);

setTimeout(() => {
    mostrarLibros(); // Mostrar el inventario actualizado
}, 5000);
