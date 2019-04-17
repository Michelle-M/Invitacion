/*Hacer un formulario de invitación a un evento. 

Validarlo en el submit 

Nombre —> no puede estar vacío
Edad ——> debe ser entre 18 y 120 
Seleccionar estado civil —> no puede estar vacío 
Seleccionar nacionalidad (select, desplegado de opciones) —> no puede estar vacío 


Una vez enviados los datos, 
en lugar de enviarse a otra web
Se imprimen abajo, como una 
lista de confirmación de asistencia


Invitado {indice} 
Nombre: {nombre}
Edad: {edad}
Estado civil {estado}
Nacionalidad {nacionalidad}
Boton "Eliminar invitado"
(Si le hacemos clic, se borra todo)*/

var formulario = document.querySelector("form");

formulario.onsubmit = function(e) {
  // evitamos que el form se mande 
  e.preventDefault();
  // selecciono los elementos del formulario 
  var nombre_form = formulario.elements[0]
  var edad_form = formulario.elements[1]
  var soltero_form = formulario.elements[2]
  var casado_form = formulario.elements[3]
  var nacionalidad_form = formulario.elements[4]
  // asigno el valor de nombre y edad a variables 
  var nombre = nombre_form.value
  var edad = edad_form.value
  // Creamos una variable "estado" y le asignamos el valor del checkbox que este seleccionado. 
  // Ejemplo, si "soltero" esta seleccionado, "estado" va a ser "soltero"
  var estado = ''
  if (soltero_form.checked) {
    estado = soltero_form.value
  }
  else if (casado_form.checked) {
    estado = casado_form.value
  }
  else estado = 'vacio'
  // seleccionamos el select
  // Sacamos el indice de la opcion seleccionada
  // Usando ese indice, buscamos la opcion elegida
  // Asignamos la opcion elegida a la variable "nacionalidad"
  var i = nacionalidad_form.selectedIndex
  var nacionalidad = nacionalidad_form.options[i].value
  // console.log para chequear que nuestros datos esten bien 
  console.log(nombre, edad)
  console.log(estado)
  console.log(nacionalidad)
  // Ahora validamos, marcando como error en el form: 
  // Nombre no tiene que estar vacio
  if (nombre.length === 0) {
    nombre_form.classList.add("error")
  }
  // version alternativa (mas linda)
  // if (!nombre) {
  //   nombre_form.classList.add("error")
  // }
  // edad debe ser mayor a 18 y menor a 120
  if (edad < 18 || edad > 120) {
    edad_form.classList.add("error")
  }
  
  if (estado === 'vacio') {
    soltero_form.nextElementSibling.classList.add("error") 
    casado_form.nextElementSibling.classList.add("error") 
  }
  // nacionalidades se "autovalidan", 
  // porque ya sabemos que estan seleccionadas. 
  if (nombre.length > 0 && (edad > 18 && edad < 120) && estado !== 'vacio') {
  agregarInvitado(nombre, edad, estado, nacionalidad)
  }
}

function agregarInvitado(nombre, edad, estado, nacionalidad) {
  
  if ( estado === 'single') {
    estado = 'Disponible';
  } else if ( estado === 'taken' ) {
    estado = 'No disponible';
  }
  
  if ( nacionalidad === 'arg' ) {
    nacionalidad = 'Argentinx';
  } else if ( nacionalidad === 'peru' ) {
    nacionalidad = 'Peruanx'
  } else if ( nacionalidad === 'vnlz' ) {
    nacionalidad = 'Venezonalx'
  }

  var ul = document.getElementById("lista-de-invitados");
  //console.log(ul)
  var lista = document.createElement('div');
  
  lista.classList.add('lista-confirmacion');
  
  var nuevoArray = [nombre, edad, estado, nacionalidad];
  var arrayDesc = ['• Nombre: ', '• Edad: ', '• Estado: ', '• Nacionalidad: ']
  
  for ( var i = 0; i < nuevoArray.length; i++ ) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    span.textContent = arrayDesc[i];
    span.classList.add('categoria')
    var input = document.createElement('input');
    input.value = nuevoArray[i];
    input.classList.add('input-editable');
    div.appendChild(span);
    div.appendChild(input);
    lista.appendChild(div);
  }

  //Si descomento no me aparecen espaciados
  //lista.textContent = 'Nombre: ' + nombre + 'Edad: ' + edad + 'Preferencia: ' + estado + 'Nacionalidad: ' + nacionalidad

  //NO EDITABLE

  /*var nombreRes = document.createElement('p');
  nombreRes.textContent = '• Nombre: ' + nombre;
  nombreRes.classList.add('p');

  lista.appendChild(nombreRes);

  var edadRes = document.createElement('p');
  edadRes.textContent = '• Edad: ' + edad;

  lista.appendChild(edadRes);

  var nacionalidadRes = document.createElement('p');
  nacionalidadRes.textContent = '• Nacionalidad: ' + nacionalidad;

  lista.appendChild(nacionalidadRes);

  var estadoRes = document.createElement('p');
  estadoRes.textContent = '• Estado: ' + estado;

  lista.appendChild(estadoRes)*/

  //EDITABLE CON INPUT

  /*var nombreInput = document.createElement('input');
  nombreInput.value = '• Nombre: ' + nombre;
  nombreInput.classList.add('input-editable');
  lista.appendChild(nombreInput)

  var edadInput = document.createElement('input');
  edadInput.value = '• Edad: ' + edad;
  edadInput.classList.add('input-editable');
  lista.appendChild(edadInput);

  var estadoInput = document.createElement('input');
  estadoInput.value = '• Estado: ' + estado;
  estadoInput.classList.add('input-editable');
  lista.appendChild(estadoInput);

  var nacionalidadInput = document.createElement('input');
  nacionalidadInput.value = '• Nacionalidad: ' + nacionalidad;
  nacionalidadInput.classList.add('input-editable');
  lista.appendChild(nacionalidadInput);*/
  
  ul.appendChild(lista);
  
  var botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar invitadx';
  botonEliminar.classList.add('boton-eliminar');
  lista.appendChild(botonEliminar);

  botonEliminar.onclick = function() {
    botonEliminar.parentNode.remove()
  }
  
}




