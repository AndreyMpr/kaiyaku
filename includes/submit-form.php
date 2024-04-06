<?php

$kaiyakuDbHost = getenv('DB_HOST');
$kaiyakuDbName = getenv('DB_PASS');
$kaiyakuDbUser = getenv('DB_USER');
$kaiyakuDbPass = getenv('DB_PASS');

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbName, $kaiyakuDbUser, $kaiyakuDbPass);

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}