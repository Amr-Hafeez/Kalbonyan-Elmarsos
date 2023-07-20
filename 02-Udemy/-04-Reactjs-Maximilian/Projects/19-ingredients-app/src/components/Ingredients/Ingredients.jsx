import React, {useCallback, useEffect, useReducer, useState} from 'react';

import IngredientForm from './IngredientForm.jsx';
import Search from './Search.jsx';
import IngredientList from "./IngredientList.jsx";
import ErrorModal from "../UI/ErrorModal.jsx";

const ingredientReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return [...action.ingredients]
        case "ADD":
            return [...state, action.ingredient]
        case 'DELETE':
            return [...state.filter(i => i.id !== action.id)];
        default:
            throw new Error('Should not get there!');
    }
}

function Ingredients() {
    const [ingredients, dispatch] = useReducer(ingredientReducer, [], () => {});
    
    // const [ingredients, setIngredients] = useState([]);
    const [filter, setFilter] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const filterHandler = query => {
        console.log('Got it')
        setFilter(query);
    }
    
    const newIngredientHandler = useCallback(
        async ingredient => {
                try {
                    setIsLoading(true);
                    const res = await fetch('https://react-http-def4c-default-rtdb.firebaseio.com/ingredients.json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(ingredient)
                    });
                    const data = await res.json();
                    // setIngredients(prevState => {
                    //     return [
                    //         ...prevState,
                    //         {
                    //             id: data.name,
                    //             ...ingredient
                    //         }
                    //     ]
                    // });
                    
                    dispatch({type: 'ADD', ingredient: {id: data.name, ...ingredient}})
                } catch (error) {
                    setError(error.message || 'Some thing went wrong!')
                }
                setIsLoading(false);
            },
        
        [],
    );
    
    const removeIngredientHandler = useCallback(
        async (id) => {
        try {
            setIsLoading(true);
            // setIngredients(prevState => (
            //     prevState.filter(item => item.id !== id)
            // ));
            
            dispatch({type: 'DELETE', id})
            await fetch(`https://react-http-def4c-default-rtdb.firebaseio.com/ingredients/${id}.json`, {
                method: 'DELETE'
            });
        }  catch (error) {
            setError(error.message || 'Some thing went wrong!')
        }
        setIsLoading(false);
    },
        []
    );
    
    const fetchIngredients = async () => {
        const query = filter.length === 0 ? '' : `?orderBy="title"&equalTo="${filter}"`;
        const res = await fetch('https://react-http-def4c-default-rtdb.firebaseio.com/ingredients.json' + query)
        const data = await res.json();
        const ingredients = [];
        for (const key in data) {
            ingredients.push({
                id: key,
                title: data[key].title,
                amount: data[key].amount
            })
        }
        return ingredients;
    }
    
    useEffect( () => {
        fetchIngredients()
            .then(data => {
                // setIngredients(data);
                dispatch({type: 'SET', ingredients: data})
            })
    }, [filter])
    
    const clearModal = () => {
        setError(null);
    };
    
    
    return (
    <div className="App">
        {error && <ErrorModal onClose={clearModal}>{error}</ErrorModal>}
        
        <IngredientForm loading={isLoading} addIngredientHandler={newIngredientHandler}/>
        
        <section>
        <Search filterHandler={filterHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler}/>
        </section>
    </div>
  );
}

export default Ingredients;
