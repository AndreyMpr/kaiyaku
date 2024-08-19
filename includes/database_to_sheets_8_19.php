<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = array(
        "id" => $_POST["id"],
        "contractorName" => $_POST["contractorName"],
        "propertyName" => $_POST["propertyName"],
        "roomNumber" => $_POST["roomNumber"],
        "parkingNumber" => $_POST["parkingNumber"],
        "phoneNumber" => $_POST["phoneNumber"],
        "moveOutDate" => $_POST["moveOutDate"],
        "moveOutTime" => $_POST["moveOutTime"],
        "reason" => $_POST["reason"],
        "address" => $_POST["address"],
        "bankAccount" => $_POST["bankAccount"],
        "bankAccountName" => $_POST["bankAccountName"],
        "comment" => $_POST["comment"],
        "satisfaction" => $_POST["satisfaction"],
        "explanation" => $_POST["explanation"],
        "wishes" => $_POST["wishes"],
        "other" => $_POST["other"],
        "created_at" => $_POST["created_at"]
    );

    $url = "https://script.google.com/macros/s/AKfycbyTszCVXKdJsLYxGLRZCONtXyGtL0Ck1cC7nKLyDLtZVKc8cbm7C7_2bd7zyoTr516L/exec";
    $options = array(
        "http" => array(
            "header" => "Content-type: application/json\r\n",
            "method" => "POST",
            "content" => json_encode($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        // Handle error
    }

    echo $result;
}