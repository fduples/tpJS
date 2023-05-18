//Guardo en constantes los nodos que voy a utilizar
const selectCategoria = document.querySelector('#categoria');
const montoPagar = document.querySelector('#monto');
const cantidad = document.querySelector('#cantidad');
const boton = document.querySelector('#botonB');
const correo = document.querySelector('#correo');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const mensaje = document.querySelector('#mensaje');


// Seleccionar el botón de Resumen
const botonResumen = document.getElementById('botonR');

//Establezco el valor por defecto del monto a pagar.
montoPagar.textContent = 200;

//Eventlistener de cambio de cantidad de tickets
cantidad.addEventListener('change', () => {
  montoPagar.textContent = calculo();
});

//Eventlistener de cambio de categoría
selectCategoria.addEventListener('change', () => {
    montoPagar.textContent = calculo();
});

//Eventlistener para limpiar lo cargado en el formulario
boton.addEventListener('click', limpiar);

correo.addEventListener('keyup', function () {
  validarCorreo();
  verificarCamposCompletos();
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

//Funcion de calculo de monto a pagar
function calculo() {
  let descuento = descuentoCategoria();
  let montoFinal = 200 * cantidad.value * descuento;
  return montoFinal.toFixed(2);
}

//Funcion para borrar los datos del formulario
function limpiar() {
    selectCategoria.value = 0; 
    nombre.value= "";
    apellido.value= "";
    correo.value= "";
    cantidad.value = 1;
    montoPagar.textContent = 200;
    mensaje.className = "";
    mensaje.textContent = "";
    botonResumen.disabled = true;
}

//Calcula el descuento a realizar según la categoria seleccionada
function descuentoCategoria() {
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

//Funcion para cargar los datos al modal desde el formulario
function traerDatos() { 

  // Obtenemos los valores de los inputs por su id
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;


  //verifico que no haya datos vacíos y con un prompt los completamos.
  
  nombre = (nombre === "") ? prompt("Debe Ingresar su nombre:", "Sin Dato") : nombre;

  apellido = (apellido === "") ? prompt("Debe Ingresar su Apellido:", "Sin Dato") : apellido;
  
  let correoM = (correo.value === "") ? prompt("Debe Ingresar el correo electrónico del que quiere hablar:", "Sin Dato"): correo.value;
  
  categoria = (selectCategoria.value === "3") ? "Junior" : (selectCategoria.value === "1") ? "Estudiante" : (selectCategoria.value === "2") ? "Trainee" : "Sin Categoría";

// guardo la información obtenida del form
  document.getElementById('nombreModal').innerHTML = nombre;
  document.getElementById('apellidoModal').innerHTML = apellido;
  document.getElementById('correoModal').innerHTML = correoM;
  document.getElementById('cantidadModal').innerHTML = cantidad.value;
  document.getElementById('categoriaModal').innerHTML = categoria;
  document.getElementById('montoModal').innerHTML = calculo();
}

//Valida que tenga completos todos los campos el formulario
function validarCorreo() {
  var correoRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\w{2,3})+$/;

  if (!correoRegExp.test(correo.value)) {
    mensaje.className = "alert alert-danger"
    mensaje.innerHTML = "Correo inválido";
    return false;
  }
  mensaje.className = "alert alert-success"
  mensaje.innerHTML = "Correo válido";
  return true;
}



// Función para verificar si todos los campos obligatorios están completos
function verificarCamposCompletos() {
  if (nombre.value !== '' && apellido.value !== '' && correo.value !== '') {
    botonResumen.disabled = false;
  } else {
    botonResumen.disabled = true;
  }
}

// Deshabilitar el botón de Resumen si no están completos todos los campos obligatorios
/*
nombreInput.addEventListener('keyup', function () {
  if (!verificarCamposCompletos()) {
    botonResumen.disabled = true;
  } else {
    botonResumen.disabled = false;
  }
});

apellidoInput.addEventListener('keyup', function () {
  if (!verificarCamposCompletos()) {
    botonResumen.disabled = true;
  } else {
    botonResumen.disabled = false;
  }
});

correoInput.addEventListener('keyup', function () {
  if (!verificarCamposCompletos()) {
    botonResumen.disabled = true;
  } else {
    botonResumen.disabled = false;
  }
});*/

