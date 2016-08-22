<?php
require_once("connect.php");
include ('library.php'); // include the library file
include ("classes/class.phpmailer.php"); // include the class name
require 'PHPMailer/PHPMailerAutoload.php';
if($_POST['job_id'])
{
	$fname= $_POST['fname'];
	$lname= $_POST['lname'];
	$city= $_POST['city'];
	$email= $_POST['email'];
	$contact= $_POST['contact'];
	$dob1= $_POST['dob1'];
	$dob2= $_POST['dob2'];
	$dob3= $_POST['dob3'];
	$exp1= $_POST['exp1'];
	$exp2= $_POST['exp2'];
	$ctc1= $_POST['ctc1'];
	$ctc2= $_POST['ctc2'];
	$notice= $_POST['notice'];
	$job_id= $_POST['job_id'];
	$resume= $_POST['resume'];
	$id= $_POST['id'];
	
	$dob=$dob3."-".$dob1."-".$dob2;
	
	$sql="update careers set fname='$fname',lname='$lname',city='$city',email='$email',contact='$contact',dob='$dob',overall_exp='$exp1',relevant_exp='$exp2',current_ctc='$ctc1',expected_ctc='$ctc2',notice_period='$notice',resume='$resume' where id='$id'";
	mysqli_query($con,$sql);
}
?>