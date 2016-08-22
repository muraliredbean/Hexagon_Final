<?php
$server="localhost";
$username="root";
$password="";
$database="hex";
$con=mysqli_connect($server,$username,$password);
$db=mysqli_select_db($con,$database);
?>