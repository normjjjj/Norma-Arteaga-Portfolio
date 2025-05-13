let toggleButton = document.getElementById("theme-toggle");

if (!toggleButton) {
    toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Theme";
    toggleButton.id = "theme-toggle";
    document.body.prepend(toggleButton);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

toggleButton.addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const nameError = nameInput.nextElementSibling;
    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameInput.classList.add("input-error");
        } else {
            nameError.textContent = "";
            nameInput.classList.remove("input-error");
        }
    });

    const emailInput = document.getElementById("email");
    const emailError = emailInput.nextElementSibling;
    emailInput.addEventListener("input", function() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.classList.add("input-error");
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("input-error");
        }
    });

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameInput.classList.add("input-error");
            isValid = false;
        }
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.classList.add("input-error");
            isValid = false;
        }
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            messageInput.classList.add("input-error");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.getElementById("pdf-modal");
    const iframe = document.getElementById("pdf-frame");
    const closeBtn = document.querySelector(".close");

    portfolioItems.forEach((item) => {
        item.addEventListener("click", () => {
            const pdfPath = item.getAttribute("data-pdf");
            iframe.src = pdfPath;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        iframe.src = ""; // Clear the PDF to stop playback
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = "";
        }
    });
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-mode");
}