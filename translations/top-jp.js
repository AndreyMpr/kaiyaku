window.addEventListener("load", function() {
    document.getElementById("langJp").addEventListener("click", function() {
        document.querySelector(".mid-title h2").textContent = "解約・退去のお手続き方法";
        document.querySelector(".mid-subtitle h3").innerText = "解約・退去をご希望されるお客様へ\n\n株式会社埼玉丸山工務所の管理建物に\nお住まいいただきまして、\n誠にありがとうございました。";
        document.querySelector("#flex-title-left").textContent = "解約・退去のお申込み"; 
        document.querySelector(".flex-text-left").innerText = "お引越しが決まりましたら「解約・退去」のお申込みが必要となります。お申込み方法は 「インターネット」(当社ご入居者様解約申込みフォーム)からのお申込み、または初回の賃貸契約時にお渡ししている「書面（解約通知書郵送）」によるお申込みとなります。\nお電話・メールによるお申込みは出来ません。";
        document.querySelector(".text-badge p").textContent = "解約・退去のお手続きの流れ"; 
        document.querySelector(".flow-text p").textContent = '解約・退去のお申込みは、「解約受付日※1」から「退去日」までが「解約予告期間※2」未満の場合は、\n「解約受付日※1」より「解約予告期間※2」後までの家賃をご負担いただくことになりますので、日にちに余裕をもってのお手続きをお願いいたします。尚、当該手続きは賃貸借契約書に準ずるものといたします。';
        document.querySelector(".flow-asterisk-list li").textContent = '※1：「解約受付日」…インターネットでお申込みされた場合は申込み受付完了した日、書面でお申込みされた場合は\n解約通知書（ハガキ）の消印日となります。';
        document.querySelector('.flow-asterisk-list li:nth-of-type(2)').innerText = '\n※2：「解約予告期間」…賃貸借契約書記載の解約予告期間（1ヶ月、2ヶ月等）。';
        document.querySelector("#annotation").textContent = "※下記のいずれか1つの方法にてお申込みください。"; 
        document.querySelector(".apply-button span").textContent = "「インターネット」による解約申込みを行う"; 
        document.querySelector(".apply-button:nth-of-type(2) span").textContent = "「郵送用通知書」による解約申込みを行う";
        document.querySelector(".bottom-menu-content p").textContent = "株式会社 埼玉丸山工務所"; 
        document.querySelector(".bottom-menu-content p:nth-of-type(3)").textContent = "埼玉県さいたま市大宮区大成町1-518-2";
        document.querySelector(".bottom-menu-content p:nth-of-type(4)").textContent = "営業時間 9:00～18:00";
        document.querySelector(".bottom-menu-content p:nth-of-type(5)").textContent = "担当部署（不動産部）定休日：火曜日・水曜日";
    });
});