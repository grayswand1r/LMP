<?php
header("Location: /");

$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$subject = $_POST['subject'];
$message = $_POST['message'];



// Database connection
include_once('connect.php');
if(!$link) {
die('Problem in database connection: ' . mysql_error());
}


$sql = "INSERT INTO `contact_form` (`name`, `email`, `mobile`, `subject`, `message`)
VALUES
('".$name."', '".$email."', '".$mobile."', '".$subject."', '".$message."');";

if (!mysqli_query($link,$sql))
  {
  echo("Error description: " . mysqli_error($link));
  }
?>