document.getElementById('registroEvento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const archivo = document.getElementById('archivo').files[0];

  // Validaciones adicionales
  if (nombre.length < 5) {
    alert('⚠️ El nombre debe tener al menos 5 caracteres.');
    return;
  }

  const telefonoRegex = /^[0-9]{10}$/;
  if (!telefonoRegex.test(telefono)) {
    alert('⚠️ El teléfono debe tener exactamente 10 dígitos numéricos.');
    return;
  }

  const fechaSeleccionada = new Date(fecha);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  if (fechaSeleccionada < hoy) {
    alert('⚠️ La fecha del evento no puede ser anterior al día de hoy.');
    return;
  }

  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
    alert('⚠️ Por favor, completa todos los campos obligatorios.');
    return;
  }

  // Éxito
  alert('✅ Registro exitoso. ¡Gracias por registrarte!');
});
