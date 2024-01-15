<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>解約受付フォーム</title>
</head>
<body>

<h1>解約受付フォーム</h1>
<div>
    <p>解約をご希望の際は、当フォームより解約申請をお願い致します。</p>
    <p>転居先のご住所等、未定の項目は「未定」とご記入ください。</p>
    <p>解約を受付後、ご入力いただいたお電話番号へ弊社より、ご連絡をさせていただきます。</p>
</div>
<div>
    <p>最短解約日：2ヶ月　or　1ヶ月　（契約書をご確認ください）</p>
    <p>例）7/21受付→9/21（2か月前）or　8/21（1ヶ月前）</p>
</div>

<section>
    <form action="kaiyaku-form-handler.php" method="get">

        <div>
            <label for="contractor-name">契約者氏名</label>
            <input type="text" id="contractor-name" name="contractor-name" placeholder="山田太郎">
        </div>

        <div>
            <label for="property-name">物件名</label>
            <input type="text" id="property-name" name="property-name" placeholder="桜木マンション">
        </div>
        
        <div>
            <label for="room-number">号室</label>
            <input type="text" id="room-number" name="room-number" placeholder="101">
        </div>

        <div>
            <label for="parking-number">駐車場・№</label>
            <input type="text" id="parking-number" name="parking-number" placeholder="01">
        </div>

        <div>
            <label for="phone-number">電話番号</label>
            <input type="tel" id="phone-number" name="phone-number" placeholder="048-729-8661">
        </div>

        <div>
            <label for="move-out-date">退去予定日（立会日）</label>
            <input type="date" id="move-out-date" name="move-out-date" >
        </div>

        <div>
            <label for="move-out-time">立会希望時間</label>
            <input type="time" id="move-out-time" name="move-out-time">
        </div>

        <div>
            <label for="reason">退去理由</label>
            <input type="text" id="reason" name="reason" placeholder="県外への転勤">
        </div>

        <div>
            <label for="reason">退去理由</label>
            <input type="text" id="reason" name="reason" placeholder="県外への転勤">
        </div>

        <div>
            <label for="reason">退去理由</label>
            <input type="text" id="reason" name="reason" placeholder="県外への転勤">
        </div>

    </form>
</section>
</body>
</html>