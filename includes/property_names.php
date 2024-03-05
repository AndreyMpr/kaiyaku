<?php

$propertyName = [
    "カレッジハウス1",
    "カレッジハウス2",
    "カレッジハウス3",
    "カレッジハウス5",
    "カレッジハウス10",
    "カレッジハウス11",
    "ルミエール",
];
header('Content-Type: application/json');
echo json_encode($propertyName);
?>