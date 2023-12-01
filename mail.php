<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Test message from form";
$to = "kmisiejuk@op.pl";
$message = $_POST["msg"];

$txt = "name:". $name . "\r\n" . "email" . $from . "\r\n" . "\r\n" . "Content" = $message;

$headers = "From:" .$from . "\r\n";
$headers = ."Reply-to : " .$from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status){
    header("Location: /index.html?mail_status=sent");
} else{
    header("Location: /index.html?mail_status=error");
}