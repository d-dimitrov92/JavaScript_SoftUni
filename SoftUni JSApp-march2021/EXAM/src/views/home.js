import { html } from "../../node_modules/lit-html/lit-html.js";

import { getArticles } from "../api/data.js";

const homeTemplate = (cs, js, py, java) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${js.length < 1 ? html`<h3 class="no-articles">No articles yet</h3>` : articleTemplate(js[js.length - 1])}
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${cs.length < 1 ? html`<h3 class="no-articles">No articles yet</h3>` : articleTemplate(cs[cs.length - 1])}
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${java.length < 1 ? html`<h3 class="no-articles">No articles yet</h3>` : articleTemplate(java[java.length - 1])}
    </section>

    <section class="recent python">
        <h2>Python</h2>
        ${py.length < 1 ? html`<h3 class="no-articles">No articles yet</h3>` : articleTemplate(py[py.length - 1])}
    </section>
</section>`;

const articleTemplate = (singleArticle) => html`
<article>
    <h3>${singleArticle.title}</h3>
    <p>${singleArticle.content}</p>
    <a href="/details/${singleArticle._id}" class="btn details-btn">Details</a>
</article>`;

export async function homePage(ctx) {
    const articles = await getArticles();
    const cs = articles.filter(a => a.category == 'C#');
    const java = articles.filter(a => a.category == 'Java');
    const js = articles.filter(a => a.category == 'JavaScript');
    const py = articles.filter(a => a.category == 'Python');
    ctx.render(homeTemplate(cs, js, py, java));
}