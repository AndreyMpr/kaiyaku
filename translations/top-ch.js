window.addEventListener("load", function() {
    document.getElementById("langCh").addEventListener("click", function() {
        document.querySelector("#top-menu button").innerText = "主页";
        document.querySelector("#top-menu button:nth-of-type(2)").innerText = "24/7服务热线";
        document.querySelector(".mid-title h2").textContent = "取消和搬迁程序";
        document.querySelector(".mid-subtitle h3").innerText = "致希望取消合同和搬迁的客户\n\n非常感谢您选择住在由埼玉丸山工程管理的大楼中。";
        document.querySelector("#flex-title-left").textContent = "合同取消申请"; 
        document.querySelector(".flex-text-left").innerText = "一旦您决定搬迁，您需要申请合同取消。您可以在线申请（通过取消申请表）或书面申请（邮寄您在首次签订租赁合同时收到的取消通知）。\n很遗憾，电话请求不能作为取消通知。";
        document.querySelector(".text-badge p").textContent = "取消和搬迁程序"; 
        document.querySelector(".flow-text p").textContent = '如果[取消接受日期 *¹]和"搬迁日期"之间的时间少于[取消通知期 *²]，您将负责从[取消接受日期 *¹]到[取消通知期 *²]之后的租金，因此请提前完成程序。程序将按照租赁合同进行。';
        document.querySelector(".flow-asterisk-list li").textContent = '*1: "取消接受日期"：如果您在线申请，将是您的申请被接受的日期。如果您书面申请，将是您的取消通知（明信片）的邮戳日期。';
        document.querySelector('.flow-asterisk-list li:nth-of-type(2)').innerText = '\n*2: "终止通知期"：租赁协议中规定的终止通知期（1个月、2个月等）。';
        document.querySelector("#annotation").textContent = "请使用以下方法之一申请"; 
        document.querySelector(".apply-button span").textContent = "通过互联网申请取消"; 
        document.querySelector(".apply-button:nth-of-type(2) span").textContent = "通过纸质表格申请取消";
        document.querySelector(".bottom-menu-content p").textContent = "株式会社 埼玉丸山工務所"; 
        document.querySelector(".bottom-menu-content p:nth-of-type(3)").textContent = "埼玉県さいたま市大宮区大成町1-518-2";
        document.querySelector(".bottom-menu-content p:nth-of-type(4)").textContent = "营业时间：09:00 〜 18:00";
        document.querySelector(".bottom-menu-content p:nth-of-type(5)").textContent = "休息日：周二和周三。";
    });
});