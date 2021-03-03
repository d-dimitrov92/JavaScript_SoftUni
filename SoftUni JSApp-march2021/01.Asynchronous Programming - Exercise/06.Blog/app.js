function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}

attachEvents();

async function getPosts() {
    const select = document.getElementById('posts');
    const url = 'http://localhost:3030/jsonstore/blog/posts'

    let response = await fetch(url);
    let data = await response.json();

    Object.values(data).map(createOption).forEach(o => select.appendChild(o));
}

async function getCommentsByPostId(postId) {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    
    const [postResponse, commentsResponse] = await Promise.all([
        fetch(postsUrl),
        fetch(commentsUrl)
    ]);
    
    const postData = await postResponse.json();
    const commentsData = await commentsResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    const comments = Object.values(commentsData).filter(c => c.postId == postId);

    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';
    comments.map(createComment).forEach(c => commentsUl.appendChild(c))
}
function createComment(c) {
    const li = document.createElement('li');
    li.textContent = c.text;
    li.id = c.id;
    return li;
}

function createOption(post) {
    const result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;
}

function displayPost() {
    const postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);
}