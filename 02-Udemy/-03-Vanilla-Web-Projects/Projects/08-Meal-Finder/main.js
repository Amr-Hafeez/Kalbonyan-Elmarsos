const form = document.getElementById('form');
const searchBtn = document.getElementById('search');
const randomBtn = document.getElementById('random');
const resultHeadingEl = document.getElementById('result-heading');
const mealsEl = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');


async function getSingleMeal() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await res.json();

    const meal = data.meals[0];

    console.log(data);

    addMealToDOM(meal);
}

function addMealToDOM(meal) {
    singleMeal.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <div class="meal-img">
            <img src="${meal.strMealThumb}" alt="Meal Thumb" />
        </div>
        <div class="meal-sub">
            <p class="cat">${meal.strCategory}</p>
            <p class="area">${meal.strArea}</p>
        </div>
        <p class="instructions">
            ${meal.strInstructions}
        </p>
        <h3>Ingredients</h3>
        <div class="ingredients">
        </div>
    `;
    const ingredientsEl = document.querySelector('.ingredients');
    for (let i = 1; i <= 20; i++) {
        let title = meal[`strIngredient${i}`];
        if (title) {
            const item = document.createElement('div');
            item.className = 'item';
            item.textContent = title;
            ingredientsEl.append(item);
        } else return;
    }
}

async function searchMeal(e) {
    e.preventDefault();
    singleMeal.innerHTML = ``;
    mealsEl.innerHTML = ``;

    const term = searchBtn.value;

    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
        const data = await res.json();

        if (data.meals === null) {
            resultHeadingEl.innerHTML = `<p>There are no search results. Try again!<p>`;
        } else {
            resultHeadingEl.innerHTML = `<h2>Search results for '${searchBtn.value}'</h2>`;
            mealsEl.innerHTML = data.meals.map(meal => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            `).join('');
        }

        searchBtn.value = ``;

    } catch (err) {
        alert(err);
    }
}

form.addEventListener('submit', searchMeal);

randomBtn.addEventListener('click', getSingleMeal);