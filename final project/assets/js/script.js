(function() {
    "use strict";

    // 1. Detect environment and enable JS-specific styles
    document.documentElement.classList.add('js-enabled');

    const remindBtn = document.getElementById('remind-btn');
    const feedback = document.getElementById('feedback');

    if (remindBtn) {
        remindBtn.addEventListener('click', function() {
            // Visual feedback for the user
            remindBtn.style.display = "none";
            feedback.textContent = "Success! You're on the list for Little Rock!";
            feedback.style.color = "#9d2235";
            feedback.style.marginTop = "15px";
            feedback.style.fontWeight = "bold";
            
            // Console log for testing/cross-browser verification
            console.log("User requested event reminder.");
        });
    }

    // Cross-browser log
    console.log("Collect-A-Card Site Loaded. UA: " + navigator.userAgent);
})();