const goToConfirmation = document.getElementById("kaiyakuForm");

function confirmInput(confirmationEvent) {

    confirmationEvent.preventDefault();

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

    /*from work open
    let formData = new FormData(goToConfirmation);
    fetch('submit-form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
    from work close*/
    
    document.querySelector(".confirmation-parent").style.display = "none";
    document.querySelector(".lifeline-parent").style.display = "block";
    document.getElementById("top-anchor").scrollIntoView({ behavior: "smooth" });
});