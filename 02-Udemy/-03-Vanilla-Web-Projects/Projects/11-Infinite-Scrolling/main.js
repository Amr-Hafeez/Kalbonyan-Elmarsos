const filter = document.getElementById('filter');
const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');

let limit = 5;
let page = 1;

async function getPosts() {
    const res =
        await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    return await res.json();
}

async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.className = 'post';
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `;

        postsContainer.appendChild(postEl);
    });
}

function showLoading() {
    loading.classList.add('show');
}

function filterPosts(e) {
    const term = e.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const title = post
            .querySelector('.post-title').innerText.toUpperCase();
        const body = post
            .querySelector('.post-body').innerText.toUpperCase();

        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else post.style.display = 'none';
    })
}

showPosts();

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
        page++;
        showPosts().then(() => {
            loading.classList.remove('show');
        })
    }
});

filter.addEventListener('input', filterPosts);
