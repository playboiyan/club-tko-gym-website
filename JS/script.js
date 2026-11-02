
// FAQ accordion functionality
document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;

            answer.hidden = !answer.hidden;

            question.setAttribute(
                "aria-expanded",
                !answer.hidden
            );

        });

    });

});

// Enquiry form validation
document.addEventListener("DOMContentLoaded", function () {

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const phone = document.getElementById("phone").value.trim();
            const response = document.getElementById("enquiryResponse");

            const phonePattern = /^(0|\+27)[0-9]{9}$/;

            if (!phonePattern.test(phone)) {
                response.textContent =
                    "Please enter a valid South African phone number.";
                return;
            }

            response.textContent =
                "Thank you! Your enquiry details have been completed successfully. Please contact the gym directly to confirm membership availability.";

            enquiryForm.reset();

        });

    }

});
// Contact form validation
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const messageType = document.getElementById("message-type").value;
            const message = document.getElementById("contact-message").value.trim();
            const response = document.getElementById("contactResponse");

            if (name.length < 2) {
                response.textContent = "Please enter your full name.";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                response.textContent = "Please enter a valid email address.";
                return;
            }

            if (messageType === "") {
                response.textContent = "Please select a message type.";
                return;
            }

            if (message.length < 10) {
                response.textContent = "Your message must be at least 10 characters long.";
                return;
            }

            response.textContent =
                "Thank you, " + name + "! Your message has been completed successfully. We will get back to you.";

            contactForm.reset();

        });

    }

});
// Image lightbox functionality
document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Enlarged gym image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll("main img").forEach(function (image) {

        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.style.display = "flex";
        });

    });

    closeButton.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});
// Fitness class search
document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("classSearch");

    if (searchInput) {

        const classCards = document.querySelectorAll(".class-card");
        const searchMessage = document.getElementById("searchMessage");

        searchInput.addEventListener("input", function () {

            const searchTerm = searchInput.value.toLowerCase();
            let visibleClasses = 0;

            classCards.forEach(function (card) {

                const classContent = card.textContent.toLowerCase();

                if (classContent.includes(searchTerm)) {
                    card.style.display = "";
                    visibleClasses++;
                } else {
                    card.style.display = "none";
                }

            });

            searchMessage.textContent = visibleClasses === 0
                ? "No fitness classes found. Try another search."
                : visibleClasses + " class(es) found.";

        });

    }

});