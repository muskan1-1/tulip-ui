/* General setup */
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: #f7f7f7;
}

/* Top navigation bar */
.navbar {
  background-color: #7c3aed; /* Tulip-purple 💜 */
  color: white;
  padding: 1em;
  text-align: center;
  font-size: 1.5em;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Main container layout */
.container {
  display: flex;
  margin-top: 70px; /* offset for navbar height */
}

/* Sidebar styling */
.sidebar {
  width: 220px;
  background-color: #eee;
  padding: 1em;
  border-right: 1px solid #ccc;
}

.sidebar h3 {
  margin-top: 0;
}

.sidebar ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar li {
  padding: 0.5em 0;
  cursor: pointer;
  color: #444;
}

.sidebar li:hover {
  background-color: #ddd;
  border-radius: 4px;
}

/* Chat window */
.chat {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.chat-window {
  flex: 1;
  background: white;
  border: 1px solid #ccc;
  padding: 1em;
  overflow-y: auto;
  margin-bottom: 1em;
  border-radius: 6px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
}

/* Message input form */
form {
  display: flex;
  gap: 0.5em;
}

input[type="text"] {
  flex: 1;
  padding: 0.6em;
  border-radius: 4px;
  border: 1px solid #aaa;
}

button {
  padding: 0.6em 1em;
  border: none;
  background-color: #7c3aed;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #5b24b0;
}
// Grab necessary DOM elements
const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const windowEl = document.getElementById('chat-window');

// Listen for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form reload

  const message = input.value.trim();
  if (message !== '') {
    // Create a message element
    const msg = document.createElement('div');
    msg.textContent = message;
    msg.className = 'message';

    // Add message to chat window
    windowEl.appendChild(msg);
    input.value = '';
    windowEl.scrollTop = windowEl.scrollHeight; // auto-scroll to latest message
  }
});
.message {
  background-color: #e2e8f0;
  padding: 0.5em 1em;
  margin: 0.5em 0;
  border-radius: 8px;
  max-width: 70%;
  align-self: flex-start;
}
