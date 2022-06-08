<?php
include('db.php');

$username = $decodedData['Username'];
$password = $decodedData['Password'];

$sql = "SELECT * FROM login WHERE Username = '$username'";
$exeSQL = mysqli_query($conn, $sql);
$checkUsername = mysqli_num_rows($exeSQL);

if ($checkUsername != 0)
{
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['Password'] != $password)
    {
        $message = "Invalid username or password";
    }
    else
    {
        $message = "Welcome";
    }
}
else
{
    $message = "Account not found";
}

$response[] = array("Message" => $message);
echo json_encode($response);