function toggle() {
    const more = document.getElementsByClassName('button')[0];
    const text = document.getElementById('extra');

    text.style.display = text.style.display === 'none' || text.style.display === ''? 'block': 'none';
    more.textContent = more.textContent === 'More' ? 'Less': 'More'
}