<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $contractorName = htmlspecialchars($_POST["contractorName"]);
    $propertyName = htmlspecialchars($_POST["propertyName"]);
    $roomNumber = htmlspecialchars($_POST["roomNumber"]);
    $parkingNumber = htmlspecialchars($_POST["parkingNumber"]);
    $phoneNumber = htmlspecialchars($_POST["phoneNumber"]);
    $moveOutDate = htmlspecialchars($_POST["moveOutDate"]);
    $moveOutTime = htmlspecialchars($_POST["moveOutTime"]);
    $reason = htmlspecialchars($_POST["reason"]);
    $address = htmlspecialchars($_POST["address"]);
    $bankAccount = htmlspecialchars($_POST["bankAccount"]);
    $bankName = htmlspecialchars($_POST["bankAccountName"]);
    $comment = htmlspecialchars($_POST["comment"]);
    $satisfaction = htmlspecialchars($_POST["satisfaction"]);
    $explanation = htmlspecialchars($_POST["explanation"]);
    $wishes = htmlspecialchars($_POST["wishes"]);
    $other = htmlspecialchars($_POST["other"]);

    echo "Voila:";
    echo "<br>";
    echo $contractorName;
    echo "<br>";
    echo $propertyName;
    echo "<br>";
    echo $roomNumber;

}