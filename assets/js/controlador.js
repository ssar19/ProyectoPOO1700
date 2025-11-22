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