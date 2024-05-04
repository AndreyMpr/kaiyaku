window.addEventListener("load", function() {
    document.getElementById("langJp").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "解約受付フォーム";
        document.getElementById("explanation-top").innerText = "解約をご希望の際は、当フォームより解約申請をお願い致します。\n転居先のご住所等、未定の項目は「未定」とご記入ください。\n解約を受付後、ご入力いただいたお電話番号へ弊社より、ご連絡をさせていただきます。";
        document.getElementById("explanation-bottom").innerText = "最短解約日：2ヶ月　or　1ヶ月　（契約書をご確認ください）。\n例）7/21受付→9/21（2か月前）or　8/21（1ヶ月前）。";
        document.getElementById("contractor-name-label").textContent = "契約者氏名";
        document.getElementById("contractor-name").placeholder = "例：山田太郎";
        document.getElementById("contractor-name-comment").textContent = "※ご契約書に記載されている契約者名をご入力ください。";
        document.getElementById("property-name-label").textContent = "物件名";
        document.getElementById("property-name").placeholder = "例：桜木マンション";
        document.getElementById("property-name-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("room-number-label").textContent = "号室";
        document.getElementById("room-number").placeholder = "例：101";
        document.getElementById("room-number-comment").textContent = "※ご契約書に記載されている部屋番号をご入力ください。";
        document.getElementById("parking-number-label").textContent = "駐車場・№";
        document.getElementById("parking-number").placeholder = "例：01";
        document.getElementById("parking-number-comment").textContent = "※お部屋の契約が無い単独の駐車場・駐輪場（バイク置き場含む）・トランクルームを解約したいお客様。";
        document.getElementById("phone-number-label").textContent = "電話番号";
        document.getElementById("phone-number").placeholder = "例：048-729-8661";
        document.getElementById("phone-number-comment").textContent = "※入居者様の電話番号ををご入力ください。";
        document.getElementById("move-out-date-label").textContent = "退去予定日（立会日）";
        document.getElementById("move-out-date-comment").innerText = "※借主・貸主が退去する部屋の状態を一緒に確認することです。\n部屋の汚れやキズをチェックし、修繕が必要な場合はどちらが修繕費用を負担するのかを話し合います。";
        document.getElementById("move-out-time-label").textContent = "立会希望時間";
        document.getElementById("move-out-time-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("reason-legend").textContent = "退去理由";
        document.getElementById("reason-comment").textContent = "※可能であれば、退去立会の時間をご指定ください。 現時点で時間がわからない場合は、このフィールドを空白のままにしておいてください。後ほど時間を確認するために連絡させていただきます。";
        document.querySelector("label[for='work']").textContent = "仕事都合";
        document.querySelector("label[for='school']").textContent = "卒業・進学";
        document.querySelector("label[for='house']").textContent = "自宅購入";
        document.querySelector("label[for='small']").textContent = "手狭";
        document.querySelector("label[for='parents']").textContent = "実家へ戻る";
        document.querySelector("label[for='marriage']").textContent = "結婚";
        document.querySelector("label[for='malfunction']").textContent = "設備・管理に不満";
        document.querySelector("label[for='far']").textContent = "交通の便";
        document.querySelector("label[for='neighbour']").textContent = "近隣トラブル";
        document.querySelector("label[for='fieldset-other']").textContent = "その他";
        document.getElementById("fieldset-other").placeholder = "県外への転勤の為";
        document.getElementById("address-label").textContent = "転居先住所";
        document.getElementById("address").placeholder = "埼玉県さいたま市大宮区大成町1-518-2";
        document.getElementById("address-comment").textContent = "※書類の送付や敷金・日割り決済などの振込に利用される場合がございます。";
        document.getElementById("bank-account-label").textContent = "敷金等返金先口座";
        document.getElementById("bank-account").textContent = "例：埼玉りそな銀行　大宮西支店　普通　1474654";
        document.getElementById("bank-account-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("bank-name-label").textContent = "口座名義";
        document.getElementById("bank-name").textContent = "例：カ）サイタママルヤマコウムショ";
        document.getElementById("bank-name-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("comment-label").textContent = "お住まいいただいていた期間に何か不具合がございましたか。";
        document.getElementById("comment-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("satisfaction-legend").textContent = " 13. 管理会社丸山マンションセンターの対応について満足度をお教えください。";
        document.querySelector("label[for='terrible']").textContent = "不満足";
        document.querySelector("label[for='bad']").textContent = "やや不満足";
        document.querySelector("label[for='ok']").textContent = "普通";
        document.querySelector("label[for='good']").textContent = "やや満足";
        document.querySelector("label[for='great']").textContent = "大変満足";
        document.getElementById("explanation-label").textContent = "上記設問にてやや不満足、不満足とお答えされた方はその理由をお聞かせください。";
        document.getElementById("explanation-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("wishes-label").textContent = "希望する設備やサービスは何かございましたか。";
        document.getElementById("wishes-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("other-label").textContent = "その他ご質問等がございましたら、ご自由にご記入ください。";
        document.getElementById("other-comment").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementsByClassName("submit-button")[0].textContent = "登録";
        document.getElementById("privacy-policy").textContent = "個人情報保護方針";

        //Confirmation section

        document.getElementsByClassName("confirmation-title")[0].textContent = "入力確認";
        document.getElementsByClassName("confirmation-subtitle")[0].textContent = "ご入力を確認してください";
        document.getElementById("contractor-name-confirm").textContent = "契約者氏名";
        document.getElementById("property-name-confirm").textContent = "物件名";
        document.getElementById("room-number-confirm").textContent = "号室";
        document.getElementById("parking-number-confirm").textContent = "駐車場・№";
        document.getElementById("phone-number-confirm").textContent = "電話番号";
        document.getElementById("move-out-date-confirm").textContent = "退去予定日（立会日）";
        document.getElementById("move-out-time-confirm").textContent = "立会希望時間";
        document.getElementById("reason-confirm").textContent = "退去理由";
        document.getElementById("address-confirm").textContent = "転居先住所";
        document.getElementById("bank-account-confirm").textContent = "敷金等返金先口座";
        document.getElementById("bank-name-confirm").textContent = "口座名義";
        document.getElementById("comment-confirm").textContent = "お住まいいただいていた期間に何か不具合がございましたか。";
        document.getElementById("satisfaction-confirm").textContent = "管理会社丸山マンションセンターの対応について満足度をお教えください。";
        document.getElementById("explanation-confirm").textContent = "※ご契約書に記載されている建物名をご入力ください。";
        document.getElementById("wishes-confirm").textContent = "希望する設備やサービスは何かございましたか。";
        document.getElementById("other-confirm").textContent = "その他ご質問等がございましたら、ご自由にご記入ください。";

        //Lifeline section

        document.getElementById("lifeline-title").textContent = "移転解約の手続き";
        document.getElementById("lifeline-section-1-title").textContent = "1．明け渡しの準備について";
        document.getElementById("lifeline-section-1-subtitle").textContent = "電気・ガス・水道の精算のご連絡をご入居者様よりお願いいたします。\n退居日の4～5日前に連絡し、退去日にお部屋に来てもらい使用料を精算してください。\n※先方がすぐわかるよう、領収書または検針票の番号をご用意ください。\n※2～4月は混み合いますので、お早めにご連絡をお願いいたします。";
        document.getElementById("lifeline-section-1-title").textContent = "1．明け渡しの準備について";
        document.getElementById("lifeline-electricity").textContent = "電気";
        document.getElementById("electricity-provider").textContent = "東京電力㈱ カスタマーセンター";
        document.getElementById("lifeline-gas").textContent = "ガス";
        document.getElementById("gas-provider").textContent = "東京ガス お客様センター";
        document.getElementById("lifeline-water").textContent = "水道";
        document.getElementById("water-provider").textContent = "さいたま市水道局";
        document.getElementById("lifeline-phone").textContent = "電話";
        document.getElementById("lifeline-post").textContent = "郵便局";
        document.getElementById("post-provider").textContent = "転居の手続きを最寄りの郵便局窓口にて行ってください。";
        document.getElementById("post-phone").textContent = "オンライン申込（外部サイト）";
        document.getElementById("lifeline-section-2-title").textContent = "2．家賃のお支払い・敷金の返還について";
        document.getElementById("lifeline-section-2-subtitle").textContent = "退居する月の分まで前月末にお支払いください。敷金返還時に精算いたします。\n敷金より、メンテナンス費用等の負担基準に基づき精算し、後日銀行振込にて返還いたします。";
        document.getElementById("lifeline-section-3-title").textContent = "3．退去の際にご用意いただくもの";
        document.getElementById("lifeline-section-3-subtitle").textContent = "① 転居先（住所・電話番号）\n② 振込先口座情報\n③ 鍵（スペアキーも含む）\n④ 入居のしおり";
        document.getElementById("lifeline-section-4-title").textContent = "４．CHUBB（エース）保険加入の方";
        document.getElementById("lifeline-section-4-subtitle").textContent = "ご契約者様ご自身で保険解約のお手続きをご依頼ください。";
        document.getElementById("lifeline-guarantor").textContent = "保険";
        document.getElementById("guarantor-provider").textContent = "CHUBB保険サポートセンター";
        document.getElementById("lifeline-section-5-title").textContent = "5．自転車をお持ちの方";
        document.getElementById("lifeline-section-5-subtitle").textContent = "自転車は転居先へお持ちいただくか、ご自身で適切に処分して頂くようお願いいたします。";
        document.getElementById("moving-out-confirmation-contact").textContent = "※ 立会日時の確認が業者より入りますのでご対応よろしくお願い致します。";

        //Buttons

        document.getElementById("confirm-button").textContent = "確定";
        document.getElementById("edit-button").textContent = "修正";

        //Privacy policy

        document.getElementById("privacy-policy-link").innerText =  "個人情報保護方針";

        //Footer

        document.getElementById("office-hours").textContent = "営業時間：09:00 〜 18:00; 定休日：水曜日";

    }, 100);
});