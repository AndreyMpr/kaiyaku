window.addEventListener("load", function() {
    document.getElementById("langVn").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "Mẫu tiếp nhận hủy bỏ";
        document.getElementById("explanation-top").innerText = "Nếu bạn muốn hủy hợp đồng của mình, vui lòng đăng ký hủy thông qua biểu mẫu này.\nĐối với các mục như địa chỉ mới của bạn chưa được quyết định, vui lòng điền vào “Chưa quyết định”.\nSau khi chúng tôi nhận được yêu cầu hủy của bạn, chúng tôi sẽ liên hệ với bạn theo địa chỉ số điện thoại bạn đã cung cấp.";
        document.getElementById("explanation-bottom").innerText = "Ngày hủy ngắn nhất: 2 tháng hoặc 1 tháng (vui lòng kiểm tra hợp đồng của bạn).\nVí dụ: Nếu áp dụng vào ngày 21 tháng 7, việc hủy sẽ là vào ngày 21 tháng 9 (trong trường hợp báo trước 2 tháng) hoặc ngày 21 tháng 8 (trong trường hợp 2 tháng) báo trước hàng tháng).";
        document.getElementById("contractor-name-label").textContent = "Tên nhà thầu";
        document.getElementById("contractor-name").placeholder = "vd. Anh Dương";
        document.getElementById("contractor-name-comment").textContent = "*Vui lòng nhập tên bên ký hợp đồng như ghi trên hợp đồng.";
        document.getElementById("property-name-label").textContent = "Tên tài sản";
        document.getElementById("property-name").placeholder = "Ví dụ: 桜木マンション";
        document.getElementById("property-name-comment").textContent = "※Vui lòng nhập tên tòa nhà được ghi trong hợp đồng của bạn.";
        document.getElementById("room-number-label").textContent = "Số phòng";
        document.getElementById("room-number").placeholder = "Ví dụ: 101";
        document.getElementById("room-number-comment").textContent = "※Vui lòng nhập số phòng được ghi trong hợp đồng của bạn.";
        document.getElementById("parking-number-label").textContent = "Bãi đỗ xe・№";
        document.getElementById("parking-number").placeholder = "Ví dụ: 01";
        document.getElementById("parking-number-comment").textContent = "※Đối với khách hàng muốn hủy bãi đỗ xe độc lập, bãi đỗ xe (bao gồm cả chỗ đỗ xe máy) hoặc kho chứa đồ không có hợp đồng phòng.";
        document.getElementById("phone-number-label").textContent = "Số điện thoại";
        document.getElementById("phone-number").placeholder = "Ví dụ: 048-729-8661";
        document.getElementById("phone-number-comment").textContent = "※Vui lòng nhập số điện thoại của người thuê trọ.";
        document.getElementById("move-out-date-label").textContent = "Ngày dự kiến ​​di dời (ngày họp)";
        document.getElementById("move-out-date-comment").innerText = "※Người thuê và chủ nhà sẽ cùng nhau xác nhận tình trạng phòng sau khi di dời.\nKiểm tra vết bẩn và vết trầy trên phòng, nếu cần sửa chữa, họ sẽ thảo luận về việc ai sẽ chịu phí sửa chữa.";
        document.getElementById("move-out-time-label").textContent = "Thời gian mong muốn cho cuộc họp";
        document.getElementById("move-out-time-comment").textContent = "※Vui lòng nhập tên tòa nhà được ghi trong hợp đồng của bạn.";
        document.getElementById("reason-legend").textContent = "8. Lý do di dời";
        document.getElementById("reason-comment").textContent = "※Nếu không có vấn đề gì, hãy cho chúng tôi biết lý do bạn chuyển nhà.";
        document.querySelector("label[for='work']").textContent = "Vì công việc";
        document.querySelector("label[for='school']").textContent = "Tốt nghiệp / Tiếp tục học";
        document.querySelector("label[for='house']").textContent = "Mua nhà riêng";
        document.querySelector("label[for='small']").textContent = "Chật chội";
        document.querySelector("label[for='parents']").textContent = "Trở về nhà bố mẹ";
        document.querySelector("label[for='marriage']").textContent = "Kết hôn";
        document.querySelector("label[for='malfunction']").textContent = "Không hài lòng với cơ sở / quản lý";
        document.querySelector("label[for='far']").textContent = "Giao thông không thuận tiện";
        document.querySelector("label[for='neighbour']").textContent = "Rắc rối với hàng xóm";
        document.querySelector("label[for='fieldset-other']").textContent = "Khác";
        document.getElementById("fieldset-other").placeholder = "Vì chuyển công tác ra tỉnh khác";
        document.getElementById("address-label").textContent = "Địa chỉ di chuyển";
        document.getElementById("address").placeholder = "1-518-2 Oseicho, Omiya Ward, Saitama City, Saitama Prefecture";
        document.getElementById("address-comment").textContent = "* Địa chỉ có thể được sử dụng để gửi các tài liệu hoặc chuyển khoản thanh toán hủy bỏ.";
        document.getElementById("bank-account-label").textContent = "Tài khoản hoàn trả tiền đặt cọc, v.v.";
        document.getElementById("bank-account").textContent = "Ví dụ: Ngân hàng Resona Saitama Omiya Nishi Chi nhánh Bình thường 1474654";
        document.getElementById("bank-account-comment").textContent = "* Tài khoản này sẽ được sử dụng để chuyển khoản thanh toán hủy bỏ hoặc tiền đặt cọc.";
        document.getElementById("bank-name-label").textContent = "Tên tài khoản";
        document.getElementById("bank-name").textContent = "Ví dụ: カ）サイタママルヤマコウムショ";
        document.getElementById("bank-name-comment").textContent = "* Vui lòng điền tên chủ tài khoản, như được ghi trong hợp đồng của bạn với ngân hàng (thông thường là katakana).";
        document.getElementById("comment-label").textContent = "Có vấn đề gì xảy ra trong thời gian bạn ở không?";
        document.getElementById("comment-comment").textContent = "* Nếu có bất kỳ vấn đề nào có thể ảnh hưởng đến quyết định chuyển đi của bạn, vui lòng cho chúng tôi biết về nó.";
        document.getElementById("satisfaction-legend").textContent = " 13. Hãy cho chúng tôi biết mức độ hài lòng của bạn với công ty quản lý căn hộ Maruyama";
        document.querySelector("label[for='terrible']").textContent = "Không hài lòng";
        document.querySelector("label[for='bad']").textContent = "Hơi không hài lòng";
        document.querySelector("label[for='ok']").textContent = "Bình thường";
        document.querySelector("label[for='good']").textContent = "Hơi hài lòng";
        document.querySelector("label[for='great']").textContent = "Rất hài lòng";
        document.getElementById("explanation-label").textContent = "Nếu bạn đã trả lời 'Hơi không hài lòng' hoặc 'Không hài lòng' trong câu hỏi trên, hãy cho chúng tôi biết lý do.";
        document.getElementById("explanation-comment").textContent = "Chúng tôi đánh giá cao phản hồi của bạn.";
        document.getElementById("wishes-label").textContent = "Có cơ sở hoặc dịch vụ nào bạn mong muốn không?";
        document.getElementById("wishes-comment").textContent = "Chúng tôi đánh giá cao phản hồi của bạn.";
        document.getElementById("other-label").textContent = "Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng tự do điền vào.";
        document.getElementById("other-comment").textContent = "Chúng tôi đánh giá cao phản hồi của bạn.";
        document.getElementsByClassName("submit-button")[0].textContent = "Đăng ký";
        document.getElementById("privacy-policy").textContent = "Chính sách bảo vệ thông tin cá nhân";
        document.getElementById("office-hours").textContent = "(Giờ làm việc: 09:00 ~ 18:00; \nĐóng cửa: Thứ Ba và Thứ Tư)";


        //Confirmation section

        document.getElementsByClassName("confirmation-title")[0].textContent = "Xác nhận nhập cửa";
        document.getElementsByClassName("confirmation-subtitle")[0].textContent = "Vui lòng kiểm tra thông tin trước khi gửi";
        document.getElementById("contractor-name-confirm").textContent = "Tên nhà thầu";
        document.getElementById("property-name-confirm").textContent = "Tên tài sản";
        document.getElementById("room-number-confirm").textContent = "Số phòng";
        document.getElementById("parking-number-confirm").textContent = "Bãi đỗ xe・№";
        document.getElementById("phone-number-confirm").textContent = "Số điện thoại";
        document.getElementById("move-out-date-confirm").textContent = "Ngày dự kiến ​​di dời (ngày họp)";
        document.getElementById("move-out-time-confirm").textContent = "Thời gian mong muốn cho cuộc họp";
        document.getElementById("reason-confirm").textContent = "Lý do di dời";
        document.getElementById("address-confirm").textContent = "Địa chỉ di chuyển";
        document.getElementById("bank-account-confirm").textContent = "Tài khoản hoàn trả tiền đặt cọc, v.v.";
        document.getElementById("bank-name-confirm").textContent = "Tên tài khoản";
        document.getElementById("comment-confirm").textContent = "Có vấn đề gì xảy ra trong thời gian bạn ở không?";
        document.getElementById("satisfaction-confirm").textContent = "Hãy cho chúng tôi biết mức độ hài lòng của bạn với công ty quản lý căn hộ Maruyama";
        document.getElementById("explanation-confirm").textContent = "Nếu bạn đã trả lời 'Hơi không hài lòng' hoặc 'Không hài lòng' trong câu hỏi trên, hãy cho chúng tôi biết lý do.";
        document.getElementById("wishes-confirm").textContent = "Có cơ sở hoặc dịch vụ nào bạn mong muốn không?";
        document.getElementById("other-confirm").textContent = "Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng tự do điền vào.";

        //Lifeline section

        document.getElementById("lifeline-title").textContent = "Thủ tục chuyển đi và hủy bỏ";
        document.getElementById("lifeline-section-1-title").textContent = "1. Chuẩn bị chuyển đi";
        document.getElementById("lifeline-section-1-subtitle").textContent = "Chúng tôi yêu cầu người thuê liên hệ với các nhà cung cấp dịch vụ tiện ích để thanh toán hóa đơn điện, gas và nước. Vui lòng liên hệ với các nhà cung cấp dịch vụ tiện ích ít nhất 4-5 ngày trước ngày chuyển đi, và đến phòng vào ngày chuyển đi để thanh toán phí sử dụng. Vui lòng chuẩn bị biên lai hoặc số vé đọc số công tơ để bên kia có thể hiểu ngay lập tức. Vui lòng liên hệ sớm, đặc biệt là vào khoảng thời gian từ tháng 2 đến tháng 4.";
        document.getElementById("lifeline-electricity").textContent = "Điện";
        document.getElementById("electricity-provider").textContent = "Trung tâm khách hàng Công ty Điện lực Tokyo";
        document.getElementById("lifeline-gas").textContent = "Gas";
        document.getElementById("gas-provider").textContent = "Trung tâm khách hàng Tokyo Gas";
        document.getElementById("lifeline-water").textContent = "Nước";
        document.getElementById("water-provider").textContent = "Cục Cấp nước Thành phố Saitama";
        document.getElementById("lifeline-phone").textContent = "Điện thoại";
        document.getElementById("lifeline-post").textContent = "Bưu điện";
        document.getElementById("post-provider").textContent = "Vui lòng tiến hành thủ tục chuyển nhà tại quầy giao dịch bưu điện gần nhất.";
        document.getElementById("post-phone").textContent = "Ứng dụng trực tuyến (trang web bên ngoài)";
        document.getElementById("lifeline-section-2-title").textContent = "2. Thanh toán tiền thuê và trả lại tiền đặt cọc";
        document.getElementById("lifeline-section-2-subtitle").textContent = "Vui lòng thanh toán đến tháng chuyển đi vào cuối tháng trước. Chúng tôi sẽ thanh toán vào thời điểm trả lại tiền đặt cọc. Từ tiền đặt cọc, chúng tôi sẽ thanh toán dựa trên tiêu chuẩn gánh nặng của chi phí bảo dưỡng, v.v., và trả lại bằng chuyển khoản ngân hàng vào một ngày sau.";
        document.getElementById("lifeline-section-3-title").textContent = "3. Những gì cần chuẩn bị khi chuyển đi";
        document.getElementById("lifeline-section-3-subtitle").textContent = "① Điểm đến chuyển đến (địa chỉ, số điện thoại)\n② Thông tin tài khoản chuyển khoản\n③ Chìa khóa (bao gồm cả chìa khóa dự phòng)\n④ Hướng dẫn di chuyển (入居のしおり)";
        document.getElementById("lifeline-section-4-title").textContent = "4. Đối với những người có bảo hiểm CHUBB (エース)";
        document.getElementById("lifeline-section-4-subtitle").textContent = "Vui lòng yêu cầu thủ tục hủy bảo hiểm bằng hợp đồng công ty bảo lãnh trực tiếp.";
        document.getElementById("lifeline-guarantor").textContent = "Bảo hiểm";
        document.getElementById("guarantor-provider").textContent = "Trung tâm Hỗ trợ Bảo hiểm CHUBB";
        document.getElementById("lifeline-section-5-title").textContent = "5. Đối với những người có xe đạp";
        document.getElementById("lifeline-section-5-subtitle").textContent = "Vui lòng mang xe đạp của bạn đến điểm đến chuyển đến hoặc tự tiêu hủy nó một cách đúng cách.";
        document.getElementById("moving-out-confirmation-contact").textContent = "※ Chúng tôi sẽ xác nhận ngày và giờ hẹn từ nhà thầu, vì vậy vui lòng hợp tác.";
        
        //Buttons

        document.getElementById("confirm-button").textContent = "Xác nhận";
        document.getElementById("edit-button").textContent = "Chỉnh sửa";        

        //Privacy policy

        document.getElementById("privacy-policy-link").innerText = "Chính sách bảo mật";

        //Footer

        document.getElementById("office-hours").textContent = "Giờ mở cửa: 09:00 〜 18:00; Ngày nghỉ: Thứ Tư";

    });
});