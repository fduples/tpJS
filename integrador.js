//Intento de event listener para el modal de compra
const selectCategoria = document.querySelector('#categoria');
const montoPagar = document.querySelector('#monto');
const cantidad = document.querySelector('#cantidad');



cantidad.addEventListener('change', () => {

} )

selectCategoria.addEventListener('change', () => {
  const categoriaSeleccionada = selectCategoria.value;
  let descuento = 1;
  if (categoriaSeleccionada === '1') {
    descuento = 0.8;
  } else if (categoriaSeleccionada === '2') {
    descuento = 0.5;
  } else if (categoriaSeleccionada === '3') {
    descuento = 0.15;
  }
  const montoFinal = 200 * cantidad.value * descuento;
  montoPagar.textContent = montoFinal.toFixed(2);
});


orador.addEventListener('change', () => {
    let oradorSeleccionado = orador.value;
    if (oradorSeleccionado === "opcion1") {
      precioOrador.innerHTML = '$'+precioJobs;
      precio = precioJobs
    } else if (oradorSeleccionado === "opcion2") {
      precioOrador.innerHTML = '$'+precioGates;
      precio = precioGates;
    } else if (oradorSeleccionado === "opcion3") {
      precioOrador.innerHTML = '$'+precioAda;
      precio = precioAda;
    } else {
      precioOrador.innerHTML = 'Elija un orador';
      precio = 0;
    }
    //modifico el monto total cuando se cambia la seleccion de orador.
    let cant = cantidad.value;
    total.value = cant * precio;
});

//Este evento hace que se modifique el monto total cuano cambio la cantidad de entradas 
cantidad.addEventListener('change', () => {
  let cant = cantidad.value;
  total.value = cant * precio;
})


// Código de bootstrap para el modal //
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}


function traerDatos() {
    // Obtenemos los valores de los inputs por su id
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var tema = document.getElementById('tema').value;

    //verifico que no haya datos vacíos y con un prompt los completamos.
    
    nombre = (nombre === "") ? prompt("Debe Ingresar su nombre:", "Sin Dato") : nombre;

    apellido = (apellido === "") ? prompt("Debe Ingresar su Apellido:", "Sin Dato") : apellido;
    
    tema = (tema === "") ? prompt("Debe Ingresar el tema del que quiere hablar:", "Sin Dato"): tema;

  // guardo la información obtenida del form
    document.getElementById('nombreModal').innerHTML = nombre;
    document.getElementById('apellidoModal').innerHTML = apellido;
    document.getElementById('temaModal').innerHTML = tema;
}

function limpiar() {
  //obtengo la información del modal y la guardo en respectivas variables
    var nombre = document.getElementById('nombreModal').innerHTML;
    var apellido = document.getElementById('apellidoModal').innerHTML;
    var tema = document.getElementById('temaModal').innerHTML;
    //Compruebo que no haya ni datos vacíos ni canpos con valor "sin dato".
    if ((nombre === "Sin Dato" || nombre === "") || (apellido === "Sin Dato" || apellido === "")|| (tema === "Sin Dato" || tema === "")) {
        alert('Hay información sin completar. Complete el formulario y vuelva a enviarlo.');
        return false;
    }
    //borro los datos del formulario para que se pueda cargar otro
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('tema').value = '';
    alert('El formulario ha sido enviado');
}


function limpiarCompra() {
  orador.value = 'opcion0';
  document.getElementById('nombreCompra').value = '';
  document.getElementById('apellidoCompra').value = '';
  document.getElementById('dia').value = '';
  cantidad.value = 0;
  total.value = 0;
  precioOrador.innerHTML = 'Seleccione un orador';
}

