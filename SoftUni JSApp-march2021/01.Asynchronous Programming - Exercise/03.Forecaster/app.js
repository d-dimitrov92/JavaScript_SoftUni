function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather)
}

async function getWeather() {
    const input = document.getElementById('location');
    const location = input.value;
    input.value = '';
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';

    const response = await fetch(url);
    const data = await response.json();
    
    return data;
}
attachEvents();