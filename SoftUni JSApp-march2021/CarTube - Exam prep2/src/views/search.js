import { html } from "../../node_modules/lit-html/lit-html.js";

import { searchCar } from "../api/data.js";

const searchTemplate = (onSearch, cars) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

        ${cars ? cars.length != 0 ? cars.map(c => found(c)) : html`<p class="no-cars">No results.</p>` : ''}

    </div>
</section>`;

const found = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSearch));

    async function onSearch() {
        const search = document.querySelector('input[name="search"]').value;
        if (search == '') {
            return alert('fill the input!');
        }
        if (Number(search) == NaN) {
            return alert('Enter a number!');
        }
        const cars = await searchCar(search);
        
        ctx.render(searchTemplate(onSearch, cars));
    }
}