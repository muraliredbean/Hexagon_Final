<?php
session_start();
 if(isset($_GET['q_id']) && isset($_GET['pin']) && isset($_GET['phone']))
	{
		$qid=$_GET['q_id'];
		$pin=$_GET['pin'];
		$phone=$_GET['phone'];
	
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.ringcaptcha.com/e5b951643259dc58c5600e12c5bcb23115de2eeb/verify",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "app_key=6i2o6ijy2ukufo5agylu&api_key=e5b951643259dc58c5600e12c5bcb23115de2eeb&phone=".$phone."&code=".$pin."&token=".$qid."",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded",
    "postman-token: 0a730658-c66f-f9dc-3435-e46313ae6577"
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
    $status=$result["status"];
	if($status == "SUCCESS")
	{
   echo ("<script language='JavaScript'>
         window.location.href='application_update.php?q_id=$status&&qid=$qid&&phone_no=$phone';
         
       </script>");
	}
	else {
		echo ("<script language='JavaScript'>
         window.location.href='verify_pin.php?cid=64467852&&q_id=$qid&&phone=$phone';
         
       </script>");
	}
	}
	}