import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
// we will use connect in our individual component
// for dispatching deposits, or read from the store

// state less functional compenent
const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		{props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense} />
		})}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

// while calling connect(), we get something back.
// params to be conected takes what we want to connect.

// When we connect a component to store, the component gets reactive
// The component gets re rendered once anything in the state changes.

export default connect(mapStateToProps)(ExpenseList);