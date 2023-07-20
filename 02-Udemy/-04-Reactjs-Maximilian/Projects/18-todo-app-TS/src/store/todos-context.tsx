import React, {useState} from "react";
import Todo from "../models/todo.ts";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: () => {}
});

const TodosContextProvider: React.FC = (props) => {
    const [
        todos,
        setTodos
    ] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos(prevState => prevState.concat(newTodo))
    }

    const deleteTodoHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== todoId);
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: deleteTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
    {/*@ts-ignore*/}
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;