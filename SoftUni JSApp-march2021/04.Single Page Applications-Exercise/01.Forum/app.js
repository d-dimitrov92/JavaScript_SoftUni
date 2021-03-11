function start() {
    getAllPosts()
    document.querySelector('form').addEventListener('submit', createPost);
    document.querySelector('.cancel').addEventListener('click', (ev) => {
        ev.preventDefault()
        document.querySelector('form').reset();
        return;
    });
    document.querySelector('div.topic-title').addEventListener('click', goToPostPage)
}
start()

function goToPostPage(event) {
    if(event.target.tagName == "H2"){

        const id = event.target.dataset.id
        console.log(id);
        console.log(window.location.pathname);
    }
}

async function getAllPosts() {
    document.querySelector('div.topic-title').innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    const data = await response.json();
    console.log(data);
    const posts = Object.values(data).map(c => {
        const result = `
    <div class="topic-container">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2 data-id=${c._id}>${c.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${c.nowTime}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${c.username}</span></p>
                    </div>
                </div>
                <div class="subscribers">
                    <!-- <button class="subscribe">Subscribe</button> -->
                    <p>Subscribers: <span>0</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`
        return result;
    }).join('');
    document.querySelector('div.topic-title').innerHTML = posts;
    
}

async function createPost(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    const nowTime = new Date();

    if (topicName == '' || username == '' || postText == '') {
        return alert('All fields are required!')
    }
    const newPost = { topicName, username, postText, nowTime };

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    });

    const data = await response.json();
    console.log(data);
    event.target.reset();
    const result = `
    <div class="topic-container">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2 data-id=${newPost._id}>${newPost.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${newPost.nowTime}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${newPost.username}</span></p>
                    </div>
                </div>
                <div class="subscribers">
                    <!-- <button class="subscribe">Subscribe</button> -->
                    <p>Subscribers: <span>0</span></p>
                </div>
            </div>
        </div>
    </div>
</div>`
    getAllPosts();
}