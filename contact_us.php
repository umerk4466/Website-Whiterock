<?php

 if($_SERVER["REQUEST_METHOD"] == "POST") {
     
    $name = "Undefined";
    $email = "Undefined";
    $email_title = "Email From Whiterock Website";
    $recipient = "emailTo@gmail.com";
    $message = "Undefined";

    // validate name
    if(isset($_POST['name'])) {
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
    // validate email
    if(isset($_POST['email'])) {
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    }
    // validate message
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }
    // email header
    $headers  = "From: " . $email . "\r\n";
    // mail function if success print 1 else 0
    if(mail($recipient, $email_title, $message, $headers)) {
        echo 1;
    } else {
        echo 0;
    }
        
} else {
    // on other error post(get) print 0
    echo 0;
}
?>