window.addEventListener("load", function() {
    document.getElementById("langVn").addEventListener("click", function() {
        document.querySelector(".mid-title h2").textContent = "Thủ tục hủy bỏ và chuyển đi";
        document.querySelector(".mid-subtitle h3").innerText = "Gửi đến khách hàng muốn hủy hợp đồng và chuyển đi\n\nCảm ơn bạn rất nhiều vì đã chọn sống trong tòa nhà do Saitama Maruyama Engineering quản lý.";
        document.querySelector("#flex-title-left").textContent = "Yêu cầu hủy hợp đồng"; 
        document.querySelector(".flex-text-left").innerText = "Khi bạn quyết định chuyển đi, bạn cần phải nộp đơn xin hủy hợp đồng. Bạn có thể nộp đơn trực tuyến (thông qua mẫu đơn xin hủy) hoặc bằng văn bản (gửi thư thông báo hủy hợp đồng mà bạn nhận được khi ký hợp đồng thuê lần đầu tiên).\nRất tiếc, yêu cầu qua điện thoại không thể được chấp nhận như là thông báo hủy.";
        document.querySelector(".text-badge p").textContent = "Thủ tục hủy bỏ và chuyển đi"; 
        document.querySelector(".flow-text p").textContent = 'Nếu khoảng thời gian giữa [ngày chấp nhận hủy *¹] và "ngày chuyển đi" ít hơn [thời gian thông báo hủy *²], bạn sẽ phải chịu trách nhiệm về tiền thuê từ [ngày chấp nhận hủy *¹] cho đến sau [thời gian thông báo hủy *²], vì vậy hãy hoàn thành thủ tục trước thời hạn. Thủ tục sẽ được thực hiện theo hợp đồng thuê.';
        document.querySelector(".flow-asterisk-list li").textContent = '*1: "Ngày chấp nhận hủy": Nếu bạn nộp đơn trực tuyến, đó sẽ là ngày đơn của bạn được chấp nhận. Nếu bạn nộp đơn bằng văn bản, đó sẽ là ngày đóng dấu bưu điện của thông báo hủy (bưu thiếp).';
        document.querySelector('.flow-asterisk-list li:nth-of-type(2)').innerText = '\n*2: "Thời gian thông báo hủy": Thời gian thông báo hủy được ghi trong hợp đồng thuê (1 tháng, 2 tháng, v.v.).';
        document.querySelector("#annotation").textContent = "Vui lòng nộp đơn bằng một trong các phương pháp sau"; 
        document.querySelector(".apply-button span").textContent = "Nộp đơn hủy qua Internet"; 
        document.querySelector(".apply-button:nth-of-type(2) span").textContent = "Nộp đơn hủy qua mẫu giấy";
        document.querySelector(".bottom-menu-content p").textContent = "Saitama Maruyama Engineering"; 
        document.querySelector(".bottom-menu-content p:nth-of-type(3)").textContent = "Onari-cho-1-518-2, Omiya, thành phố Saitama, tỉnh Saitama";
        document.querySelector(".bottom-menu-content p:nth-of-type(4)").textContent = "Giờ làm việc: 09:00 〜 18:00";
        document.querySelector(".bottom-menu-content p:nth-of-type(5)").textContent = "Ngày nghỉ: Thứ Ba & Thứ Tư.";
    });
});