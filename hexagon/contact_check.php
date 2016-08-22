<?php
require_once("connect.php");
if(isset($_POST['contact']))
{
	$contact=$_POST['contact'];
	$sql="select * from careers where contact='$contact'";
	$query=mysqli_query($con,$sql);
	$result=mysqli_num_rows($query);
	if($result==1)
	{
		echo 1;
	}
	else{
		echo 0;
	}
	
}
?>