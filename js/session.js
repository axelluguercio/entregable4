// Verificar si el usuario está autenticado (ejemplo con una variable booleana)
const isAuthenticated = true; 

// Obtener la referencia a la sección restringida
const restrictedArea = document.getElementById('restricted-area');

// Mostrar u ocultar la sección dependiendo del estado de autenticación
if (isAuthenticated) {
  restrictedArea.style.display = 'block'; // Mostrar la sección
} else {
  restrictedArea.style.display = 'none'; // Ocultar la sección
}