function confirmInput() {

    const contractorName = document.getElementById("contractor-name").value;
    const propertyName = document.getElementById("property-name").value;
    const roomNumber = document.getElementById("room-number").value;
    const parkingNumber = document.getElementById("parking-number").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const moveOutDate = document.getElementById("move-out-date").value;
    const moveOutTime = document.getElementById("move-out-time").value;  
    const reason = document.querySelector('input[name="reason"]:checked').value;
    const address = document.getElementById("address").value;
    const bankAccount = document.getElementById("bank-account").value;
    const bankAccountName = document.getElementById("bank-name").value;
    const comment = document.getElementById("comment").value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const explanation = document.getElementById("explanation").value;
    const wishes = document.getElementById("wishes").value;
    const other = document.getElementById("other").value;

    document.getElementById("confirmation-contractor-name").inerText = contractorName;
    document.getElementById("confirmation-property-name").inerText = propertyName;
    document.getElementById("confirmation-room-number").inerText = roomNumber;
    document.getElementById("confirmation-parking-number").inerText = parkingNumber;
    document.getElementById("confirmation-phone-number").inerText = phoneNumber;
    document.getElementById("confirmation-move-out-date").inerText = moveOutDate;
    document.getElementById("confirmation-move-out-time").inerText = moveOutTime;
    document.getElementById("confirmation-reason").inerText = reason;
    document.getElementById("confirmation-address").inerText = address;
    document.getElementById("confirmation-bank-account").inerText = bankAccount;
    document.getElementById("confirmation-bank-name").inerText = bankAccountName;
    document.getElementById("confirmation-comment").inerText = comment;
    document.getElementById("confirmation-satisfaction").inerText = satisfaction;
    document.getElementById("confirmation-explanation").inerText = explanation;
    document.getElementById("confirmation-wishes").inerText = wishes;
    document.getElementById("confirmation-other").inerText = other;

    document.querySelector(".confirmation-parent").style.display = "block";
}
