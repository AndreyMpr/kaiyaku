<?php

//Login credentials

include '../../../kaiyaku_private/kaiyaku_db_config.php';

//Connect to the database

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbUser, $kaiyakuDbPass, $kaiyakuDbName);

//If connection errorsConnection error

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}

// Get the JSON input
$inputJSON = file_get_contents('php://input');

// Convert it into a PHP object
$input = json_decode($inputJSON, TRUE); //convert JSON into array

// Input sanitization

$contractorName = mysqli_real_escape_string($dbConnect, $input['contractorName']);
$propertyName = mysqli_real_escape_string($dbConnect, $input['propertyName']);
$roomNumber = mysqli_real_escape_string($dbConnect, $input['roomNumber']);
$parkingNumber = mysqli_real_escape_string($dbConnect, $input['parkingNumber']);
$phoneNumber = mysqli_real_escape_string($dbConnect, $input['phoneNumber']);
$moveOutDate = mysqli_real_escape_string($dbConnect, $input['moveOutDate']);
$moveOutTime = mysqli_real_escape_string($dbConnect, $input['moveOutTime']);
$reason = mysqli_real_escape_string($dbConnect, $input['reason']);
$address = mysqli_real_escape_string($dbConnect, $input['address']);
$bankAccount = mysqli_real_escape_string($dbConnect, $input['bankAccount']);
$bankAccountName = mysqli_real_escape_string($dbConnect, $input['bankAccountName']);
$comment = mysqli_real_escape_string($dbConnect, $input['comment']);
$satisfaction = mysqli_real_escape_string($dbConnect, $input['satisfaction']);
$explanation = mysqli_real_escape_string($dbConnect, $input['explanation']);
$wishes = mysqli_real_escape_string($dbConnect, $input['wishes']);
$other = mysqli_real_escape_string($dbConnect, $input['other']);

// SQL query

$sql = "INSERT INTO kaiyakuForm (
    contractorName,
    propertyName,
    roomNumber,
    parkingNumber,
    phoneNumber,
    moveOutDate,
    moveOutTime,
    reason,
    address,
    bankAccount,
    bankAccountName,
    comment,
    satisfaction,
    explanation,
    wishes,
    other
    ) VALUES (
        '$contractorName',
        '$propertyName',
        '$roomNumber',
        '$parkingNumber',
        '$phoneNumber',
        '$moveOutDate',
        '$moveOutTime',
        '$reason',
        '$address',
        '$bankAccount',
        '$bankAccountName',
        '$comment',
        '$satisfaction',
        '$explanation',
        '$wishes',
        '$other'
        )";

// Query execution

if ($dbConnect->query($sql) === TRUE) {
    echo "登録完了";
} else {
    echo "エラー " . $sql . "<br>" . $dbConnect->error;
}

// Close connection

$dbConnect->close();