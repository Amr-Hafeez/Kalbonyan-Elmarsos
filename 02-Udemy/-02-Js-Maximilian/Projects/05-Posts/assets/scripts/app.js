const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');


function sendHttpRequest(method, url, data) {
    // const promise = new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest();
    //     xhr.setRequestHeader('Content-Type', 'application/json')
    //     xhr.setRequestHeader('another key', 'another value')
    //
    //     xhr.open(method, url);
    //
    //     xhr.responseType = 'json';
    //
    //     xhr.onload = function () {
    //         resolve(xhr.response);
    //         // const listOfPosts = JSON.parse(xhr.response);
    //         // console.log(listOfPosts);
    //     };
    //
    //     xhr.onerror = function () {
    //         console.log(xhr.response);
    //         console.log(xhr.status);
    //     }
    //     xhr.send(JSON.stringify(data));
    //
    // });
    // return promise;
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    });
}

async function fetchPosts() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(response);
        const listOfPosts = response.data;
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        console.log(error.message);
    }
}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
    console.log(response);
}

fetchBtn.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

listElement.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        console.log(`The Post's Button No: ${event.target.closest('li').id} Is Clicked`);
        const postId = event.target.closest('li').id;
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        // console.log(document.importNode(`${event.currentTarget}`))
    }
})

// fetchPosts();
// createPost('DUMMY', 'A Dummy Post');










