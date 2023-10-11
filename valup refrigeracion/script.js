const btnContacto = document.getElementById('btn-contacto');
const formularioOverlay = document.getElementById('formulario-overlay');
const cerrarFormulario = document.getElementById('cerrar-formulario');

btnContacto.addEventListener('click', () => {
  formularioOverlay.style.display = 'flex';
});

cerrarFormulario.addEventListener('click', () => {
  formularioOverlay.style.display = 'none';
});
