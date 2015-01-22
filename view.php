<?php

getLessons();

function getLessons()
{
        
	// Create connection
	$conn = mysqli_connect("crowdsourcing.db.11260558.hostedresource.com", "crowdsourcing", "dbCrowd07#", "crowdsourcing"); 
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
		}

	$sql = "SELECT * FROM lessons";
	$result = mysqli_query($conn, $sql);


	$yourArray = array();
	$index = 0;

	if (mysqli_num_rows($result) > 0) {

		while($row = mysqli_fetch_assoc($result))
		{
		     $yourArray[$index] = $row;
		     $index++;
		}

		echo json_encode($yourArray);

	} else {
	    echo "no rows";
	}

mysqli_close($conn);

}