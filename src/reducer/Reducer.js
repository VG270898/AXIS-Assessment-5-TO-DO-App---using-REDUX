const initialTodos = {
    todos: []
}

const todoReducer = (state = initialTodos, action) => {

    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        data: data
                    }
                ]
            };

        case "DELETE_TODO":
            const newList = state.todos.filter((elm) => elm.id !== action.id)
            return {
                ...state,
                todos: newList
            };

        case "CLEAR_ALL_TODO":
            return {
                ...state,
                todos: []
            };
        default:
            return state;
    }
}

export default todoReducer