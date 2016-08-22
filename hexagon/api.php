<?php
require_once("connect.php");
session_start();
$phone= $_POST['phone'];
$curl = curl_init();

$phone1=substr($phone,3);
$sql="select * from careers where contact='$phone1'";
$result=mysqli_query($con,$sql);
$query=mysqli_fetch_array($result);
$job_id=$query['job_id'];
	

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.ringcaptcha.com/e5b951643259dc58c5600e12c5bcb23115de2eeb/code/SMS",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "app_key=6i2o6ijy2ukufo5agylu&api_key=e5b951643259dc58c5600e12c5bcb23115de2eeb&phone=".$phone."&service=SMS",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded",
    "postman-token: 9a8d2540-0bd6-3dc8-d70f-8f2a22256c8b"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
	//echo $response;
	$result = json_decode($response, true);
    $token=$result["token"];
  
   echo ("<script language='JavaScript'>
         window.location.href='verify_pin.php?q_id=$token&&phone=$phone&&cid=$job_id';         
       </script>");
}
