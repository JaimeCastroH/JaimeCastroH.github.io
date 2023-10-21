<?php
    
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    $destinatario = "jaimeduardo.castroo@gmail.com";
    $asunto = "email de web";

    $carta = "De: $nombre \n";
    $carta .="Correo: $correo \n";
    $carta .="Telefono: $telefono \n";
    $carta .="Mensaje: $mensaje";

    mail($destinatario, $asunto, $carta);
    header('location:gracias.html')
    
?>