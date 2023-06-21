<?php
// Recoger los datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['message'];

// Configurar el correo electrónico
$destinatario = 'levita.ariel@gmail.com';
$asunto = 'Nuevo mensaje de contacto';
$cuerpoMensaje = "Nombre: $nombre\n";
$cuerpoMensaje .= "Correo electrónico: $email\n";
$cuerpoMensaje .= "Mensaje: $mensaje\n";
$cabeceras = "From: $email\r\nReply-To: $email\r\n";

// Enviar el correo electrónico
if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
    echo 'Mensaje enviado correctamente';
} else {
    echo 'Error al enviar el mensaje';
}
?>