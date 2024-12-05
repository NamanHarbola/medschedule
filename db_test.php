<?php
$host = "localhost";
$username = "root";
$password = ""; // Default is empty
$dbname = "medschedule";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Database connected successfully!";
?>
