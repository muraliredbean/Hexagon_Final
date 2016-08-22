<?php
session_start();
require_once("connect.php");
include ('library.php'); // include the library file
include ("classes/class.phpmailer.php"); // include the class name
require 'PHPMailer/PHPMailerAutoload.php';

if(isset($_POST['form_details1']))
{
$firstname= $_POST['firstname'];
$lastname= $_POST['lastname'];
$subject= $_POST['subject'];
$email= $_POST['email'];
$contact_number= $_POST['contact_number'];
$organisation= $_POST['organisation'];
$message= $_POST['message'];
if(isset($_POST['Other']))
{	
$Other= $_POST['Other'];
$sql="insert into form_details1 values('','$firstname','$lastname','$subject','$email','$contact_number','$organisation','$message','$Other',now())";

echo $sql;
mysqli_query($con,$sql);	
}
else{
$sql="insert into form_details1  values('','$firstname','$lastname','$subject','$email','$contact_number','$organisation','$message','',now())";
echo $sql;
mysqli_query($con,$sql);	
}

							$mail	= new PHPMailer; // call the class 
							$mail->Mailer = "smtp";
							$mail->IsSMTP(); 
							$mail->SMTPDebug = 1;
							$mail->SMTPSecure = auto;
							$mail->Host = SMTP_HOST; //Hostname of the mail server
							$mail->Port = SMTP_PORT; //Port of the SMTP like to be 25, 80, 465 or 587
							$mail->SMTPAuth = true; //Whether to use SMTP authentication
							$mail->Username = SMTP_UNAME; //Username for SMTP authentication any valid email created in your domain
							$mail->Password = SMTP_PWORD; //Password for SMTP authentication
							$mail->IsHTML(true); // if you are going to send HTML formatted emails
							$mail->SingleTo = true; // if you want to send a same email to multiple users. multiple emails will be sent one-by-one.
							$mail->From = "test01@redbeaninc.com";
							$mail->FromName = "no-reply";
							$mail->addAddress('murali.m@redbeaninc.com');
							$mail->Subject = "Get In Touch";
							
							$mail->Body = '<html>
											<head>
											<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
											  <title>Job Application</title>
	<style type="text/css">
    @import url("http://fonts.googleapis.com/css?family=Open+Sans");
	@import url("http://fonts.googleapis.com/css?family=Titillium+Web:600,700");
	 @font-face{
        font-family:"Open Sans";
        font-style:normal;
		font-size:14px;
        src:local("Open Sans"),
            local("OpenSans"),
            url("http://fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3bO3LdcAZYWl9Si6vvxL-qU.woff") format("woff");
    }
	@font-face{
        font-family:"Titillium Web";
        font-style:normal;
        font-weight:600;
        src: local("Titillium WebSemiBold"), local("TitilliumWeb-SemiBold"),
            url("http://fonts.gstatic.com/s/titilliumweb/v4/anMUvcNT0H1YN4FII8wpr_SNRT0fZ5CX-AqRkMYgJJo.woff") format("woff");
    }
	
	.emailContent{
        font-family:"Open Sans", "Helvetica Neue", Helvetica, sans-serif;
    }
</style>
											</head>
											<body leftmargin="50">
											 <div style="text-align:center;background-color:#071C3A;height:229px;">
											  <img src="http://indiantestfactory.com/doodle/hexagon/img/email-logo-01.png" style="margin-top:75px;">
											  <font size="32" face="Titillium Web" color="#46A3E8"><center><span style=""><b>We ve recieved your appplication</b></span></center></font>
											   
											  </div>
											  <hr style="color:#D4D00E;height:8px;margin-top:-10px;">
											 <div style="text-align:left;">
											 <p><font face="Open Sans" color="#4D4D4D">Dear '.$fname.',</font></p>
											 <p><font face="Open Sans" color="#4D4D4D">Thank you for your interest in the position of '.$position.' based out of '.$state.'. Our team will review your application (jod id '.$job_id.')  and be in touch if your application is shortlisted for further review. </font></p>
										     <p><font face="Open Sans" color="#4D4D4D">To Update Profile Click on <a href="http://indiantestfactory.com/doodle/hexagon/phone_window.php?cid='.$job_id.'">Update Profile</a> </font></p>
											 <br>
											<p><font face="Open Sans" color="#4D4D4D">Good luck! </font></p>
											
											<br>
											<br>
											 <p><font face="Open Sans" color="#4D4D4D">Hexagon GLobal HR Team</font></p>
											 <p><font face="Open Sans" color="#4D4D4D">#8, 3rd Floor, "Amar" 14th Main,</font></p>
											 <p><font face="Open Sans" color="#4D4D4D">Sector V, HSR Layout,</font></p>
											 <p><font face="Open Sans" color="#4D4D4D">Bengaluru - 560 102</font></p>
											 <br>
											 <p><font face="Open Sans" color="#4D4D4D">+91-80-6743-9900</font></p>
											 <p><font face="Open Sans" color="#4D4D4D">info@hexagonglobal.in</font></p>
											 </div>
											
												</body>
												</html>';
							
							$send = $mail->Send(); //Send the mails
							if($send){
									echo 1;
							}
							else{
								echo '<center><h3 style="color:#FF3300;">Mail error: </h3></center>'.$mail->ErrorInfo;
							}
}
?>