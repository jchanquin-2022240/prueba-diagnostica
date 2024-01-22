function enviarDatos() {
    const nombre = document.getElementById('nombre').value;

    enviarDatosAlServidor(nombre)
        .then(mostrarMensajeBienvenida)
        .catch(mostrarMensajeError)
}

function enviarDatosAlServidor(nombre) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const autorizado = (nombre.toLowerCase() == 'papavictor');
            if(autorizado) {
                resolve('Bienvenido al sistema!!!');
            } else {
                reject('Usted no está autorizado!!!');
            }
        }, 2000);
    });
}