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
        document.getElementsByClassName("submit-button")[0].textContent = "注册";
        document.getElementById("privacy-policy").textContent = "个人信息保护政策";

        //Confirmation section

        document.getElementsByClassName("confirmation-title")[0].textContent = "输入确认";
        document.getElementsByClassName("confirmation-subtitle")[0].textContent = "请确认您的输入";
        document.getElementById("contractor-name-confirm").textContent = "承包商名称";
        document.getElementById("property-name-confirm").textContent = "物业名";
        document.getElementById("room-number-confirm").textContent = "房间号";
        document.getElementById("parking-number-confirm").textContent = "停车场·№";
        document.getElementById("phone-number-confirm").textContent = "电话号码";
        document.getElementById("move-out-date-confirm").textContent = "预计退房日期（现场会议日期）";
        document.getElementById("move-out-time-confirm").textContent = "期望的现场会议时间";
        document.getElementById("reason-confirm").textContent = "退房原因";
        document.getElementById("address-confirm").textContent = "搬迁地址";
        document.getElementById("bank-account-confirm").textContent = "押金等退款账户";
        document.getElementById("bank-name-confirm").textContent = "账户名";
        document.getElementById("comment-confirm").textContent = "在您居住期间有没有什么问题？";
        document.getElementById("satisfaction-confirm").textContent = "请告诉我们您对丸山公寓中心管理公司的满意度";
        document.getElementById("explanation-confirm").textContent = "如果您在上述问题中回答了“有点不满意”或“不满意”，请告诉我们原因。";
        document.getElementById("wishes-confirm").textContent = "您有没有希望的设施或服务？";
        document.getElementById("other-confirm").textContent = "如果您有其他问题，请随意填写。";

        //Lifeline section

        document.getElementsByClassName("confirmation-title")[0].textContent = "确认入口";
        document.getElementsByClassName("confirmation-subtitle")[0].textContent = "请在提交前检查信息";
        document.getElementById("lifeline-title").textContent = "搬出和取消的程序";
        document.getElementById("lifeline-section-1-title").textContent = "1. 搬出准备";
        document.getElementById("lifeline-section-1-subtitle").textContent = "我们要求租户联系公用事业供应商以结算电费、燃气费和水费。请在搬出日期前至少4-5天联系公用事业供应商，并在搬出日期当天来到房间以结算使用费。请准备收据或抄表票号码，以便对方立即了解。特别是在2月至4月的期间，请尽早与我们联系。";
        document.getElementById("lifeline-electricity").textContent = "电力";
        document.getElementById("electricity-provider").textContent = "东京电力公司客户中心";
        document.getElementById("lifeline-gas").textContent = "燃气";
        document.getElementById("gas-provider").textContent = "东京燃气客户中心";
        document.getElementById("lifeline-water").textContent = "水";
        document.getElementById("water-provider").textContent = "埼玉市自来水局";
        document.getElementById("lifeline-phone").textContent = "电话";
        document.getElementById("lifeline-post").textContent = "邮局";
        document.getElementById("post-provider").textContent = "请在最近的邮局柜台进行搬家手续。";
        document.getElementById("post-phone").textContent = "在线申请（外部网站）";
        document.getElementById("lifeline-section-2-title").textContent = "2. 租金支付和押金退还";
        document.getElementById("lifeline-section-2-subtitle").textContent = "请在前一个月底前支付到搬出月份的租金。我们将在退还押金时结算。从押金中，我们将根据维护成本等的负担标准进行结算，并在后来通过银行转账退还。";
        document.getElementById("lifeline-section-3-title").textContent = "3. 搬出时需要准备的事项";
        document.getElementById("lifeline-section-3-subtitle").textContent = "① 搬迁目的地（地址、电话号码）\n② 转账账户信息\n③ 钥匙（包括备用钥匙）\n④ 入住指南（入居のしおり）";
        document.getElementById("lifeline-section-4-title").textContent = "4. 对于有CHUBB（エース）保险的人";
        document.getElementById("lifeline-section-4-subtitle").textContent = "请直接通过担保公司的合同请求保险取消手续。";
        document.getElementById("lifeline-guarantor").textContent = "保险";
        document.getElementById("guarantor-provider").textContent = "CHUBB保险支持中心";
        document.getElementById("lifeline-section-5-title").textContent = "5. 对于有自行车的人";
        document.getElementById("lifeline-section-5-subtitle").textContent = "请将您的自行车带到搬迁目的地，或者自行适当地处理。";
        document.getElementById("moving-out-confirmation-contact").textContent = "※ 我们将从承包商那里确认会议日期和时间，因此请配合。";
        

        //Privacy policy

        //document.getElementById("privacy-policy-link").textContent = "個人情報保護方針";

        //Footer

        document.getElementById("office-hours").textContent = "营业时间：09:00 〜 18:00; 休息日：星期三";

    }, 100);
});