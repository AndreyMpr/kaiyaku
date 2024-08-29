window.addEventListener("load", function() {
    document.getElementById("langEn").addEventListener("click", function() {
        document.querySelector("#top-menu button").innerText = "Company home page";
        document.querySelector(".mid-title h2").textContent = "Procedures for cancellation and moving out";
        document.querySelector(".mid-subtitle h3").innerText = "To customers who wish to cancel their contract and move out\n\nThank you very much for choosing to live in a building\nmanaged by Saitama Maruyama engineering.";
        document.querySelector("#flex-title-left").textContent = "Contract cancellation request"; 
        document.querySelector(".flex-text-left").innerText = "Once you have decided to move, you will need to apply for contract cancellation. You can apply online (via cancellation application form) or in writing (by mailing the cancellation notice) that you received when you first signed the rental contract.\nUnfortunately, phone requests can not be accepted as cancellation notice.";
        document.querySelector(".text-badge p").textContent = "Cancellation and moving out procedures"; 
        document.querySelector(".flow-text p").textContent = 'If the period between the [cancellation acceptance date *¹] and the "moving date" is less than the [cancellation notice period *²]," you will be responsible for the rent from the [cancellation acceptance date *¹] until after the [cancellation notice period *²], so please complete the procedure well in advance. The procedure will be in accordance with the rental contract.';
        document.querySelector(".flow-asterisk-list li").textContent = '*1: "Cancellation acceptance date": If you applied online, it will be the date on which your application is accepted. If you applied in writing, it will be the postmark date of your cancellation notice (postcard).';
        document.querySelector('.flow-asterisk-list li:nth-of-type(2)').innerText = '\n*2: "Termination notice period": The termination notice period stated in the rental agreement (1 month, 2 months, etc.).';
        document.querySelector("#annotation").textContent = "Please apply using one of the following methods"; 
        document.querySelector(".apply-button span").textContent = "Apply for cancellation via the Internet"; 
        document.querySelector(".apply-button:nth-of-type(2) span").textContent = "Apply for cancellation via paper form";
        document.querySelector(".bottom-menu-content p").textContent = "Saitama Maruyama Engineering"; 
        document.querySelector(".bottom-menu-content p:nth-of-type(3)").textContent = "Onari-cho-1-518-2, Omiya, Saitama city, Saitama pref.";
        document.querySelector(".bottom-menu-content p:nth-of-type(4)").textContent = "Business hours: 09:00 〜 18:00";
        document.querySelector(".bottom-menu-content p:nth-of-type(5)").textContent = "Day off: Tuesday & Wednesday.";
    });
});