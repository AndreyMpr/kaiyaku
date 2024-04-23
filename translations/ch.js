window.addEventListener("load", function() {
    document.getElementById("langCh").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "取消接待表格";
        document.getElementById("explanation-top").innerText = "如果您希望取消合同，请通过此表格申请取消。\n对于您的新地址等尚未确定的项目，请填写“未确定”。\n收到您的取消合同后，我们将通过以下方式与您联系： 您提供的电话号码。";
        document.getElementById("explanation-bottom").innerText = "最短取消日期：2个月或1个月（请检查您的合同）。\n例如：如果7月21日申请，则取消日期为9月21日（如果提前2个月通知）或8月21日（如果提前2个月通知） 提前几个月通知）。";
        document.getElementById("contractor-name-label").textContent = "承包商名称";
        document.getElementById("contractor-name").placeholder = "例如 张伟 (Zhāng Wěi)";
        document.getElementById("contractor-name-comment").textContent = "*请输入合同上记载的缔约方名称。";
        document.getElementById("property-name-label").textContent = "物业名";
        document.getElementById("property-name").placeholder = "例如：桜木マンション";
        document.getElementById("property-name-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("room-number-label").textContent = "房间号";
        document.getElementById("room-number").placeholder = "例如：101";
        document.getElementById("room-number-comment").textContent = "※请填写合同中的房间号码。";
        document.getElementById("parking-number-label").textContent = "停车场·№";
        document.getElementById("parking-number").placeholder = "例如：01";
        document.getElementById("parking-number-comment").textContent = "※如果您想取消单独的停车场、自行车停车场（包括摩托车停车场）或储物室的合同。";
        document.getElementById("phone-number-label").textContent = "电话号码";
        document.getElementById("phone-number").placeholder = "例如：048-729-8661";
        document.getElementById("phone-number-comment").textContent = "※请填写入住者的电话号码。";
        document.getElementById("move-out-date-label").textContent = "预计退房日期（现场会议日期）";
        document.getElementById("move-out-date-comment").innerText = "※租户和房东将一起确认退房房间的状态。\n检查房间的污渍和划痕，如果需要修理，将讨论谁来承担修理费用。";
        document.getElementById("move-out-time-label").textContent = "期望的现场会议时间";
        document.getElementById("move-out-time-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("reason-legend").textContent = "退房原因";
        document.getElementById("reason-comment").textContent = "※如果方便的话，请告诉我们您搬家的原因。";
        document.querySelector("label[for='work']").textContent = "工作原因";
        document.querySelector("label[for='school']").textContent = "毕业/升学";
        document.querySelector("label[for='house']").textContent = "购买了自己的房子";
        document.querySelector("label[for='small']").textContent = "空间狭小";
        document.querySelector("label[for='parents']").textContent = "回到父母家";
        document.querySelector("label[for='marriage']").textContent = "结婚";
        document.querySelector("label[for='malfunction']").textContent = "对设施/管理不满";
        document.querySelector("label[for='far']").textContent = "交通不便";
        document.querySelector("label[for='neighbour']").textContent = "邻里问题";
        document.querySelector("label[for='fieldset-other']").textContent = "其他";
        document.getElementById("fieldset-other").placeholder = "因为要调动到其他县";
        document.getElementById("address-label").textContent = "搬迁地址";
        document.getElementById("address").placeholder = "埼玉県さいたま市大宮区大成町1-518-2";
        document.getElementById("address-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("bank-account-label").textContent = "押金等退款账户";
        document.getElementById("bank-account").textContent = "例如：埼玉りそな銀行　大宫西支店　普通　1474654";
        document.getElementById("bank-account-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("bank-name-label").textContent = "账户名";
        document.getElementById("bank-name").textContent = "例如：カ）サイタママルヤマコウムショ";
        document.getElementById("bank-name-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("comment-label").textContent = "在您居住期间有没有什么问题？";
        document.getElementById("comment-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("satisfaction-legend").textContent = "请告诉我们您对丸山公寓中心管理公司的满意度";
        document.querySelector("label[for='terrible']").textContent = "不满意";
        document.querySelector("label[for='bad']").textContent = "有点不满意";
        document.querySelector("label[for='ok']").textContent = "一般";
        document.querySelector("label[for='good']").textContent = "有点满意";
        document.querySelector("label[for='great']").textContent = "非常满意";
        document.getElementById("explanation-label").textContent = "如果您在上述问题中回答了“有点不满意”或“不满意”，请告诉我们原因。";
        document.getElementById("explanation-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("wishes-label").textContent = "您有没有希望的设施或服务？";
        document.getElementById("wishes-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("other-label").textContent = "如果您有其他问题，请随意填写。";
        document.getElementById("other-comment").textContent = "※请填写合同中的建筑名称。";
        document.getElementById("submit-button").textContent = "注册";
        document.getElementById("privacy-policy").textContent = "个人信息保护政策";

        //Confirmation section

        document.getElementById("contractor-name-confirm").textContent = "承包商名称";
        document.getElementById("property-name-confirm").textContent = "物业名";
        document.getElementById("room-number-confirm").textContent = "房间号";
        document.getElementById("parking-number-confirm").textContent = "停车场·№";
        document.getElementById("phone-number-confirm").textContent = "电话号码";
        document.getElementById("move-out-date-confirm").textContent = "预计退房日期（现场会议日期）";
        document.getElementById("move-out-time-confirm").textContent = "期望的现场会议时间";
        document.getElementById("reason-legend-confirm").textContent = "退房原因";
        document.getElementById("address-confirm").textContent = "搬迁地址";
        document.getElementById("bank-account-confirm").textContent = "押金等退款账户";
        document.getElementById("bank-name-confirm").textContent = "账户名";
        document.getElementById("comment-confirm").textContent = "在您居住期间有没有什么问题？";
        document.getElementById("satisfaction-confirm").textContent = "请告诉我们您对丸山公寓中心管理公司的满意度";
        document.getElementById("explanation-confirm").textContent = "如果您在上述问题中回答了“有点不满意”或“不满意”，请告诉我们原因。";
        document.getElementById("wishes-confirm").textContent = "您有没有希望的设施或服务？";
        document.getElementById("other-confirm").textContent = "如果您有其他问题，请随意填写。";

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