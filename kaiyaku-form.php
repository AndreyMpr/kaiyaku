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
            <fieldset>
                <legend>退去理由</legend>
                <p>差し支えなければ、転居の理由をお聞かせください。</p>

                <input type="radio" id="work" name="reason">
                <label for="work">仕事都合</label>
                <br>
                <input type="radio" id="school" name="reason">
                <label for="school">卒業・進学</label>
                <br>
                <input type="radio" id="house" name="reason">
                <label for="house">自宅購入</label>
                <br>
                <input type="radio" id="small" name="reason">
                <label for="small">手狭</label>
                <br>
                <input type="radio" id="parents" name="reason">
                <label for="parents">実家へ戻る</label>
                <br>
                <input type="radio" id="marriage" name="reason">
                <label for="marriage">結婚</label>
                <br>
                <input type="radio" id="malfunction" name="reason">
                <label for="malfunction">設備・管理に不満</label>
                <br>
                <input type="radio" id="far" name="reason">
                <label for="far">交通の便</label>
                <br>
                <input type="radio" id="neighbour" name="reason">
                <label for="neighbour">近隣トラブル</label>
                <br>
                <label for="other">その他</label>
                <input type="text" id="other" name="reason" placeholder="県外への転勤の為">
            </fieldset>
        </div>

        <div>
            <label for="address">転居先住所</label>
            <input type="text" id="address" name="address">
        </div>

        <div>
            <label for="bank-account">敷金等返金先口座</label>
            <input type="text" id="bank-account" name="bank-account" placeholder="埼玉りそな銀行　大宮西支店　普通　1474654">
        </div>
        
        <div>
            <label for="bank-name">口座名義</label>
            <input type="text" id="bank-name" name="bank-name" placeholder="カ）サイタママルヤマコウムショ">
        </div>

        <div>
            <label for="comment">お住まいいただいていた期間に何か不具合がございましたか。</label>
            <textarea id="comment" name="comment">
                
            </textarea>
        </div>

        <div>
            <fieldset>
                <legend>管理会社丸山マンションセンターの対応について満足度をお教えください。</legend>

                <input type="radio" id="terrible" name="satisfaction">
                <label for="terrible">不満足</label>
                <br>
                <input type="radio" id="bad" name="satisfaction">
                <label for="bad">やや不満足</label>
                <br>
                <input type="radio" id="ok" name="satisfaction">
                <label for="ok">普通</label>
                <br>
                <input type="radio" id="good" name="satisfaction">
                <label for="good">やや満足</label>
                <br>
                <input type="radio" id="great" name="satisfaction">
                <label for="great">大変満足</label>
            </fieldset>
        </div>

        <div>
            <label for="explanation">上記設問にてやや不満足、不満足とお答えされた方はその理由をお聞かせください。</label>
            <input type="text" id="explanation" name="explanation">
        </div>

        <div>
            <label for="wishes">希望する設備やサービスは何かございましたか。</label>
            <input type="text" id="wishes" name="wishes">
        </div>



    </form>
</section>
</body>
</html>