class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = Math.floor(Math.random() * 100).toFixed(2);
    }
}

export default Todo;