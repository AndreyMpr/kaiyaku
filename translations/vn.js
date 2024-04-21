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
        document.getElementById("reason-legend").textContent = "Lý do di dời";
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
        document.getElementById("satisfaction-legend").textContent = "Hãy cho chúng tôi biết mức độ hài lòng của bạn với công ty quản lý căn hộ Maruyama";
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

        //Confirmation section

        document.getElementById("contractor-name-confirm").textContent = "Tên nhà thầu";
        document.getElementById("property-name-confirm").textContent = "Tên tài sản";
        document.getElementById("room-number-confirm").textContent = "Số phòng";
        document.getElementById("parking-number-confirm").textContent = "Bãi đỗ xe・№";
        document.getElementById("phone-number-confirm").textContent = "Số điện thoại";
        document.getElementById("move-out-date-confirm").textContent = "Ngày dự kiến ​​di dời (ngày họp)";
        document.getElementById("move-out-time-confirm").textContent = "Thời gian mong muốn cho cuộc họp";
        document.getElementById("reason-legend-confirm").textContent = "Lý do di dời";
        document.getElementById("address-confirm").textContent = "Địa chỉ di chuyển";
        document.getElementById("bank-account-confirm").textContent = "Tài khoản hoàn trả tiền đặt cọc, v.v.";
        document.getElementById("bank-name-confirm").textContent = "Tên tài khoản";
        document.getElementById("comment-confirm").textContent = "Có vấn đề gì xảy ra trong thời gian bạn ở không?";
        document.getElementById("satisfaction-confirm").textContent = "Hãy cho chúng tôi biết mức độ hài lòng của bạn với công ty quản lý căn hộ Maruyama";
        document.getElementById("explanation-confirm").textContent = "Nếu bạn đã trả lời 'Hơi không hài lòng' hoặc 'Không hài lòng' trong câu hỏi trên, hãy cho chúng tôi biết lý do.";
        document.getElementById("wishes-confirm").textContent = "Có cơ sở hoặc dịch vụ nào bạn mong muốn không?";
        document.getElementById("other-confirm").textContent = "Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng tự do điền vào.";

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