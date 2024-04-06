<?php

$kaiyakuDbHost = getenv('DB_HOST');
$kaiyakuDbName = getenv('DB_PASS');
$kaiyakuDbUser = getenv('DB_USER');
$kaiyakuDbPass = getenv('DB_PASS');

//Connect to the database

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbName, $kaiyakuDbUser, $kaiyakuDbPass);

//If connection errors

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}