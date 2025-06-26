let mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`✅ Hay disponibilidad para ${mesasSolicitadas} mesa(s).`);
      } else {
        reject(`❌ No hay suficientes mesas disponibles. Solo hay ${mesasDisponibles} mesa(s).`);
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.2; // 80% de éxito
      if (exito) {
        resolve(`📧 Correo enviado exitosamente a ${nombreCliente}.`);
      } else {
        reject(`🚫 Error al enviar el correo a ${nombreCliente}. Intenta nuevamente.`);
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("🔍 Verificando disponibilidad de mesas...");
    const mensajeDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(mensajeDisponibilidad);

    mesasDisponibles -= mesasSolicitadas; // Actualiza las mesas disponibles

    console.log("📨 Enviando correo de confirmación...");
    const mensajeCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(mensajeCorreo);

    console.log(`🎉 Reserva completada para ${nombreCliente}.\n`);
  } catch (error) {
    console.log("⚠️ Error:", error + "\n");
  }
}

// 🔄 Pruebas
hacerReserva("Juan Pérez", 3);   // Éxito probable
setTimeout(() => hacerReserva("Ana López", 2), 4000); // Debería quedar justo
setTimeout(() => hacerReserva("Carlos Ruiz", 1), 8000); // Debería fallar por falta de mesas
