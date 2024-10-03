window.addEventListener("load", function() {
    document.getElementById("langEn").addEventListener("click", function() {
        document.querySelector("#top-menu button").innerText = "Home page (japanese)";
        document.querySelector("#top-menu button:nth-of-type(2)").innerText = "24/7 helpline (japanese)";
        document.querySelector(".mid-title h2").textContent = "Procedures for cancellation and moving out";
        document.querySelector(".mid-subtitle h3").innerText = "To customers who wish to cancel their contract and move out\n\nThank you very much for choosing to live in a building\nmanaged by Saitama Maruyama engineering.";
        document.querySelector("#flex-title-left").textContent = "Contract cancellation request"; 
        document.querySelector(".flex-text-left").innerText = "Once you have decided to move, you will need to apply for contract cancellation. You can apply online (via cancellation application form) or in writing (by mailing the cancellation notice) that you received when you first signed the rental contract.\nUnfortunately, phone requests can not be accepted as cancellation notice.";
        document.querySelector(".text-badge p").textContent = "Cancellation and moving out procedures"; 
        document.querySelector("#overlay-step-1").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-2").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-2").style.left = "48%";
        document.querySelector("#overlay-step-3").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-3").style.left = "36%";
        document.querySelector("#overlay-step-4").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-4").style.left = "38%";
        document.querySelector("#overlay-step-5").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-5").style.left = "39%";
        document.querySelector("#overlay-step-6").style.fontSize = "0.9em";
        document.querySelector("#overlay-step-6").style.left = "37%";
        document.querySelector("#overlay-step-1").innerText = "Deciding on\nmoving out";
        document.querySelector("#overlay-step-2").innerText = "Applying for\ncontract\ncancellation";
        document.querySelector("#overlay-step-3").innerText = "Application\nregistry";
        document.querySelector("#overlay-step-4").innerText = "Moove-out\ninspection";
        document.querySelector("#overlay-step-5").innerText = "Restoration\nsettlement";
        document.querySelector("#overlay-step-6").innerText = "Contract\ntermination";
        document.querySelector("#overlay-text-arrow").innerText = "Rent period (2 months’ notice)";
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
        document.querySelector(".privacy-policy-link").textContent = "Privacy policy (japanese)";
        document.querySelector(".mobile-kaiyaku-flow-two p").innerText = "Deciding on moving out";
        document.querySelector(".mobile-kaiyaku-flow-five p").innerText = "Applying for contract cancellation";
        document.querySelector(".mobile-kaiyaku-flow-eight p").innerText = "Application registry";
        document.querySelector(".mobile-kaiyaku-flow-eleven p").innerText = "Moove-out inspection";
        document.querySelector(".mobile-kaiyaku-flow-fourteen p").innerText = "Restoration settlement";
        document.querySelector(".mobile-kaiyaku-flow-seventeen p").innerText = "Contract termination";
        document.querySelector("#mobile-kaiyaku-flow-frame p").innerText = "Rent period (2 months’ notice)";
        
    });
});