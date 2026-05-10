document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    // --- Fade-In On Scroll ---
    const toys = document.querySelectorAll(".toy");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    toys.forEach(toy => revealObserver.observe(toy));

    // --- Category Filter Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            toys.forEach(toy => {
                const category = toy.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    toy.style.display = 'flex';
                    // Re-trigger reveal for the filtered items
                    setTimeout(() => toy.classList.add('visible'), 50);
                } else {
                    toy.style.display = 'none';
                    toy.classList.remove('visible');
                }
            });
        });
    });

    // --- Reminder Button Feedback ---
    const remindBtn = document.getElementById('remind-btn');
    const feedback = document.getElementById('feedback');

    if (remindBtn) {
        remindBtn.addEventListener('click', () => {
            remindBtn.style.display = "none";
            feedback.textContent = "Got it! We'll notify you about Little Rock!";
            feedback.style.color = "#ff3b5c";
            feedback.style.fontWeight = "bold";
            feedback.style.marginTop = "20px";
        });
    }
});