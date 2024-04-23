<?php
//Login credentials

include '../../../kaiyaku_private/kaiyaku_db_config.php';

//Connect to the database

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbUser, $kaiyakuDbPass, $kaiyakuDbName);

//If connection errors

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}