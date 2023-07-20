import Todos from "./components/Todos/Todos.tsx";
import NewTodo from "./components/NewTodo/NewTodo.tsx";
import TodosContextProvider from "./store/todos-context.tsx";


function App() {

    return (
    // @ts-ignore
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    )
}

export default App
