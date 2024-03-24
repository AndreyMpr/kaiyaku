<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $contractorName = filter_input(INPUT_POST, "contractorName", FILTER_SANITIZE_STRING);
        $propertyName = filter_input(INPUT_POST, "propertyName", FILTER_SANITIZE_STRING);
        $roomNumber = filter_input(INPUT_POST, "roomNumber", FILTER_SANITIZE_STRING);
        $parkingNumber = filter_input(INPUT_POST, "parkingNumber", FILTER_SANITIZE_STRING);
        $phoneNumber = filter_input(INPUT_POST, "phoneNumber", FILTER_SANITIZE_STRING);
        $moveOutDate = filter_input(INPUT_POST, "moveOutDate", FILTER_SANITIZE_STRING);
        $moveOutTime = filter_input(INPUT_POST, "moveOutTime", FILTER_SANITIZE_STRING);
        $reason = filter_input(INPUT_POST, "reason", FILTER_SANITIZE_STRING);
        $reasonOther = filter_input(INPUT_POST, "reason-other", FILTER_SANITIZE_STRING);
        $address = filter_input(INPUT_POST, "address", FILTER_SANITIZE_STRING);
        $bankAccount = filter_input(INPUT_POST, "bankAccount", FILTER_SANITIZE_STRING);
        $bankAccountName = filter_input(INPUT_POST, "bankAccountName", FILTER_SANITIZE_STRING);
        $comment = filter_input(INPUT_POST, "comment", FILTER_SANITIZE_STRING);
        $satisfaction = filter_input(INPUT_POST, "satisfaction", FILTER_SANITIZE_STRING);
        $explanation = filter_input(INPUT_POST, "explanation", FILTER_SANITIZE_STRING);
        $wishes = filter_input(INPUT_POST, "wishes", FILTER_SANITIZE_STRING);
        $other = filter_input(INPUT_POST, "other", FILTER_SANITIZE_STRING);

        if (!empty($reasonOther)) {$reason = $reasonOther;}

        echo htmlspecialchars($contractorName);
        echo htmlspecialchars($propertyName);
        echo htmlspecialchars($roomNumber);
        echo htmlspecialchars($roomNumber);
        echo htmlspecialchars($parkingNumber);
        echo htmlspecialchars($phoneNumber);
        echo htmlspecialchars($moveOutDate);
        echo htmlspecialchars($moveOutTime);
        echo htmlspecialchars($reason);
        echo htmlspecialchars($address);
        echo htmlspecialchars($bankAccount);
        echo htmlspecialchars($bankAccountName);
        echo htmlspecialchars($comment);
        echo htmlspecialchars($satisfaction);
        echo htmlspecialchars($explanation);
        echo htmlspecialchars($wishes);
        echo htmlspecialchars($other);
    }
?>