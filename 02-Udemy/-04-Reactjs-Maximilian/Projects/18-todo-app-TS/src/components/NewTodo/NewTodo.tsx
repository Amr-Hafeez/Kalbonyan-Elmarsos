import classes from './NewTodo.module.css';
import React, {useContext, useRef} from "react";
import {TodosContext} from "../../store/todos-context.tsx";

const NewTodo: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null);

    const todosCtx = useContext(TodosContext);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const todoText = ref.current!.value;
        if (todoText.trim().length === 0) {
            // throw an error
            return;
        }
        ref.current!.value = '';
        todosCtx.addTodo(todoText);
    }

    return <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" name="text" id="text" ref={ref}/>
        <button>Add Todo</button>
    </form>
}

export default NewTodo;