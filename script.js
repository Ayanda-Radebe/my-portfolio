function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
}

document.getElementById("get-started-btn").addEventListener("click", function () {
    const chatbox = document.querySelector(".chatbox");

    // Create the initial reply bubble
    const reply = document.createElement("div");
    reply.className = "user-reply";
    reply.innerHTML = "Let's get started";
    chatbox.appendChild(reply);

    // Hide the "Let's get started" button by moving and disabling it
    const button = document.getElementById("get-started-btn");
    button.classList.add("move-right"); // Add class to move the button
    button.disabled = true;

    // Remove the button after the transition ends
    button.addEventListener("transitionend", () => {
        button.style.display = "none";

        // Display options after the button has disappeared
        setTimeout(() => {
            const options = [
                { text: "Home", id: "home" },
                { text: "About", id: "about" },
                { text: "Education", id: "education" },
                { text: "Certifications & Skills", id: "certifications" },
                { text: "Contact Form", id: "form" }
            ];

            options.forEach(option => {
                const optionElement = document.createElement("div");
                optionElement.className = "chat-option";
                optionElement.innerHTML = option.text;
                optionElement.onclick = () => handleOptionClick(option.id);
                chatbox.appendChild(optionElement);
            });
        }, 500); // Delay to give a smooth transition
    }, { once: true });
});

// Handle option click to display responses
function handleOptionClick(optionId) {
    const chatbox = document.querySelector(".chatbox");
    const response = document.createElement("div");
    response.className = "chat";

    // Display a custom response based on the selected option
    switch (optionId) {
        case "home":
            response.innerHTML = "Navigating to Home page...";
            break;
        case "about":
            response.innerHTML = "Here is more about me!";
            break;
        case "education":
            response.innerHTML = "Check out my education background.";
            break;
        case "certifications":
            response.innerHTML = "Here are my certifications and skills.";
            break;
        case "form":
            response.innerHTML = "Feel free to fill out the contact form.";
            break;
        default:
            response.innerHTML = "Option not recognized.";
    }

    chatbox.appendChild(response);
}
