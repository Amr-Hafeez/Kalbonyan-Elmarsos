const startAddMovieBtn = document.querySelector('header button');
const addMovieModal = document.getElementById('add-modal');
const backDrop = document.getElementById('backdrop');
const passiveBtn = document.querySelector('.btn--passive');
const confirmAddMovieBtn = passiveBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];


const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const removeMovie = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();

    backDropHandler();
    updateUI();
};

const cancelMovieDeletion = () => {
    toggleBackDrop();
    deleteMovieModal.classList.remove('visible');
};

const removeMovieHandler = (movieId) => {
    const deleteMovieModal = document.getElementById('delete-modal');
    deleteMovieModal.classList.add('visible');
    toggleBackDrop();

    const cancelDeletion = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletion = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletion.replaceWith(confirmDeletion.cloneNode(true));

    confirmDeletion = deleteMovieModal.querySelector('.btn--danger');

    cancelDeletion.removeEventListener('click', cancelMovieDeletion);
    // confirmDeletion.removeEventListener('click', removeMovie.bind(null, movieId)); // will not work :(

    cancelDeletion.addEventListener('click', cancelMovieDeletion);
    confirmDeletion.addEventListener('click', removeMovie.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}" />
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating} / 5 stars</p>
    </div>
    `;

    newMovieElement.addEventListener('click', removeMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
};

const showMovieModal = () => {
    addMovieModal.classList.add('visible');
    toggleBackDrop();
};

const cancelMovieHandler = () => {
    addMovieModal.classList.remove('visible');
    toggleBackDrop();
    clearMovieInput();
};

const backDropHandler = () => {
    cancelMovieHandler();
    deleteMovieModal.classList.remove('visible');
    clearMovieInput();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() &&
        imageUrlValue.trim() &&
        ratingValue.trim() &&
        1 <= +ratingValue &&
        +ratingValue <= +5
    ) {
        const newMovie = {
            id: Math.random().toString(),
            title: titleValue,
            image: imageUrlValue,
            rating: ratingValue
        };
        movies.push(newMovie);
        console.log(movies);
        cancelMovieHandler();
        clearMovieInput();
        renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
        updateUI();

    } else {
        alert('Please check your input and try again!');
        return
    }
};

startAddMovieBtn.addEventListener('click', showMovieModal);

backDrop.addEventListener('click', backDropHandler);

passiveBtn.addEventListener('click', cancelMovieHandler);

confirmAddMovieBtn.addEventListener('click', addMovieHandler);