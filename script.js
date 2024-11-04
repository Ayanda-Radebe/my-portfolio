function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
    } else {
        chatbot.style.display = 'none';
    }
}

const reply = document.createElement("div");
reply.className = "user-reply";
reply.innerHTML = "Let's get started";

document.getElementById("get-started-btn").addEventListener("click", function () {
    const chatbox = document.querySelector(".chatbox");

    const reply = document.createElement("div");
    reply.className = "chat";
    reply.innerHTML = "Let's get started"; 

    chatbox.appendChild(reply);

    const button = document.getElementById("get-started-btn");
    button.classList.add("move-right"); 
    button.disabled = true; 
});



