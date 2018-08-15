import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
// provides store to all of the component that make up the application
// We dont need to pass on the store manually to all the components.
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// add expennse - water bill
// add expense - gas bill
// set text filter
// get visible ones to screen

store.dispatch(addExpense({ description: 'Water Bill', amount: 100}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 10500, createdAt: 500}));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
// 	store.dispatch(setTextFilter('rent'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// We can use connect without being provider set up
// using connect we can create components that could grab info from store
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));