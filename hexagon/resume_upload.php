<?php
$server="localhost";
$username="root";
$password="";
$database="hex";
$con=mysqli_connect($server,$username,$password);
$db=mysqli_select_db($con,$database);


$sourcePath = $_FILES['user-resume']['tmp_name'];      
$targetPath = "./upload/".$_FILES['user-resume']['name']; 
move_uploaded_file($sourcePath,$targetPath) ; 

?>