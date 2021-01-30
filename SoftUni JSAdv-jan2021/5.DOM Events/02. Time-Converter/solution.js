function attachEventsListeners() {
    const main = Array.from(document.getElementsByTagName('main'))[0].addEventListener('click', (ev) => {
        if(ev.target.type === 'button'){
            let div = ev.target.parentNode
            let input = div.querySelector('input[type=text]').value;

            console.log(input);
        }
    });
}