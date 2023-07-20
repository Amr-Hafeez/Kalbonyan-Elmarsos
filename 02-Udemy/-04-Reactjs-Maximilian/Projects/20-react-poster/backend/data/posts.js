const fs = require('fs/promises');

async function getStoredPosts() {
    const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFileContent);
    return data.posts ?? [];
}

function storePosts(posts) {
    return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;