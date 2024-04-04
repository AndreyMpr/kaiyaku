const goToConfirmation = document.getElementById("kaiyakuForm");

function confirmInput(confirmationEvent) {

    confirmationEvent.preventDefault();

    const contractorName = document.getElementById("contractor-name").value;
    const propertyName = document.getElementById("property-name").value;
    const roomNumber = document.getElementById("room-number").value;
    const parkingNumber = document.getElementById("parking-number").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const moveOutDate = document.getElementById("move-out-date").value;
    const moveOutTime = document.getElementById("move-out-time").value;  
    let reason = document.querySelector('input[name="reason"]:checked').value;
    const reasonOther = document.getElementById("fieldset-other").value;
    const address = document.getElementById("address").value;
    const bankAccount = document.getElementById("bank-account").value;
    const bankAccountName = document.getElementById("bank-name").value;
    const comment = document.getElementById("comment").value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const explanation = document.getElementById("explanation").value;
    const wishes = document.getElementById("wishes").value;
    const other = document.getElementById("other").value;
    const jumpUp = document.getElementById("top-anchor");

    if (reasonOther.trim()) {reason = reasonOther};

    document.getElementById("confirmation-contractor-name").innerText = contractorName;
    document.getElementById("confirmation-property-name").innerText = propertyName;
    document.getElementById("confirmation-room-number").innerText = roomNumber;
    document.getElementById("confirmation-parking-number").innerText = parkingNumber ? contractorName : "-";
    document.getElementById("confirmation-phone-number").innerText = phoneNumber;
    document.getElementById("confirmation-move-out-date").innerText = moveOutDate;
    document.getElementById("confirmation-move-out-time").innerText = moveOutTime ? contractorName : "-";
    document.getElementById("confirmation-reason").innerText = reason ? contractorName : "-";
    document.getElementById("confirmation-address").innerText = address ? contractorName : "-";
    document.getElementById("confirmation-bank-account").innerText = bankAccount;
    document.getElementById("confirmation-bank-name").innerText = bankAccountName;
    document.getElementById("confirmation-comment").innerText = comment ? contractorName : "-";
    document.getElementById("confirmation-satisfaction").innerText = satisfaction ? contractorName : "-";
    document.getElementById("confirmation-explanation").innerText = explanation ? contractorName : "-";
    document.getElementById("confirmation-wishes").innerText = wishes ? contractorName : "-";
    document.getElementById("confirmation-other").innerText = other ? contractorName : "-";

    document.querySelector("#formBody").style.display = "none";
    document.querySelector(".confirmation-parent").style.display = "block";
    jumpUp.scrollIntoView({ behavior: "smooth" });
}

goToConfirmation.addEventListener("submit", confirmInput);

/*Confirmation block buttons*/

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