import React from "react";
import classes from './Todo.module.css';
import Todo from "../../models/todo.ts";

const TodoItem: React.FC<{todo: Todo; deleteHandler: () => void}> = (props) => {
    return <li className={classes.item}
               onClick={props.deleteHandler}
    >
        {props.todo.text}
    </li>
}

export default TodoItem