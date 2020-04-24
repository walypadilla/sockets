var socket = io();

socket.on('connect', function () {

    console.log('Conectado al servidor');

});

// escuchar informacion
socket.on('disconnect', function () {

    console.log('Perdimos conexion con el servidor');
});

// eviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Walter',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function (mensaje) {

    console.log('Servidor:', mensaje);

});
