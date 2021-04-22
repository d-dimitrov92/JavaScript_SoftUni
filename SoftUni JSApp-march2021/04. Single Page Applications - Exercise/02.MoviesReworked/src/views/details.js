import { html } from "../../node_modules/lit-html/lit-html.js";

import { getMovieById, deleteMovie, getLikesForMovie, getLikesForMovieByUser, addLike } from "../api/data.js";


const detailsTemplate = (movie, onDelete, likesCount, onLike) => html`
<section id="movie-details">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src=${movie.img}
                    alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                ${sessionStorage.getItem('userId') == movie._ownerId ? 
                html`
                <a @click=${onDelete} class="btn btn-danger" href="javascript:void(0)">Delete</a>
                <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>` : ''}
                
                ${sessionStorage.getItem('userId') != movie._ownerId ? 
                html`
                <a @click=${onLike} class="btn btn-primary" href="javascript:void(0)">Like</a>` : ''}
                
                <span class="enrolled-span">Liked ${likesCount}</span>
            </div>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const email = sessionStorage.getItem('email')
    const userId = sessionStorage.getItem('userId');
    const movieId = ctx.params.id;
    let likesCount = await getLikesForMovie(movieId);
    const movie = await getMovieById(movieId);
    const isLiked = await getLikesForMovieByUser(movieId, userId);
    console.log(isLiked);
    console.log(likesCount);
    ctx.render(detailsTemplate(movie, onDelete, likesCount, onLike));
    
    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteMovie(movieId);
            ctx.page.redirect('/')
        }
    }
    
    async function onLike(event) {
        await addLike({
            movieId: movieId,
            email: email});
            
        likesCount = await getLikesForMovie(movieId);
        console.log(likesCount);
        event.target.remove();
        ctx.render(detailsTemplate(movie, onDelete, likesCount, onLike));

    }
}