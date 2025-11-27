var archivos = [];
var usuarios = [];
var localStorage = window.localStorage;
var indiceArchivoSeleccionado = null;

/*La sección comerciial se va a mostra siempre que se de click al logo o al nombre de la página en la esquina superior.*/
const mostrarSeccionComercial = () => {
    console.log("Mostrar seccion comercial");
    document.getElementById("seccion-principal").style.display = "none";
    document.getElementById("seccion-inicio-sesion").style.display = "none";
    document.getElementById("seccion-crear-cuenta").style.display = "none";
    document.getElementById("seccion-planes").style.display = "none";
    document.getElementById("seccion-comercial").style.display = "block";
}

/*La sección principal se va a mostrar después de iniciar sesión.*/
const mostrarSeccionPrincipal = () => {
    console.log("Mostrar seccion principal");
    document.getElementById("seccion-comercial").style.display = "none";
    document.getElementById("seccion-inicio-sesion").style.display = "none";
    document.getElementById("seccion-crear-cuenta").style.display = "none";
    document.getElementById("seccion-planes").style.display = "none";
    document.getElementById("seccion-principal").style.display = "block";
}

/*La sección Inicio sesión se muestra al presionar el botón con su nombre y en el botón de comenzar a programar también.*/
const mostrarSeccionInicioSesion = () => {
    console.log("Mostrar seccion inicio de sesión");
    document.getElementById("seccion-principal").style.display = "none";
    document.getElementById("seccion-comercial").style.display = "none";
    document.getElementById("seccion-crear-cuenta").style.display = "none";
    document.getElementById("seccion-planes").style.display = "none";
    document.getElementById("seccion-inicio-sesion").style.display = "block";
}


/*La sección crear cuenta se muestra al apretar su botón y en la sección inicio sesión donde dice Registrarse.*/
const mostrarSeccionCrearCuenta = () => {
    console.log("Mostrar seccion creación de cuenta");
    document.getElementById("seccion-principal").style.display = "none";
    document.getElementById("seccion-inicio-sesion").style.display = "none";
    document.getElementById("seccion-comercial").style.display = "none";
    document.getElementById("seccion-planes").style.display = "none";
    document.getElementById("seccion-crear-cuenta").style.display = "block";
}


/*La sección planes se muestra después de crear una cuenta o al hacer click en planes en la página principal.*/
const mostrarSeccionPlanes = () => {
    console.log("Mostrar seccion planes");
    document.getElementById("seccion-principal").style.display = "none";
    document.getElementById("seccion-inicio-sesion").style.display = "none";
    document.getElementById("seccion-crear-cuenta").style.display = "none";
    document.getElementById("seccion-comercial").style.display = "none";
    document.getElementById("seccion-planes").style.display = "block";
}


// Función para cargar países desde JSON
function cargarPaises() {
  fetch('assets/js/paises.json')  // Ajusta la ruta si el archivo está en otro lugar
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo paises.json');
      }
      return response.json();
    })
    .then(data => {
      const select = document.getElementById('codigo-pais');
      data.forEach(pais => {
        const option = document.createElement('option');
        option.value = pais.code;
        option.textContent = `${pais.flag} ${pais.name} (${pais.code})`;
        select.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error cargando países:', error);
      // Opcional: Muestra un mensaje al usuario
      alert('Error al cargar la lista de países. Intenta recargar la página.');
    });
}

// Llama la función cuando la página cargue
window.addEventListener('load', cargarPaises);

const btnUser = document.getElementById("btn-user");
const menuUser = document.getElementById("user-dropdown");

btnUser.addEventListener("click", () => {
    menuUser.style.display = (menuUser.style.display === "block") ? "none" : "block";
});

// Si le da afuera, se cierra
document.addEventListener("click", (e) => {
    if (!btnUser.contains(e.target) && !menuUser.contains(e.target)) {
        menuUser.style.display = "none";
    }
});




console.log('ARCHIVOS: ', localStorage.getItem('archivos'));
if (localStorage.getItem('archivos') == null) {
    localStorage.setItem('archivos', JSON.stringify(archivos)); 
} else {
    archivos = JSON.parse(localStorage.getItem('archivos'));
}
 

function generarArchivos() {
  document.getElementById('archivos').innerHTML = '';
  archivos.forEach(function(archivo, i){

      document.getElementById('archivos').innerHTML +=
      `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
          <div class="card">
            <img src="assets/img/lenguajes.jpg" class="card-img-top app-img" onclick="editarArchivo(${i})">
            
            <div class="card-body">
                <h5 class="card-title">${archivo.nombreArchivo}</h5>
                <div>
                    <button class="btn btn-outline-danger btn-sm" style="float:right" onclick="eliminar(${i})"><i class="fa-solid fa-trash"></i></button> 
                </div>
            </div>
        </div>
            </div>`;
  });
    
}

generarArchivos();

function validarCampoVacio(id){
    let campo = document.getElementById(id);

    if (campo.value == '') {
        campo.classList.remove('input-success');
        campo.classList.add('input-error');
    } else{
        campo.classList.remove('input-error');
        campo.classList.add('input-success');
    }
}

function guardar() {
    const archivo = {
    nombreArchivo: document.getElementById('nombre-archivo').value

    };

    console.log(archivo);
    archivos.push(archivo);
    localStorage.setItem('archivos', JSON.stringify(archivos));
    console.log(archivos);
    generarArchivos();
    $('#modalNuevoArchivo').modal('hide');
}

function eliminar(indice) {
    console.log('Eliminar archivo con el indice', indice);
    archivos.splice(indice, 1); 
    generarArchivos();
    localStorage.setItem('archivos', JSON.stringify(archivos));
}

function editarArchivo(indice) {
    console.log('Editar', indice);
    indiceArchivoSeleccionado = indice;
    $('#modalNuevoArchivo').modal('show');
    let archivo = archivos[indice];
    document.getElementById('nombre-archivo').value = archivo.nombreArchivo;

    document.getElementById('btn-guardar').style.display = 'none';
    document.getElementById('btn-actualizar').style.display = 'block';
}

function actualizar() {
    console.log('Se actualizara el archivo con indice', indiceArchivoSeleccionado);
    archivos[indiceArchivoSeleccionado] = {
        nombreArchivo: document.getElementById('nombre-archivo').value,

    };
    localStorage.setItem('archivos', JSON.stringify(archivos));
    generarArchivos();
    $('#modalNuevoArchivo').modal('hide');
}

function nuevoArchivo() {
    indiceArchivoSeleccionado = null;
    document.getElementById('nombre-archivo').value = null;

    document.getElementById('btn-guardar').style.display = 'block';
    document.getElementById('btn-actualizar').style.display = 'none';

} 

