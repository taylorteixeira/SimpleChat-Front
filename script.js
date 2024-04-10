document.addEventListener("DOMContentLoaded", function() {

  const formChatSend = document.getElementById("form-chat-send");
  const messageInput = document.getElementById("message");
  const messagesList = document.querySelector(".messages-list");

  formChatSend.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const messageText = messageInput.value.trim();

    if (messageText === "") {
      return; 
    }

    const newMessageItem = document.createElement("div");
    newMessageItem.classList.add("message-item", "message-user");

    newMessageItem.innerHTML = `
      <div class="msg-user"><strong>Você diz:</strong></div>
      <div class="msg-chat">${messageText}</div>
    `;

    messagesList.appendChild(newMessageItem);

    messageInput.value = "";

    messagesList.scrollTop = messagesList.scrollHeight;
  });
});
