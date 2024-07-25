/*
//New new script

const goToConfirmation = document.getElementById("kaiyakuForm");

function confirmInput(confirmationEvent) {
    confirmationEvent.preventDefault();

    // Get the form input

    let contractorName = document.getElementById("contractor-name").value;
    let propertyName = document.getElementById("property-name").value;
    let roomNumber = document.getElementById("room-number").value;
    let parkingNumber = document.getElementById("parking-number").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let moveOutDate = document.getElementById("move-out-date").value;
    let moveOutTime = document.getElementById("move-out-time").value;  
    let reason = document.querySelector('input[name="reason"]:checked').value;
    let reasonOther = document.getElementById("fieldset-other").value;
    let address = document.getElementById("address").value;
    let bankAccount = document.getElementById("bank-account").value;
    let bankAccountName = document.getElementById("bank-name").value;
    let comment = document.getElementById("comment").value;
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    let explanation = document.getElementById("explanation").value;
    let wishes = document.getElementById("wishes").value;
    let other = document.getElementById("other").value;
    let jumpUp = document.getElementById("top-anchor");

    if (reasonOther.trim()) {reason = reasonOther};

    // Display the form values in the confirmation section

    document.getElementById("confirmation-contractor-name").innerText = contractorName;
    document.getElementById("confirmation-property-name").innerText = propertyName;
    document.getElementById("confirmation-room-number").innerText = roomNumber;
    document.getElementById("confirmation-parking-number").innerText = parkingNumber ? parkingNumber : "-";
    document.getElementById("confirmation-phone-number").innerText = phoneNumber;
    document.getElementById("confirmation-move-out-date").innerText = moveOutDate;
    document.getElementById("confirmation-move-out-time").innerText = moveOutTime ? moveOutTime : "-";
    document.getElementById("confirmation-reason").innerText = reason ? reason : "-";
    document.getElementById("confirmation-address").innerText = address ? address : "-";
    document.getElementById("confirmation-bank-account").innerText = bankAccount;
    document.getElementById("confirmation-bank-name").innerText = bankAccountName;
    document.getElementById("confirmation-comment").innerText = comment ? comment : "-";
    document.getElementById("confirmation-satisfaction").innerText = satisfaction ? satisfaction : "-";
    document.getElementById("confirmation-explanation").innerText = explanation ? explanation : "-";
    document.getElementById("confirmation-wishes").innerText = wishes ? wishes : "-";
    document.getElementById("confirmation-other").innerText = other ? other : "-";

    document.querySelector("#formBody").style.display = "none";
    document.querySelector(".confirmation-parent").style.display = "block";
    jumpUp.scrollIntoView({ behavior: "smooth" });

    // Pass the form values to the createDataAndFetch function

    createDataAndFetch(
        contractorName,
        propertyName,
        roomNumber,
        parkingNumber,
        phoneNumber,
        moveOutDate,
        moveOutTime,
        reason,
        address,
        bankAccount,
        bankAccountName,
        comment,
        satisfaction,
        explanation,
        wishes,
        other);
}

goToConfirmation.addEventListener("submit", confirmInput);

//Confirmation block buttons

const editSubmission = document.getElementById("edit-button");

editSubmission.addEventListener('click', function() {
    document.querySelector(".confirmation-parent").style.display = "none";
    document.querySelector("#formBody").style.display = "block";
    document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
});

const confirmSubmission = document.getElementById("confirm-button");

confirmSubmission.addEventListener('click', function() {
    document.querySelector(".confirmation-parent").style.display = "none";
    document.querySelector(".lifeline-parent").style.display = "block";
    document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
});

function createDataAndFetch(
    contractorName,
    propertyName,
    roomNumber,
    parkingNumber,
    phoneNumber,
    moveOutDate,
    moveOutTime,
    reason,
    address,
    bankAccount,
    bankAccountName,
    comment,
    satisfaction,
    explanation,
    wishes,
    other) {
    const data = {
        contractorName: contractorName,
        propertyName: propertyName,
        roomNumber: roomNumber,
        parkingNumber: parkingNumber,
        phoneNumber: phoneNumber,
        moveOutDate: moveOutDate,
        moveOutTime: moveOutTime,
        reason: reason,
        address: address,
        bankAccount: bankAccount,
        bankAccountName: bankAccountName,
        comment: comment,
        satisfaction: satisfaction,
        explanation: explanation,
        wishes: wishes,
        other: other,
    };

    fetch('includes/submit-form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
*/

const goToConfirmation = document.getElementById("kaiyakuForm");

function confirmInput(confirmationEvent) {
    confirmationEvent.preventDefault();

    // Get the form input
    let contractorName = document.getElementById("contractor-name").value;
    let propertyName = document.getElementById("property-name").value;
    let roomNumber = document.getElementById("room-number").value;
    let parkingNumber = document.getElementById("parking-number").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let moveOutDate = document.getElementById("move-out-date").value;
    let moveOutTime = document.getElementById("move-out-time").value;  
    let reason = document.querySelector('input[name="reason"]:checked').value;
    let reasonOther = document.getElementById("fieldset-other").value;
    let address = document.getElementById("address").value;
    let bankAccount = document.getElementById("bank-account").value;
    let bankAccountName = document.getElementById("bank-name").value;
    let comment = document.getElementById("comment").value;
    let satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    let explanation = document.getElementById("explanation").value;
    let wishes = document.getElementById("wishes").value;
    let other = document.getElementById("other").value;
    let jumpUp = document.getElementById("top-anchor");

    if (reasonOther.trim()) {reason = reasonOther};

    // Display the form values in the confirmation section
    document.getElementById("confirmation-contractor-name").innerText = contractorName;
    document.getElementById("confirmation-property-name").innerText = propertyName;
    document.getElementById("confirmation-room-number").innerText = roomNumber;
    document.getElementById("confirmation-parking-number").innerText = parkingNumber ? parkingNumber : "-";
    document.getElementById("confirmation-phone-number").innerText = phoneNumber;
    document.getElementById("confirmation-move-out-date").innerText = moveOutDate;
    document.getElementById("confirmation-move-out-time").innerText = moveOutTime ? moveOutTime : "-";
    document.getElementById("confirmation-reason").innerText = reason ? reason : "-";
    document.getElementById("confirmation-address").innerText = address ? address : "-";
    document.getElementById("confirmation-bank-account").innerText = bankAccount;
    document.getElementById("confirmation-bank-name").innerText = bankAccountName;
    document.getElementById("confirmation-comment").innerText = comment ? comment : "-";
    document.getElementById("confirmation-satisfaction").innerText = satisfaction ? satisfaction : "-";
    document.getElementById("confirmation-explanation").innerText = explanation ? explanation : "-";
    document.getElementById("confirmation-wishes").innerText = wishes ? wishes : "-";
    document.getElementById("confirmation-other").innerText = other ? other : "-";

    document.querySelector("#formBody").style.display = "none";
    document.querySelector(".confirmation-parent").style.display = "block";
    jumpUp.scrollIntoView({ behavior: "smooth" });
}

goToConfirmation.addEventListener("submit", confirmInput);

// Confirmation block buttons
const editSubmission = document.getElementById("edit-button");

editSubmission.addEventListener('click', function() {
    document.querySelector(".confirmation-parent").style.display = "none";
    document.querySelector("#formBody").style.display = "block";
    document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
});

const confirmSubmission = document.getElementById("confirm-button");

confirmSubmission.addEventListener('click', function() {
    // Get the form input again
    let contractorName = document.getElementById("contractor-name").innerText;
    let propertyName = document.getElementById("confirmation-property-name").innerText;
    let roomNumber = document.getElementById("confirmation-room-number").innerText;
    let parkingNumber = document.getElementById("confirmation-parking-number").innerText;
    let phoneNumber = document.getElementById("confirmation-phone-number").innerText;
    let moveOutDate = document.getElementById("confirmation-move-out-date").innerText;
    let moveOutTime = document.getElementById("confirmation-move-out-time").innerText;
    let reason = document.getElementById("confirmation-reason").innerText;
    let address = document.getElementById("confirmation-address").innerText;
    let bankAccount = document.getElementById("confirmation-bank-account").innerText;
    let bankAccountName = document.getElementById("confirmation-bank-name").innerText;
    let comment = document.getElementById("confirmation-comment").innerText;
    let satisfaction = document.getElementById("confirmation-satisfaction").innerText;
    let explanation = document.getElementById("confirmation-explanation").innerText;
    let wishes = document.getElementById("confirmation-wishes").innerText;
    let other = document.getElementById("confirmation-other").innerText;

    createDataAndFetch(
        contractorName,
        propertyName,
        roomNumber,
        parkingNumber,
        phoneNumber,
        moveOutDate,
        moveOutTime,
        reason,
        address,
        bankAccount,
        bankAccountName,
        comment,
        satisfaction,
        explanation,
        wishes,
        other
    );

    document.querySelector(".confirmation-parent").style.display = "none";
    document.querySelector(".lifeline-parent").style.display = "block";
    document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
});

function createDataAndFetch(
    contractorName,
    propertyName,
    roomNumber,
    parkingNumber,
    phoneNumber,
    moveOutDate,
    moveOutTime,
    reason,
    address,
    bankAccount,
    bankAccountName,
    comment,
    satisfaction,
    explanation,
    wishes,
    other) {
    const data = {
        contractorName: contractorName,
        propertyName: propertyName,
        roomNumber: roomNumber,
        parkingNumber: parkingNumber,
        phoneNumber: phoneNumber,
        moveOutDate: moveOutDate,
        moveOutTime: moveOutTime,
        reason: reason,
        address: address,
        bankAccount: bankAccount,
        bankAccountName: bankAccountName,
        comment: comment,
        satisfaction: satisfaction,
        explanation: explanation,
        wishes: wishes,
        other: other,
    };

    fetch('includes/submit-form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}