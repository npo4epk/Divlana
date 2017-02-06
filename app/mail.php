<?php

$recepient = "nekit-1989@mail.ru";
$sitename = "Divlana";

$email = trim($_POST["main-form__mail"]);
$subcject = trim($_POST["main-form__name"]);
$mes = trim($_POST["main-form__tel"]);
$tel = trim($_POST["main-form__message"]);




// $message = "From email: $email \nSubcject: $subcject \nMessage: $mes";
$message = "

Добрый день!
Письмо с сайта 'Divlana'

Имя: $subcject;
Email: $email;
Телефон: $tel;
Сообщение: $mes.

";

$pagetitle = "Message from the site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");