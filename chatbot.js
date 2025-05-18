function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

function generateBotReply(userInput) {
  const msg = userInput.toLowerCase();


  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return {
      text: "You can ask about different sections of Ayanda's portfolio. What do you want to check out?",
      options: ["About Ayanda", "Projects", "Education", "Certifications & Skills", "Contact"]
    };
  } 
  else if (msg.includes("about")) {
    return {
      text: "Ayanda is a passionate software developer who blends creativity and code to build awesome solutions. 💻✨"
    };
  } 
  else if (msg.includes("projects")) {
    return {
      text: "🚀 You can view Ayanda’s work on GitHub by clicking the *Projects* button above. Real-world solutions in action!"
    };
  } 
  else if (msg.includes("education")) {
    return {
      text: "🎓 Ayanda has a background in IT and has completed several certifications to stay sharp and updated!"
    };
  } 
  else if (msg.includes("certifications") || msg.includes("skills")) {
    return {
      text: "💡 From frontend frameworks to legacy languages like COBOL, Ayanda’s toolbox is quite versatile!"
    };
  } 
  else if (msg.includes("contact") || msg.includes("form")) {
    return {
      text: "📬 Want to connect with Ayanda? Use the Contact Form to reach out!"
    };
  } 
  else {
    return {
      text: "🤔 I’m not sure I understood that. Try asking about projects, education, or type 'help' for suggestions.",
      options: ["About Ayanda", "Projects", "Education", "Certifications & Skills", "Contact"]
    };
  }
}

function addMessage(text, className) {
  const chatbox = document.getElementById("chatbox");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat ${className}`;
  messageDiv.innerHTML = `<p>${text}</p>`;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const msg = input.value.trim();
  if (msg === "") return;

  addMessage(msg, "user-message");
  input.value = "";

  setTimeout(() => {
    const botReply = generateBotReply(msg);
    if (typeof botReply === "string") {
      addMessage(botReply, "chatbot-incoming");
    } else {
      addMessage(botReply.text, "chatbot-incoming");

      if (botReply.options) {
        botReply.options.forEach(option => {
          const chatbox = document.getElementById("chatbox");
          const optionDiv = document.createElement("div");
          optionDiv.className = "chatbot-incoming chat";
          optionDiv.innerHTML = `<p class="chat-option">${option}</p>`;
          optionDiv.onclick = () => {
            document.getElementById("user-input").value = option;
            sendMessage(); // simulate user sending this option
          };
          chatbox.appendChild(optionDiv);
          chatbox.scrollTop = chatbox.scrollHeight;
        });
      }
    }
  }, 500);
}

// Event listeners for send button and enter key
document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
