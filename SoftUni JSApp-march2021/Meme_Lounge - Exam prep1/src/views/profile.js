import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyMemes } from '../api/data.js'

const myMemesTemplate = (userMemes, username, email, memesCount, gender) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${memesCount}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${userMemes.map(m => userMeme(m))}
        <!-- Display : If user doesn't have own memes  -->
        ${userMemes == 0 ? html`<p class="no-memes">No memes in database.</p>` : ''}
    </div>
</section>`;

const userMeme = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details/${meme._id}">Details</a>
</div>`;

export async function profilePage(ctx) {
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const userId = sessionStorage.getItem('userId');
    const gender = sessionStorage.getItem('gender');
    const userMemes = await getMyMemes(userId);
    const memesCount = userMemes.length;
    
    ctx.render(myMemesTemplate(userMemes, username, email, memesCount, gender));
}