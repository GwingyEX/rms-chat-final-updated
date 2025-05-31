const nameInput = document.getElementById('name');
const textInput = document.getElementById('text');
const messagesDiv = document.getElementById('messages');

async function loadMessages() {
  const res = await fetch('/api/getMessages');
  const messages = await res.json();
  messagesDiv.innerHTML = messages.map(m => 
    `<div class="message"><b>${m.name}:</b> ${m.text}</div>`
  ).join('');
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

async function sendMessage() {
  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  if (!name || !text) return;
  await fetch('/api/postMessage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, text })
  });
  textInput.value = '';
  loadMessages();
}

setInterval(loadMessages, 3000);
loadMessages();
