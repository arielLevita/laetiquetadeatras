<?php

if (isset($POST['enviar'])) {
    if (!empty($_POST['name']) && !empty($_POST['message']) && !empty($_POST['email'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $msg = $_POST['message'];
        $header = "From: noreply@example.com" . "\r\n";
        $header.= "Reply-To: noreply@example.com" . "\r\n";
        $header.= "X-Mailer: PHP/". phpversion();
        $mail = @mail($email,$msg,$header);
        if ($mail) {
            echo "<h4>Mail enviado!</h4>"
        }
    }
}