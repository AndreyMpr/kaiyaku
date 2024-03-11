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
        document.getElementById("phone-number-label").textContent = "Parking space number / storage unit number";
        document.getElementById("phone-number").placeholder = "e.g. +81-80-8743-4126";
        document.getElementById("phone-number-comment").textContent = "Please provide a phone number of the preson that currently lives in the unit. We will contact you to confirm your moving out date and time.";
        document.getElementById("move-out-date-label").textContent = "Moving out date";
        document.getElementById("move-out-date-comment").innerText = "On this day our representative will visit the unit to check the overall condition and collect the keys. \nPlease note that after this, you will no longer be able to enter the unit.";
        document.getElementById("move-out-time-label").textContent = "Moving out time";
        document.getElementById("move-out-time-comment").textContent = "If possible, please specify the time, when our representative can visit you on the moving out day. If you not sure about the time at the moment, please leave this field blank and we will contact you later, to confirm the time.";
        document.getElementById("reason-legend-text").textContent = "Reason for moving out";
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

        document.getElementById("address-label").textContent = "Địa chỉ di chuyển";
        document.getElementById("address").placeholder = "1-518-2 Oseicho, Omiya Ward, Saitama City, Saitama Prefecture";
        document.getElementById("address-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("bank-account-label").textContent = "Tài khoản hoàn trả tiền đặt cọc, v.v.";
        document.getElementById("bank-account").textContent = "Ví dụ: Ngân hàng Resona Saitama Omiya Nishi Chi nhánh Bình thường 1474654";
        document.getElementById("bank-account-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("bank-name-label").textContent = "Tên tài khoản";
        document.getElementById("bank-name").textContent = "Ví dụ: Ka） Saitamamaruyamakomusho";
        document.getElementById("bank-name-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("comment-label").textContent = "Có vấn đề gì xảy ra trong thời gian bạn ở không?";
        //document.getElementById("comment").textContent = "";
        document.getElementById("comment-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("satisfaction-legend").textContent = "Hãy cho chúng tôi biết mức độ hài lòng của bạn với công ty quản lý căn hộ Maruyama";
        document.querySelector("label[for='terrible']").textContent = "Không hài lòng";
        document.querySelector("label[for='bad']").textContent = "Hơi không hài lòng";
        document.querySelector("label[for='ok']").textContent = "Bình thường";
        document.querySelector("label[for='good']").textContent = "Hơi hài lòng";
        document.querySelector("label[for='great']").textContent = "Rất hài lòng";
        document.getElementById("explanation-label").textContent = "Nếu bạn đã trả lời 'Hơi không hài lòng' hoặc 'Không hài lòng' trong câu hỏi trên, hãy cho chúng tôi biết lý do.";
        //document.getElementById("explanation").textContent = "";
        document.getElementById("explanation-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("wishes-label").textContent = "Có cơ sở hoặc dịch vụ nào bạn mong muốn không?";
        //document.getElementById("wishes").textContent = "";
        document.getElementById("wishes-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementById("other-label").textContent = "Nếu bạn có bất kỳ câu hỏi nào khác, vui lòng tự do điền vào.";
        //document.getElementById("other").textContent = "";
        document.getElementById("other-comment").textContent = "※ Vui lòng điền tên của tòa nhà trong hợp đồng.";
        document.getElementsByClassName("submit-button")[0].textContent = "Đăng ký";
        document.getElementById("privacy-policy").textContent = "Chính sách bảo vệ thông tin cá nhân";

    }, 100);
});