import { html } from "../../node_modules/lit-html/lit-html.js";

import { getMemeById, deleteMeme } from '../api/data.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}

    </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${meme.description}
            </p>
            ${isOwner ? 
                html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : ''}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const userId = sessionStorage.getItem('userId')
    const memeId = ctx.params.id;
    const meme = await getMemeById(memeId);
    const isOwner = meme._ownerId == userId;

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteMeme(meme._id);
            ctx.page.redirect('/catalog');
        }
    }
}