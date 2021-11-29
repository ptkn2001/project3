import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EXPENSE } from '../utils/queries';
import { ADD_EXPENSE, REMOVE_EXPENSE} from '../utils/mutations';


function Expenses(props) {
 
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');  
  const [expenseCategory, setExpenseCategory] = useState(''); 
  
  const expenseData = useQuery(QUERY_EXPENSE);
  const expenses = expenseData.data?.expenses || [];
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);
  const [removeExpense, { error: removeError }] = useMutation(REMOVE_EXPENSE);

  const deleteExpense = async (expenseId) => {
    await removeExpense({
    variables: {"expenseId": expenseId}
  })};

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const description = expenseDescription;
    const amount = expenseAmount;
    const category=expenseCategory;
    const user = localStorage.getItem('user_id');

    try {
      const data = await addExpense({
        variables: {
          "description": description,
          "amount": amount,
          "categoryId": category,
          "userId":user

        },
      });

      setExpenseDescription('');
      setExpenseAmount('');
      setExpenseCategory('');

    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div>
      <h1>Expenses</h1>
      <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="description"
              value={expenseDescription}
              className="form-input w-100"
              onChange={(event) => setExpenseDescription(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <input
              placeholder="amount"
              value={expenseAmount}
              className="form-input w-100"
              onChange={(event) => setExpenseAmount(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <select
                onChange={(e) => setExpenseCategory(e.target.value)}
                value={expenseCategory}
              >
               
                <option>Choose Category...</option>
                {props.categories.map((category) => (
                  <option key={category._id} id={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
             
          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add Expense
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
        <div className="mt-5">
        <table>
                <tr>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
          {
            expenses.map((expense) => (
            <tr key={expense._id} id={expense._id}>
              <td>{expense.category.name}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td> <button className="btn btn-info" onClick={(event) => deleteExpense(event.target.parentElement.parentElement.id) }>Remove</button> </td>
            </tr>
            ))}       
        </table>
        {removeError && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {removeError.message}
            </div>
             )}
        </div>
    </div>
  );
}

export default Expenses;

