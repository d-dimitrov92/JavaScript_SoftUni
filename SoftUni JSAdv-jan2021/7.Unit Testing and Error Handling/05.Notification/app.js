function notify(message) {
  const notificationArea = document.getElementById('notification');
  notificationArea.textContent = message;
  notificationArea.style.display = 'block';

  notificationArea.addEventListener('click', () => {
    notificationArea.style.display = 'none'
  })
}