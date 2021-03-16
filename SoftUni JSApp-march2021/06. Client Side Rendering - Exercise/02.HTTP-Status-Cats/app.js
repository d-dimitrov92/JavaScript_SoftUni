import { html, render } from '../../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../../node_modules/lit-html/directives/style-map.js';
import { cats as catsData } from './catSeeder.js';

const cardTemplate = (data) => html`
<li>
    <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${data.info ? 'Hide': 'Show'} status code</button>
        <div class="status" style=${styleMap(data.info ? {} : {display: 'none'})} id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
    </div>
</li>`;

const main = document.getElementById('allCats');
catsData.forEach(c => c.info = false);

update();

function update() {
    const catsList = html`
    <ul @click=${toggleInfo}>
        ${catsData.map(c => cardTemplate(c))}
    </ul>`;

    render(catsList, main);
}

function toggleInfo(event) {
    const elementId = event.target.parentNode.querySelector('.status').id;
    const cat = catsData.find(c => c.id == elementId);

    if(event.target.className == 'showBtn'){
        cat.info = !cat.info;
        update();
    }
}