<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>解約受付フォーム</title>
    <link rel="stylesheet" href="kaiyaku-form.css" />
</head>
<body>

<h1>解約受付フォーム</h1>
<div class="inner">
    <p>解約をご希望の際は、当フォームより解約申請をお願い致します。</p>
    <p>転居先のご住所等、未定の項目は「未定」とご記入ください。</p>
    <p>解約を受付後、ご入力いただいたお電話番号へ弊社より、ご連絡をさせていただきます。</p>
</div>
<div class="inner">
    <p>最短解約日：2ヶ月　or　1ヶ月　（契約書をご確認ください）</p>
    <p>例）7/21受付→9/21（2か月前）or　8/21（1ヶ月前）</p>
</div>

<section class="inner">
    <form action="kaiyaku-form-handler.php" method="post">

        <div class="question">
            <p class="number">1.</p>
            <label class="wide-label" for="contractor-name">契約者氏名</label>
            <input class="wide-input" type="text" id="contractor-name" name="contractorName" placeholder="例：山田太郎">
            <p class="comment">
                ご家族を含め、ご契約者様以外からのお申込みにより、ご契約者様または弊社に何等かの損害が
                生じた場合には、損害の請求をさせていただく場合がございます。
            </p>
        </div>

        <div class="question">
            <p class="number">2.</p>
            <label class="wide-label" for="property-name">物件名</label>
            <input class="wide-input" type="text" id="property-name" name="propertyName" placeholder="例：桜木マンション">
            <p class="comment">
                ご家族を含め、ご契約者様以外からのお申込みにより、ご契約者様または弊社に何等かの損害が
                生じた場合には、損害の請求をさせていただく場合がございます。
            </p>
        </div>
        
        <div class="question">
            <p class="number">3.</p>
            <label class="wide-label" for="room-number">号室</label>
            <input class="wide-input" type="text" id="room-number" name="roomNumber" placeholder="例：101">
            <p class="comment">
                ご家族を含め、ご契約者様以外からのお申込みにより、ご契約者様または弊社に何等かの損害が
                生じた場合には、損害の請求をさせていただく場合がございます。
            </p>
        </div>

        <div class="question">
            <p class="number">4.</p>
            <label class="wide-label" for="parking-number">駐車場・№</label>
            <input class="wide-input" type="text" id="parking-number" name="parkingNumber" placeholder="例：01">
            <p class="comment">
                ご家族を含め、ご契約者様以外からのお申込みにより、ご契約者様または弊社に何等かの損害が
                生じた場合には、損害の請求をさせていただく場合がございます。
            </p>
        </div class="question">

        <div class="question">
            <p class="number">5.</p>
            <label class="wide-label" for="phone-number">電話番号</label>
            <input class="wide-input" type="tel" id="phone-number" name="phoneNumber" placeholder="例：048-729-8661">
        </div>

        <div class="question">
            <p class="number">6.</p>
            <label class="wide-label" for="move-out-date">退去予定日（立会日）</label>
            <input class="wide-input" type="date" id="move-out-date" name="moveOutDate" >
        </div>

        <div class="question">
            <p class="number">7.</p>
            <label class="wide-label" for="move-out-time">立会希望時間</label>
            <input class="wide-input" type="time" id="move-out-time" name="moveOutTime">
        </div>

        <div class="question">
            <fieldset>
                <p class="number">8.</p>
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

        <div class="question">
            <p class="number">9.</p>
            <label class="wide-label" for="address">転居先住所</label>
            <input class="wide-input" type="text" id="address" name="address">
        </div>

        <div class="question">
            <p class="number">10.</p>
            <label class="wide-label" for="bank-account">敷金等返金先口座</label>
            <input class="wide-input" type="text" id="bank-account" name="bankAccount" placeholder="例：埼玉りそな銀行　大宮西支店　普通　1474654">
        </div>
        
        <div class="question">
            <p class="number">11.</p>
            <label class="wide-label" for="bank-name">口座名義</label>
            <input class="wide-input" type="text" id="bank-name" name="bankName" placeholder="例：カ）サイタママルヤマコウムショ">
        </div>

        <div class="question">
            <p class="number">12.</p>
            <label class="wide-label" for="comment">お住まいいただいていた期間に何か不具合がございましたか。</label>
            <textarea class="wide-input" id="comment" name="comment"></textarea>

        </div>

        <div class="question">
            <fieldset>
                <p class="number">13.</p>
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

        <div class="question">
            <p class="number">14.</p>
            <label class="wide-label" for="explanation">上記設問にてやや不満足、不満足とお答えされた方はその理由をお聞かせください。</label>
            <input class="wide-input" type="text" id="explanation" name="explanation">
        </div>

        <div class="question">
            <p class="number">14.</p>
            <label class="wide-label" for="wishes">希望する設備やサービスは何かございましたか。</label>
            <input class="wide-input" type="text" id="wishes" name="wishes">
        </div>

        <div class="question">
            <p class="number">15.</p>
            <label class="wide-label" for="other">その他ご質問等がございましたら、ご自由にご記入ください。</label>
            <input class="wide-input" type="text" id="other" name="other">
        </div>

        <div class="submit">

        </div>

    </form>
</section>
</body>
</html>