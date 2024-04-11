// Cargar los datos desde el archivo JSON local
fetch('datos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON.');
    }
    return response.json();
  })
  .then(data => {
    // Guardar el array en el localStorage
    localStorage.setItem('informacion', JSON.stringify(data));
  })
  .catch(error => {
    console.error('Error:', error);
  });