<?php
//Login credentials

include '../../../kaiyaku_private/kaiyaku_db_config.php';

//Connect to the database

$dbConnect = new mysqli($kaiyakuDbHost, $kaiyakuDbUser, $kaiyakuDbPass, $kaiyakuDbName);

//If connection errors

if ($dbConnect-> connect_errno) {
    die("Connection error ". $dbConnect->connect_error);
}

 // Fetch the last row from the database

$result = $dbConnect->query("SELECT * FROM kaiyakuForm ORDER BY created_at DESC LIMIT 1");
$data = $result->fetch_assoc();

// Google Sheets API setup
require_once 'vendor/autoload.php'; //SET UP THE COMPOSER!! !! !! !! !! !! !!
$client = new Google_Client();
$client->setApplicationName('DB-to-sheets');
$client->setAuthConfig('../../../kaiyaku_private/credentials.json');
$client->addScope(Google_Service_Sheets::SPREADSHEETS);
$client->setAccessType('offline');
$service = new Google_Service_Sheets($client);

// The ID of your Google Spreadsheet
$spreadsheetId = '1HHsK8k0YijDuDbSnG__61A0jSFPNxrlEWLAWjs_COXA';

// The range of cells to update in the spreadsheet
$range = 'kaiyaku-form!A2';

// Prepare the data for the Google Sheets API
$values = [
    array_values($data)
];
$body = new Google_Service_Sheets_ValueRange([
    'values' => $values
]);

// Update the Google Spreadsheet
$result = $service->spreadsheets_values->append($spreadsheetId, $range, $body, ['valueInputOption' => 'RAW']);

echo "Updated {$result->getUpdates()->getUpdatedCells()} cells";