import { html } from "../../node_modules/lit-html/lit-html.js";
import { search } from "../api/data.js";

const searchTemplate = (onSearch, results) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSearch} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">

        ${results.length == 0 ? html`<h3 class="no-articles">No matching articles</h3>` : results.map(r => resultTemplate(r))}

    </div>
</section>`;

const resultTemplate = (result) => html`
<a class="article-preview" href="/details/${result._id}">
    <article>
        <h3>Topic: <span>${result.title}</span></h3>
        <p>Category: <span>${result.category}</span></p>
    </article>
</a>`;

export async function searchPage(ctx) {
    let results = [];
     ctx.render(searchTemplate(onSearch, results));
    
    async function onSearch(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('search');
        const results = await search(query);
        ctx.render(searchTemplate(onSearch, results));
        console.log(results);
    }
}