function includeHTML(file, containerId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
      });
  }

function readButton(idSelector){
  
  // Obtener el botón
  const button = document.querySelector(idSelector);

  // Agregar un controlador de eventos para almacenar información al hacer clic en el botón
  button.addEventListener('click', () => {
    const id = 1;
    localStorage.setItem('clickedButtonId', id);
  });

}

