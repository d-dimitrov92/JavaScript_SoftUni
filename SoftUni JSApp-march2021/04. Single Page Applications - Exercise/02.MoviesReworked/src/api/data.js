import * as api from './api.js';


const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getMovies() {
    return await api.get(host + '/data/movies');
}

export async function getMovieById(id) {
    return await api.get(host + '/data/movies/' + id);
}

export async function getLikesForMovie(movieId) {
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
}

export async function getLikesForMovieByUser(movieId, userId) {
    return await api.get(host + `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function addLike(data) {
    return await api.post(host + '/data/likes', data);
}
// export async function getMyMemes() {
//     const userId = sessionStorage.getItem('userId');
//     return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }

export async function createMovie(data) {
    return await api.post(host + '/data/movies', data);
}

export async function editMovie(id, data) {
    return await api.put(host + '/data/movies/' + id, data);
}

export async function deleteMovie(id) {
    return await api.del(host + '/data/movies/' + id);
} 