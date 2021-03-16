import { html, render } from '../../../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getDataFromInput)
const root = document.getElementById('root');

function getDataFromInput(event) {
    event.preventDefault();

    const townsString = document.getElementById('towns').value;
    const towns = townsString.split(',').map(x => x.trim());
    const result = listTemplate(towns);

    render(result, root)
}


const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;