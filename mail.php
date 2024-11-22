<?php

$fullname = isset($_POST['fullname']) ? $_POST['fullname'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$number = isset($_POST['number']) ? $_POST['number'] : '';
$appointment = isset($_POST['appointment']) ? $_POST['appointment'] : '';
$date = isset($_POST['date']) ? $_POST['date'] : '';


$to = "nitin.k.chavan10001@gmail.com";
$subject = "New Appointment Request";
$message = "
<html>
<head>
    <title>Appointment Request</title>
</head>
<body>
    <h2>New Appointment Request</h2>
    <p><strong>Full Name:</strong> $fullname</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Phone Number:</strong> $number</p>
    <p><strong>Appointment:</strong> $appointment</p>
    <p><strong>Date:</strong> $date</p>
</body>
</html>
";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";


$headers .= "From: $email" . "\r\n"; 


if (mail($to, $subject, $message, $headers)) {
    echo "Your appointment request has been sent successfully!";
} else {
    echo "There was an error sending your request.";
}

?>
