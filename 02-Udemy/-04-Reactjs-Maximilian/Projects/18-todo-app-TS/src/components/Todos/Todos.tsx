import React, {useContext} from "react";
import classes from './Todos.module.css';
import TodoItem from "../Todo/TodoItem.tsx";
import {TodosContext} from "../../store/todos-context.tsx";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {
            todosCtx.items.map(item =>
                <TodoItem key={item.id} todo={item} deleteHandler={todosCtx.removeTodo.bind(null, item.id)}/>
            )
        }
    </ul>
}


export default Todos