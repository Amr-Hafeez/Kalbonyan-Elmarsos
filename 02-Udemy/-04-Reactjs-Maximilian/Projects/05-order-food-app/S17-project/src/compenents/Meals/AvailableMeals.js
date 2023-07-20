import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";
import meals from "./Meals";


// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const res = await fetch(
                'https://react-http-def4c-default-rtdb.firebaseio.com/meals.json',
                {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    }
                }
            );

            if (!res.ok) {
                throw new Error('something went wrong!');
            }

            const data = await res.json();
            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    desc: data[key].desc,
                    price: data[key].price
                });
            }
            // return loadedMeals;
            setMeals(loadedMeals);
            setIsLoading(false);
        }
        fetchMeals().catch(err => {
            setIsLoading(false);
            setHttpError(err.message);

        });
    }, []);

    const mealsList = meals.map(meal =>
        <MealItem
            name={meal.name}
            desc={meal.description}
            price={meal.price}
            key={meal.id}
            id={meal.id}
        />
    );

    return (
        <section className={`${isLoading || mealsList.length === 0 ? classes.MealsLoading : classes.meals}`}>
            {
                isLoading && <p>Loading...</p>
            }
            {
                httpError && <p>{httpError}</p>
            }
            {
                !httpError && mealsList.length > 0 &&
                <Card>
                    <ul>
                        {mealsList}
                    </ul>
                </Card>
            }
        </section>
    );
};

export default AvailableMeals;