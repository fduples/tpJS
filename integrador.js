//Intento de event listener para el modal de compra
const selectCategoria = document.querySelector('#categoria');
const montoPagar = document.querySelector('#monto');
const cantidad = document.querySelector('#cantidad');
const boton = document.querySelector('#botonB');

montoPagar.textContent = 200;


cantidad.addEventListener('change', () => {
  let descuento = catego();
  let montoFinal = 200 * cantidad.value * descuento;
  montoPagar.textContent = montoFinal.toFixed(2);
});

selectCategoria.addEventListener('change', () => {
  let descuento = catego();
  let montoFinal = 200 * cantidad.value * descuento;
  montoPagar.textContent = montoFinal.toFixed(2);
});

boton.addEventListener('click', () => {
  if (boton.innerHTML === 'Borrar') {
    limpiar();
  }
});


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
    selectCategoria.value = 0; 
    document.getElementById('nombre').value= "";
    document.getElementById('apellido').value= "";
    document.getElementById('correo').value= "";
    cantidad.value = 1;
    montoPagar.textContent = 200;
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

function catego() {
  const categoriaSeleccionada = selectCategoria.value;
  let descuento = 1;
  if (categoriaSeleccionada === '1') {
    descuento = 0.8;
  } else if (categoriaSeleccionada === '2') {
    descuento = 0.5;
  } else if (categoriaSeleccionada === '3') {
    descuento = 0.15;
  }
  return descuento;
}