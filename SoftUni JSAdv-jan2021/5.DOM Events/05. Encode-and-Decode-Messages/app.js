function encodeAndDecodeMessages() {
    let input = document.querySelectorAll('#main textarea')[0];
    let received = document.querySelectorAll('#main textarea')[1];
    const sendBtn = input.parentNode.querySelector('button');
    const decodeBtn = received.parentNode.querySelector('button');
    sendBtn.addEventListener('click', (ev) => {
        received.value = input.value.split('').map((x) => x.charCodeAt() + 1).map((x) => String.fromCharCode(x)).join('');
        input.value = '';
    });
    decodeBtn.addEventListener('click', (ev) => {
        received.value = received.value.split('').map((x) => x.charCodeAt() - 1).map((x) => String.fromCharCode(x)).join('')
    })
}