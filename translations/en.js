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


    }, 100);
};