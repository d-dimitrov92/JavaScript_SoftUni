function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather)
}

async function getWeather() {
    const input = document.getElementById('location');
    const location = input.value
    input.value = '';
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const forecastSection = document.getElementById('forecast');

    //try {   someone to tell me why this isn't working ? I mean the try-catch block. It works for the error but stops other code.
        const response = await fetch(url);
        const data = await response.json();

        const targeted = data.find(o => o.name.toLowerCase() == location.toLowerCase());

        const currentUrl = 'http://localhost:3030/jsonstore/forecaster/today/' + targeted.code;
        const upcommingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + targeted.code;

        const [currResponse, upcResponse] = await Promise.all([
            fetch(currentUrl),
            fetch(upcommingUrl)
        ])
        const currentData = await currResponse.json();
        const upcommingData = await upcResponse.json();
    // } catch (error) {
    //     document.querySelector('#current>div').textContent = 'Error';
    // }

    forecastSection.style.display = 'block';
    const currentDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');

    const spanName = createElement('span', currentData.name, 'forecast-data');
    const spanTemp = createElement('span', `${currentData.forecast.low}°/${currentData.forecast.high}°`, 'forecast-data');
    const spanCond = createElement('span', currentData.forecast.condition, 'forecast-data');
    const spanCondUp = createElement('span', undefined, 'condition');
    spanCondUp.appendChild(spanName);
    spanCondUp.appendChild(spanTemp);
    spanCondUp.appendChild(spanCond);
    const spanSymb = createElement('span', setSymb(currentData.forecast.condition), 'condition');
    spanSymb.className += ' symbol'
    const forecastDiv = createElement('div', undefined, 'forecasts');
    forecastDiv.appendChild(spanSymb)
    forecastDiv.appendChild(spanCondUp);
    currentDiv.appendChild(forecastDiv);
    /*---upcomming---*/
    const upcomingForecast = createElement('div', undefined, 'forecast-info');
    upcommingData.forecast.map(createSpan).forEach(e => upcomingForecast.appendChild(e));
    upcomingDiv.appendChild(upcomingForecast);
}

function createSpan(element) {
    const spanSym = createElement('span', setSymb(element.condition), 'symbol');
    const spanT = createElement('span', `${element.low}°/${element.high}°`, 'forecast-data');
    const spanCon = createElement('span', element.condition, 'forecast-data');
    const spanUp = createElement('span', undefined, 'upcoming');
    spanUp.appendChild(spanSym);
    spanUp.appendChild(spanT);
    spanUp.appendChild(spanCon);
    return spanUp;
}

function setSymb(cond) {
    let symbol = '';
    switch (cond) {
        case 'Sunny':
            symbol = '☀'
            break;
        case 'Partly sunny':
            symbol = '⛅'
            break;
        case 'Overcast':
            symbol = '☁'
            break;
        case 'Rain':
            symbol = '☂'
            break;
    }
    return symbol;
}

function createElement(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
        result.className = className;
    }
    return result;
}
attachEvents();