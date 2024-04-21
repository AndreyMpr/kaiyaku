window.addEventListener("load", function() {
    document.getElementById("langEn").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "Contract cancellation form";
        document.getElementById("explanation-top").innerText = "If you wish to cancel your contract, please apply for cancellation through this form.\nFor items such as your new address that are not yet decided, please fill in “Undecided”.\nAfter we receive your cancellation, we will contact you at the phone number you provided.";
        document.getElementById("explanation-bottom").innerText = "Shortest cancellation date: 2 months or 1 month (please check your contract).\nFor example: If applied on July 21st, the cancellation would be on September 21st (in case of 2 months advance notice) or August 21st (in case of 2 months advance notice).";
        document.getElementById("contractor-name-label").textContent = "Contractor Name";
        document.getElementById("contractor-name").placeholder = "e.g. John Doe";
        document.getElementById("contractor-name-comment").textContent = "Please enter the contractor name as listed on your contract.";
        document.getElementById("property-name-label").textContent = "Name of the property (building/parking)";
        document.getElementById("property-name").placeholder = "e.g. Sakura mansion";
        document.getElementById("property-name-comment").textContent = "Please enter the property name as listed on your contract.";
        document.getElementById("room-number-label").textContent = "Room number";
        document.getElementById("room-number").placeholder = "e.g. 101";
        document.getElementById("room-number-comment").textContent = "Please enter the room number as listed on your contract.";
        document.getElementById("parking-number-label").textContent = "Parking space number / storage unit number";
        document.getElementById("parking-number").placeholder = "e.g. 01";
        document.getElementById("parking-number-comment").textContent = "For customers who rent a parking space or a storage unit.";
        document.getElementById("phone-number-label").textContent = "Phone number";
        document.getElementById("phone-number").placeholder = "e.g. +81-80-8743-4126";
        document.getElementById("phone-number-comment").textContent = "Please provide a phone number of the preson that currently lives in the unit. We will contact you to confirm your moving out date and time.";
        document.getElementById("move-out-date-label").textContent = "Moving out date";
        document.getElementById("move-out-date-comment").innerText = "On this day our representative will visit the unit to check the overall condition and collect the keys. \nPlease note that after this, you will no longer be able to enter the unit.";
        document.getElementById("move-out-time-label").textContent = "Moving out time";
        document.getElementById("move-out-time-comment").textContent = "If possible, please specify the time, when our representative can visit you on the moving out day. If you not sure about the time at the moment, please leave this field blank and we will contact you later, to confirm the time.";
        document.getElementById("reason-legend").textContent = "Reason for moving out";
        document.getElementById("reason-comment").textContent = "This will help us improve our service.";
        document.querySelector("label[for='work']").textContent = "Work circumstances";
        document.querySelector("label[for='school']").textContent = "Graduation";
        document.querySelector("label[for='house']").textContent = "Purchasing a house";
        document.querySelector("label[for='small']").textContent = "Not enough space";
        document.querySelector("label[for='parents']").textContent = "Moving in with the family";
        document.querySelector("label[for='marriage']").textContent = "Marriage";
        document.querySelector("label[for='malfunction']").textContent = "Dissatisfaction with the equipment or management.";
        document.querySelector("label[for='far']").textContent = "Inconvinient access";
        document.querySelector("label[for='neighbour']").textContent = "Problem with neighbours";
        document.querySelector("label[for='fieldset-other']").textContent = "Other";
        document.getElementById("fieldset-other").placeholder = "Moving to a different country";
        document.getElementById("address-label").textContent = "Moving address";
        document.getElementById("address").placeholder = "1-518-2 Onaricho, Omiya Ward, Saitama City, Saitama Prefecture";
        document.getElementById("address-comment").textContent = "* The address mightbe used for sending the documents or cancelation settlement transfer.";
        document.getElementById("bank-account-label").textContent = "Bank account number";
        document.getElementById("bank-account").textContent = "Example: Saitama Resona Bank, Omiya Nishi Branch, Normal 1474654";
        document.getElementById("bank-account-comment").textContent = "* This account will be used to transfer canselation settlement or security deposit.";
        document.getElementById("bank-name-label").textContent = "Bank account holder's name.";
        document.getElementById("bank-name").textContent = "Example: John Doe";
        document.getElementById("bank-name-comment").textContent = "* Please fill in the name of account holder, as stated in your contract with the bank (usually katakana).";
        document.getElementById("comment-label").textContent = "Did you experience any problems during your stay?";
        document.getElementById("comment-comment").textContent = "* If there is any problems that might affected your decision to move out, please let us know about it.";
        document.getElementById("satisfaction-legend").textContent = "Please let us know how satisfied were you with our services.";
        document.querySelector("label[for='terrible']").textContent = "Not satisfied";
        document.querySelector("label[for='bad']").textContent = "Somewhat unsatisfied";
        document.querySelector("label[for='ok']").textContent = "Normal";
        document.querySelector("label[for='good']").textContent = "Somewhat satisfied";
        document.querySelector("label[for='great']").textContent = "Very satisfied";
        document.getElementById("explanation-label").textContent = "If you answered 'Somewhat unsatisfied' or 'Not satisfied' in the above question, please let us know the reason.";
        document.getElementById("explanation-comment").textContent = "We appreciate your feedback.";
        document.getElementById("wishes-label").textContent = "Is there any facility or service you wish we provided during your stay?";
        document.getElementById("wishes-comment").textContent = "We appreciate your feedback.";
        document.getElementById("other-label").textContent = "If you have any other comments, anything you wish to share, please feel free to fill it in here.";
        document.getElementById("other-comment").textContent = "We appreciate your feedback.";
        document.getElementsByClassName("submit-button")[0].textContent = "Submit";
        document.getElementById("privacy-policy").textContent = "Privacy policy";
        document.getElementsByClassName("confirmation-title").textContent = "Confirm input";
        document.getElementsByClassName("confirmation-subtitle").textContent = "Please confirm your input to the form.";
        document.getElementById("contractor-name-confirm").textContent = "Contractor Name";
        document.getElementById("property-name-confirm").textContent = "Name of the property (building/parking)";

        //Confirmation section

        document.getElementById("contractor-name-confirm").textContent = "Contractor Name";
        document.getElementById("property-name-confirm").textContent = "Name of the property";
        document.getElementById("room-number-confirm").textContent = "Room number";
        document.getElementById("parking-number-confirm").textContent = "Parking space number / storage unit number";
        document.getElementById("phone-number-confirm").textContent = "Phone number";
        document.getElementById("move-out-date-confirm").textContent = "Moving out date";
        document.getElementById("move-out-time-confirm").textContent = "Moving out time";
        document.getElementById("reason-legend-confirm").textContent = "Reason for moving out";
        document.getElementById("address-confirm").textContent = "Moving address";
        document.getElementById("bank-account-confirm").textContent = "Bank account number";
        document.getElementById("bank-name-confirm").textContent = "Bank account holder's name.";
        document.getElementById("comment-confirm").textContent = "Did you experience any problems during your stay?";
        document.getElementById("satisfaction-confirm").textContent = "Please let us know how satisfied were you with our services.";
        document.getElementById("explanation-confirm").textContent = "If you answered 'Somewhat unsatisfied' or 'Not satisfied' in the above question, please let us know the reason.";
        document.getElementById("wishes-confirm").textContent = "Is there any facility or service you wish we provided during your stay?";
        document.getElementById("other-confirm").textContent = "If you have any other comments, anything you wish to share, please feel free to fill it in here.";

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

        //Privacy policy

        document.getElementById("privacy-policy-link").textContent = "個人情報保護方針";

        //Footer

        document.getElementById("office-hours").textContent = "営業時間：09:00 〜 18:00; 定休日：水曜日";
        
    }, 100);
});