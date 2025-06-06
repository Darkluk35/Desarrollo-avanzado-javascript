/*Callbacks*/
//Un callback es una funcion que se pasa como argumento a otra funcion y se
//espera que ña funcion contenedora ejecuta el callback en algun momento.

//Ejemplo de 2 funciones a usar en un callback
function miCallbackDeExito(resultado){
    console.log(`Operacion exitosa Resultado ${resultado}`);
}

function miCallbackDeError(mensajeError){
    console.log(`Error Mensaje: ${mensajeError}`);
}

function procesarDatos(dato,callbackExito,callbackError){
    console.log(`Procesando dato: ${dato}`);
    if(dato !== null && dato !== undefined && dato !== ''){
        setTimeout(() => {
            const datoProcesado = dato.toUpperCase();
            callbackExito(datoProcesado);
        }, 1000)
    }else{
        //Simulamos un error si el dato es invalido
        setTimeout(()=> {
            callbackError( "Error: El dato es invalido o no existe.");
        },500)
    }
}
//Ejercicio #1: Callback de exito
procesarDatos('Hola, mundo!',miCallbackDeExito,miCallbackDeError);

//Ejercicio #2: Callback de error
procesarDatos('',miCallbackDeExito,miCallbackDeError);