window.addEventListener("load", function() {
    document.getElementById("langEn").addEventListener("click", function() {
        document.querySelector(".mid-title h2").textContent = "Procedures for cancellation and moving out";
        document.querySelector(".mid-subtitle h3").innerText = "To customers who wish to cancel their contract and move out\n\nThank you very much for choosing to live in a building\nmanaged by Saitama Maruyama engineering.";
        document.querySelector("#flex-title-left").textContent = "Contract cancellation request"; 
        document.querySelector(".flex-text-left").textContent = "Once you have decided to move, you will need to apply for contract cancellation. You can apply online (via tenant cancellation application form) or in writing (by mailing the cancellation notice) that you received when you first signed the rental contract.";
        //document.querySelector(".flex-text-left a").textContent = "Unfortunately, phone requests can not be accepted as cancellation notice.";  

    });
});