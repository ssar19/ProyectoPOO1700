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