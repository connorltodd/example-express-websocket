// public/javascripts/messages.js

const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageList = document.getElementById('message-list');

socket.on('new message', (data) => {
    const msgEl = document.createElement('p');
    msgEl.innerText = data.message;
    messageList.appendChild(msgEl);
})

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('message', message);
    messageInput.value = '';
})
