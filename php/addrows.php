<?php

$data = $_GET['myData'];

// Parse 

$data = json_decode($data);
echo $data;

echo $data.mainpoint1.text;
echo $data["mainpoint1"]["text"];

addRows();

function addRows()
{
     
	// Create connection
	$conn = mysqli_connect("crowdsourcing.db.11260558.hostedresource.com", "crowdsourcing", "dbCrowd07#", "crowdsourcing"); 
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
		}

$sql = "INSERT INTO crowdsourcing . lessons 
(ID, date, mainpoint01, mainpoint02, mainpoint03, content01, content02, content03, hook) 
VALUES 
(NULL, '', '".$data.another mainpoint1."', 'mainpoint2', 'mainpoint3', 'content1', 'content2', 'more content 3', '".$hook."')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);

}
?>