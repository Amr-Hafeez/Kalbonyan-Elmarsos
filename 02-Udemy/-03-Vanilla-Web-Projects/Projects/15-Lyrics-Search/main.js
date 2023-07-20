const form = document.getElementById('form');
const searchInput = document.getElementById('search');
const innerText = document.getElementById('text');
const songsBox = document.getElementById('box-content');
const moreBtn = document.getElementById('more');

let next = '';

function showData(data) {
    innerText.style.display = 'none';
    data.forEach(song => {
        const songEl = document.createElement('div');
        // const songClone = document.importNode(songEl);
        songEl.innerHTML = `
            <div class="song">
                <div class="title">
                    <strong>${song.artist.name}</strong> - ${song.title}
                </div>
                <button class="btn-cta">Get Lyrics</button>
            </div>
        `;
        songsBox.appendChild(songEl);
    });

    moreBtn.style.display = 'block';
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    const term = searchInput.value;
    if (!term.length) {
        alert('Please type in a search term');
        return;
    }
    const res = await fetch(`https://api.lyrics.ovh/suggest/${term}`);
    const data = await res.json();
    // console.log(data);
    searchInput.value = '';
    showData(data.data);
    next = data.next;
});

moreBtn.addEventListener("click", async e => {
    const res = await fetch(next);
    const data = await res.json();
    showData(data.data);
    next = data.next;
});
