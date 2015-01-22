<?php

$lesson_hook = $_GET['hook'];
$lesson_mainpoint01 = $_GET['mainpoint01'];
$lesson_mainpoint02 = $_GET['mainpoint02'];
$lesson_mainpoint03 = $_GET['mainpoint03'];
$lesson_content01 = $_GET['content01'];
$lesson_content02 = $_GET['content02'];
$lesson_content03 = $_GET['content03'];
$lesson_version_letter = $_GET['version_letter'];


addRows($lesson_hook['value'],$lesson_mainpoint01['value'],$lesson_mainpoint02['value'],$lesson_mainpoint03['value'],$lesson_content01['value'],$lesson_content02['value'],$lesson_content03['value'],$lesson_version_letter['value']);

function addRows($hook, $mainpoint01, $mainpoint02, $mainpoint03, $content01, $content02, $content03, $lesson_version_letter)
{
	// Create connection
	$conn = mysqli_connect("crowdsourcing.db.11260558.hostedresource.com", "crowdsourcing", "dbCrowd07#", "crowdsourcing"); 
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
		}

	$sql = "INSERT INTO crowdsourcing . lessons 
	(ID, date, version_letter, mainpoint01, mainpoint02, mainpoint03, content01, content02, content03, hook) 
	VALUES 
	(NULL, '', '".$lesson_version_letter."','".$mainpoint01."', '".$mainpoint02."', '".$mainpoint03."', '".$content01."', '".$content02."', '".$content03."', '".$hook."')";

	if (mysqli_query($conn, $sql)) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);

}
?>