import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	//! this todos is state
	todos: [{ id: 1, text: 'Hello world' }],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	// properties and functions in reducers
	reducers: {
		// 2 bydefault props: state->access to inital state, actions -> values taken from action
		addTodo: (state, action) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
