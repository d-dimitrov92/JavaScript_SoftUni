function attachEventsListeners() {
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    const main = Array.from(document.getElementsByTagName('main'))[0].addEventListener('click', (ev) => {
        if (ev.target.type === 'button') {
            let div = ev.target.parentNode
            let input = div.querySelector('input[type=text]');
            let inputId = input.id;
            let button = div.querySelector('input[type=button]')
            if (inputId === 'days') {
                hours.value = Number(input.value) * 24;
                minutes.value = Number(input.value) * 1440;
                seconds.value = Number(input.value) * 86400;
            }
            if (inputId === 'hours') {
                days.value = Number(input.value) / 24;
                minutes.value = Number(input.value) * 60;
                seconds.value = Number(input.value) * 3600;
            }
            if (inputId === 'minutes') {
                days.value = Number(input.value) / 1440;
                hours.value = Number(input.value) / 60;
                seconds.value = Number(input.value) * 60;
            }
            if (inputId === 'seconds') {
                days.value = Number(input.value) / 86400;
                hours.value = Number(input.value) / 3600;
                minutes.value = Number(input.value) / 60;
            }
        }
    });
}

//24 hours/1440 minutes/86400 seconds