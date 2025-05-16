function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

document.getElementById("get-started-btn").addEventListener("click", function () {
  const chatbox = document.getElementById("chatbox");

  const reply = document.createElement("div");
  reply.className = "user-message chat";
  reply.innerHTML = "<p>Let's get started</p>";
  chatbox.appendChild(reply);

  this.style.display = "none";

  const options = [
    { text: "Get to know me", id: "home" },
    { text: "About", id: "about" },
    { text: "Education", id: "education" },
    { text: "Certifications & Skills", id: "certifications" },
    { text: "Contact Form", id: "form" }
  ];

  options.forEach(option => {
    const optionElement = document.createElement("div");
    optionElement.className = "chatbot-incoming chat";
    optionElement.innerHTML = `<p>${option.text}</p>`;
    optionElement.onclick = () => handleOptionClick(option.id);
    chatbox.appendChild(optionElement);
  });

  chatbox.scrollTop = chatbox.scrollHeight;
});

function handleOptionClick(optionId) {
  const chatbox = document.getElementById("chatbox");
  const response = document.createElement("div");
  response.className = "user-message chat";

  switch (optionId) {
    case "home":
      response.innerHTML = "<p>You can read my about 😁</p>";
      break;
    case "about":
      response.innerHTML = "<p>Here is more about me!</p>";
      break;
    case "education":
      response.innerHTML = "<p>Check out my education background.</p>";
      break;
    case "certifications":
      response.innerHTML = "<p>Here are my certifications and skills.</p>";
      break;
    case "form":
      response.innerHTML = "<p>Feel free to fill out the contact form.</p>";
      break;
    default:
      response.innerHTML = "<p>Option not recognized.</p>";
  }

  chatbox.appendChild(response);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle sending message
document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (msg === "") return;

  addMessage(msg, "user-message");

  input.value = "";

  setTimeout(() => {
    const reply = generateBotReply(msg);
    addMessage(reply, "chatbot-incoming");
  }, 500);
}

function addMessage(text, className) {
  const chatbox = document.getElementById("chatbox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat ${className}`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function generateBotReply(userInput) {
  const msg = userInput.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi there! How can I help you?";
  } else if (msg.includes("help")) {
    return "Sure! I'm here to assist you. What do you need help with?";
  } else {
    return "I'm just a basic bot. Try saying 'hello' or 'help'. 😊";
  }
}
