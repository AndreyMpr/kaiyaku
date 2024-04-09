<?php

//Login credentials

require '../../kaiyaku_private/kaiyaku_db_config.php';

//Connect to the database

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbName, $kaiyakuDbUser, $kaiyakuDbPass);

//If connection errors

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}

// Input sanitization

$contractorName = mysqli_real_escape_string($dbConnect, $_POST['contractorName']);
$propertyName = mysqli_real_escape_string($dbConnect, $_POST['propertyName']);
$roomNumber = mysqli_real_escape_string($dbConnect, $_POST['roomNumber']);
$parkingNumber = mysqli_real_escape_string($dbConnect, $_POST['parkingNumber']);
$phoneNumber = mysqli_real_escape_string($dbConnect, $_POST['phoneNumber']);
$moveOutDate = mysqli_real_escape_string($dbConnect, $_POST['moveOutDate']);
$moveOutTime = mysqli_real_escape_string($dbConnect, $_POST['moveOutTime']);
$reason = mysqli_real_escape_string($dbConnect, $_POST['reason']);
$address = mysqli_real_escape_string($dbConnect, $_POST['address']);
$bankAccount = mysqli_real_escape_string($dbConnect, $_POST['bankAccount']);
$bankAccountName = mysqli_real_escape_string($dbConnect, $_POST['bankAccountName']);
$comment = mysqli_real_escape_string($dbConnect, $_POST['comment']);
$satisfaction = mysqli_real_escape_string($dbConnect, $_POST['satisfaction']);
$explanation = mysqli_real_escape_string($dbConnect, $_POST['explanation']);
$wishes = mysqli_real_escape_string($dbConnect, $_POST['wishes']);
$other = mysqli_real_escape_string($dbConnect, $_POST['other']);

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
    explanation
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