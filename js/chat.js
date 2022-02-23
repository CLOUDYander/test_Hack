send.onclick = function() {
    let message = document.getElementById('message').value;
    let Data = new Date();
    chat.insertAdjacentHTML('beforeend', '<div class="me-message"><div class="me-text-message"><p id="out-message" class="me-message">'+ message +'</p><div class="flex-time"><p class="time">'+ Data.getHours() + ":" + Data.getMinutes() +'</p></div></div></div>');
}