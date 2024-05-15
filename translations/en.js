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
        document.getElementById("parking-number-comment").textContent = "For customers who rent a parking space or a storage unit, please fill this in. If you are not, please leave this field empty";
        document.getElementById("phone-number-label").textContent = "Phone number";
        document.getElementById("phone-number").placeholder = "e.g. +81-80-8743-4126";
        document.getElementById("phone-number-comment").textContent = "Please provide a phone number of the preson that currently lives in the unit. We will contact you to confirm your moving out date and time.";
        document.getElementById("move-out-date-label").textContent = "Moving out date";
        document.getElementById("move-out-date-comment").innerText = "On this day our representative will visit the unit to check the overall condition and collect the keys. \nPlease note that after this, you will no longer be able to enter the unit.";
        document.getElementById("move-out-time-label").textContent = "Moving out time";
        document.getElementById("move-out-time-comment").textContent = "If possible, please specify the time, when our representative can visit you on the moving out day. If you not sure about the time at the moment, please leave this field blank and we will contact you later, to confirm the time.";
        document.getElementById("reason-legend").textContent = "8. Reason for moving out";
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
        document.getElementById("address-label").textContent = "Moving address";
        document.getElementById("address").placeholder = "1-518-2 Onaricho, Omiya Ward, Saitama City, Saitama Prefecture";
        document.getElementById("address-comment").textContent = "* The address mightbe used for sending the documents or cancelation settlement transfer.";
        document.getElementById("bank-account-label").textContent = "Bank account number";
        document.getElementById("bank-account").textContent = "Example: Saitama Resona Bank, Omiya Nishi Branch, Normal 1474654";
        document.getElementById("bank-account-comment").textContent = "* This account will be used to transfer canselation settlement or security deposit.";
        document.getElementById("bank-name-label").textContent = "Bank account holder's name.";
        document.getElementById("bank-name").textContent = "Example: John Doe";
        document.getElementById("bank-name-comment").textContent = "* Please fill in the name of account holder, as stated in your contract with the bank (usually katakana).";
        document.getElementById("comment-label").textContent = "Did you experience any problems during your stay?";
        document.getElementById("comment-comment").textContent = "* If there is any problems that might affected your decision to move out, please let us know about it.";
        document.getElementById("satisfaction-legend").textContent = " 13. Please let us know how satisfied were you with our services.";
        document.querySelector("label[for='terrible']").textContent = "Not satisfied";
        document.querySelector("label[for='bad']").textContent = "Somewhat unsatisfied";
        document.querySelector("label[for='ok']").textContent = "Normal";
        document.querySelector("label[for='good']").textContent = "Somewhat satisfied";
        document.querySelector("label[for='great']").textContent = "Very satisfied";
        document.getElementById("explanation-label").textContent = "If you answered 'Somewhat unsatisfied' or 'Not satisfied' in the above question, please let us know the reason.";
        document.getElementById("explanation-comment").textContent = "We appreciate your feedback.";
        document.getElementById("wishes-label").textContent = "Is there any facility or service you wish we provided during your stay?";
        document.getElementById("wishes-comment").textContent = "We appreciate your feedback.";
        document.getElementById("other-label").textContent = "If you have any other comments, anything you wish to share, please feel free to fill it in here.";
        document.getElementById("other-comment").textContent = "We appreciate your feedback.";
        document.getElementsByClassName("submit-button")[0].textContent = "Submit";
        document.getElementById("privacy-policy").textContent = "Privacy policy";
        document.getElementsByClassName("confirmation-title").textContent = "Confirm input";
        document.getElementsByClassName("confirmation-subtitle").textContent = "Please confirm your input to the form.";
        document.getElementById("contractor-name-confirm").textContent = "Contractor Name";
        document.getElementById("property-name-confirm").textContent = "Name of the property (building/parking)";

        //Confirmation section

        document.getElementsByClassName("confirmation-title")[0].textContent = "Entry confirmation";
        document.getElementsByClassName("confirmation-subtitle")[0].textContent = "Please check the information before submitting";
        document.getElementById("contractor-name-confirm").textContent = "Contractor Name";
        document.getElementById("property-name-confirm").textContent = "Name of the property";
        document.getElementById("room-number-confirm").textContent = "Room number";
        document.getElementById("parking-number-confirm").textContent = "Parking space number / storage unit number";
        document.getElementById("phone-number-confirm").textContent = "Phone number";
        document.getElementById("move-out-date-confirm").textContent = "Moving out date";
        document.getElementById("move-out-time-confirm").textContent = "Moving out time";
        document.getElementById("reason-confirm").textContent = "Reason for moving out";
        document.getElementById("address-confirm").textContent = "Moving address";
        document.getElementById("bank-account-confirm").textContent = "Bank account number";
        document.getElementById("bank-name-confirm").textContent = "Bank account holder's name.";
        document.getElementById("comment-confirm").textContent = "Did you experience any problems during your stay?";
        document.getElementById("satisfaction-confirm").textContent = "Please let us know how satisfied were you with our services.";
        document.getElementById("explanation-confirm").textContent = "If you answered 'Somewhat unsatisfied' or 'Not satisfied' in the above question, please let us know the reason.";
        document.getElementById("wishes-confirm").textContent = "Is there any facility or service you wish we provided during your stay?";
        document.getElementById("other-confirm").textContent = "If you have any other comments, anything you wish to share, please feel free to fill it in here.";

        //Lifeline section

        document.getElementById("lifeline-title").textContent = "Procedure for moving out and cancellation";
        document.getElementById("lifeline-section-1-title").textContent = "1. Preparation for moving out";
        document.getElementById("lifeline-section-1-subtitle").textContent = "We ask the tenant to contact utility providers for the settlement of electricity, gas, and water bills. Please contact utility providers at least 4-5 days before the move-out date, and come to the room on the move-out date to settle the usage fee. Please prepare a receipt or meter reading ticket number so that the other party can understand immediately. Please contact us early, especially around the period from February to April.";
        document.getElementById("lifeline-electricity").textContent = "Electricity";
        document.getElementById("electricity-provider").textContent = "Tokyo Electric Power Co., Ltd. Customer Center";
        document.getElementById("lifeline-gas").textContent = "Gas";
        document.getElementById("gas-provider").textContent = "Tokyo Gas Customer Center";
        document.getElementById("lifeline-water").textContent = "Water";
        document.getElementById("water-provider").textContent = "Saitama City Waterworks Bureau";
        document.getElementById("lifeline-phone").textContent = "Phone";
        document.getElementById("lifeline-post").textContent = "Post office";
        document.getElementById("post-provider").textContent = "Please proceed with the moving procedure at the nearest post office counter.";
        document.getElementById("post-phone").textContent = "Online application (external site)";
        document.getElementById("lifeline-section-2-title").textContent = "2. Payment of rent and return of security deposit";
        document.getElementById("lifeline-section-2-subtitle").textContent = "Please pay up to the month of moving out by the end of the previous month. We will settle at the time of returning the security deposit. From the security deposit, we will settle based on the burden standard of maintenance costs, etc., and return it by bank transfer at a later date.";
        document.getElementById("lifeline-section-3-title").textContent = "3. What to prepare when moving out";
        document.getElementById("lifeline-section-3-subtitle").textContent = "① Moving destination (address, phone number)\n② Transfer account information\n③ Key (including spare key)\n④ Move-in guide(入居のしおり)";
        document.getElementById("lifeline-section-4-title").textContent = "4. For those who have CHUBB (エース) insurance";
        document.getElementById("lifeline-section-4-subtitle").textContent = "Please request the insurance cancellation procedure by the contract the guarantor company directly.";
        document.getElementById("lifeline-guarantor").textContent = "Insurance";
        document.getElementById("guarantor-provider").textContent = "CHUBB Insurance Support Center";
        document.getElementById("lifeline-section-5-title").textContent = "5. For those who have a bicycle";
        document.getElementById("lifeline-section-5-subtitle").textContent = "Please bring your bicycle to the moving destination or dispose of it properly by yourself.";
        document.getElementById("moving-out-confirmation-contact").textContent = "※ We will confirm the meeting date and time from the contractor, so please cooperate.";
        
        //Buttons

        document.getElementById("confirm-button").textContent = "Confirm entry";
        document.getElementById("edit-button").textContent = "Edit entry";

        //Privacy policy

        document.getElementById("privacy-policy-link").innerText = "Privacy policy";

        //Footer

        document.getElementById("office-hours").textContent = "Business hours: 09:00 〜 18:00; Day off: Wednesday";
        
    });
});