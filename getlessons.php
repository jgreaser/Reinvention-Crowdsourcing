<?php




displayLessons();

function displayLessons()
{
        
	// Create connection
	$conn = mysqli_connect("crowdsourcing.db.11260558.hostedresource.com", "crowdsourcing", "dbCrowd07#", "crowdsourcing"); 
	// Check connection
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
		}

	$sql = "SELECT * FROM lessons";
	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
	    // output data of each row
	    echo "<table border=1 width='100%'>";
	    while($row = mysqli_fetch_assoc($result)) {
	        echo "<tr><td><b>ID</b>: " . $row["ID"]. "<br><b>Date: </b>".$row["date"]." <br><b>Hook: </b>".$row["hook"]."</td>";
	        echo "<td><b>Main Point 1:</b> " . $row["mainpoint01"]. "<br><br><b>Content 1:</b> ".$row["content01"]."</td>";
	        echo "</td><td><b>Main Point 2:</b> " . $row["mainpoint02"]. "<br><br><b>Content 2:</b> ".$row["content02"]."</td>";
	        echo "</td><td><b>Main Point 3:</b> " . $row["mainpoint03"]. "<br><br><b>Content 3:</b> ".$row["content03"]."</td></tr>";

	    }
 	    echo "</table>";

	} else {
	    echo "0 results";
	}

mysqli_close($conn);

}