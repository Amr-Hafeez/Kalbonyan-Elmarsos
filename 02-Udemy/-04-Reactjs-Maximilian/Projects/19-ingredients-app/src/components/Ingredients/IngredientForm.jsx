import React, {useState} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

const IngredientForm = React.memo(props => {
    const [{title, amount}, setValues] = useState({title: '', amount: ''});
    
    const changeHandler = (e) => {
        setValues(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const submitHandler = event => {
        event.preventDefault();
        if (title.trim().length === 0 || amount.trim().length === 0) {
            return;
        }
        props.addIngredientHandler({title, amount});
        setValues({title: '', amount: ''});
    };
    
    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <div className="form-control">
                        <label htmlFor="title">Name</label>
                        <input
                            value={title}
                            onChange={changeHandler}
                            name={'title'}
                            type="text"
                            id="title"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">Amount</label>
                        <input
                            value={amount}
                            onChange={changeHandler}
                            name={'amount'}
                           type="number"
                           id="amount"
                        />
                    </div>
                    <div className="ingredient-form__actions">
                        <button type="submit">Add Ingredient</button>
                    </div>
                </form>
                {props.loading && <LoadingIndicator/>}
            </Card>
        </section>
    );
});

export default IngredientForm;
