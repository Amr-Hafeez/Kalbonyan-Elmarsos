// const addMovieBtn = document.getElementById('add-movie-btn');


const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length) {
        movieList.classList.add('visible');
    } else {
        movieList.classList.remove('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie =>
            movie.info.movieTitle.includes(filter));


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const {info, ...otherProps} = movie;
        // const {movieTitle: title} = info;
        let {getFormattedTitle} = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        console.log(otherProps);
        let text = getFormattedTitle.call(movie) + ' - ';
        for (const key in info) {
            if (key !== 'movieTitle') {
                text += `${key}: ${info[key]}`;
            }
        }

        movieEl.textContent = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const movieTitle = document.getElementById('title').value;
    const propName = document.getElementById('extra-name').value;
    const valName = document.getElementById('extra-value').value;

    if (
        !movieTitle.trim() ||
        !propName.trim() ||
        !valName.trim()
    ) {
        return;
    }

    const newMovie = {
        info: {
            movieTitle,
            [propName]: valName,
        },
        id: Math.random(),
        getFormattedTitle() {
            return this.info.movieTitle.toUpperCase();
        }
    }

    movies.push(newMovie);
    // console.log(movies);
    renderMovies();
}

const searchMoviesHandler = function () {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMoviesHandler);


// const person = {
//     name: 'Amr',
//     age: 21,
//     hobbies: ['Sports', 'Cooking'],
//     greet: () => {
//         console.log(`Hi, ${person.name}`)
//     },
//     isAdmin: true
// };
//
// // Deleting a property form an object.
// delete person.isAdmin;
//
// person.age = 20;
//
//
// // console.log(person['first name'];
//
// console.log(person);

/*
--- Spread Operator On Objects

const person = {name: 'Amr', age: 20, hobbies: ['Sports', 'Coding', 'Sleeping'];
const anotherPerson = { ...person, age = 21, hobbies: [ ...person.hobbies ] };

const person3 = Object.assign({}, person);
 */

/*
--- "this" and Arrow Functions

const members = {teamName: 'Blue Rockets', people: ['Max', 'Manuel'],
    getTeamMembers() { this.people.forEach(p => {
    console.log( p + ' - ' + this.teamName);});}
};
 */