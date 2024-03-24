function confirmInput() {
    const contractorName = document.getElementById("contractor-name").value;
    const propertyName = document.getElementById("property-name").value;
    const oomNumber = document.getElementById("room-number").value;
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
}
