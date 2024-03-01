window.addEventListener("load", function() {
    document.getElementById("langVn").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "Mẫu tiếp nhận hủy bỏ";
        document.getElementById("explanation-top").textContent = "Nếu bạn muốn hủy hợp đồng của mình, vui lòng đăng ký hủy thông qua biểu mẫu này.\nĐối với các mục như địa chỉ mới của bạn chưa được quyết định, vui lòng điền vào “Chưa quyết định”.\nSau khi chúng tôi nhận được yêu cầu hủy của bạn, chúng tôi sẽ liên hệ với bạn theo địa chỉ số điện thoại bạn đã cung cấp.";
        document.getElementById("explanation-bottom").textContent = "Ngày hủy ngắn nhất: 2 tháng hoặc 1 tháng (vui lòng kiểm tra hợp đồng của bạn).\nVí dụ: Nếu áp dụng vào ngày 21 tháng 7, việc hủy sẽ là vào ngày 21 tháng 9 (trong trường hợp báo trước 2 tháng) hoặc ngày 21 tháng 8 (trong trường hợp 2 tháng) báo trước hàng tháng).";
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
        document.getElementById("move-out-date-comment").textContent = "On this day our representative will visit the unit to check the overall condition and collect the keys. Please note that after this, you will no longer be able to enter the unit.";
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

    }, 100);
});