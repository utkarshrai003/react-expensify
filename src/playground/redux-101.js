import { createStore } from 'redux';

const store = createStore((state = { count: 1 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
			return {
				count: state.count + incrementBy
			};
		case 'DECREMENT': 
			return {
				count: state.count - 1
			}
		case 'RESET': 
			return {
				count: 0
			}
		default:
			return state;
	}	
});

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// console.log(store.getState());

store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});

// console.log(store.getState());

store.dispatch({
	type: 'DECREMENT'
});

// console.log(store.getState());

store.dispatch({
	type: 'RESET'
});

// console.log(store.getState());

unsubscribe();