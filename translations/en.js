window.onload = function() {
    document.getElementById("langEn").addEventListener("click", function() {
        document.getElementById("formTitle").textContent = "Contract cancellation form";
        document.getElementById("explanation-top").textContent = "If you wish to cancel your contract, please apply for cancellation through this form.\nFor items such as your new address that are not yet decided, please fill in “Undecided”.\nAfter we receive your cancellation, we will contact you at the phone number you provided.";
        document.getElementById("explanation-bottom").textContent = "Shortest cancellation date: 2 months or 1 month (please check your contract).\nFor example: If applied on July 21st, the cancellation would be on September 21st (in case of 2 months advance notice) or August 21st (in case of 2 months advance notice).";
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


    }, 100);
};