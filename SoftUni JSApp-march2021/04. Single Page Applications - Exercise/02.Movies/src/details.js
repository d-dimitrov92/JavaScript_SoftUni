async function getMovieById(id) {
    const responce = await fetch('http://localhost:3030/data/movies/' + id);
    const data = await responce.json();

    return data;
}

function createMovieCard(movie) {
    const userId = sessionStorage.getItem('userId');
    const controls = [];
    if(userId != null){
        if(userId == movie._ownerId){
            controls.push('<a class="btn btn-danger" href="#">Delete</a>');
            controls.push('<a class="btn btn-warning" href="#">Edit</a>');
        } else {
            controls.push('<a class="btn btn-primary" href="#">Like</a>');
        }
    }
    controls.push('<span class="enrolled-span">Liked 1</span>')
    const element = document.createElement('div');
    element.className = 'container';
    element.innerHTML = `
    <div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail"
            src=${movie.img} alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${controls.join('')}
    </div>
    </div>`
    return element;
}

let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    const movie = await getMovieById(id);
    const card = createMovieCard(movie);
    section.appendChild(card);
}