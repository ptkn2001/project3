import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EXPENSE, UPDATE_EXPENSE} from '../utils/mutations';


function Expenses(props) {

  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');  
  const [expenseCategory, setExpenseCategory] = useState('');  
  const [expenseUser, setExpenseUser] = useState(''); 
  const [addExpense, { error }] = useMutation(ADD_EXPENSE);
  const [updateExpense, { errorUpdate }] = useMutation(UPDATE_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const description = "test desription";
    const amount ="20";
    const category="619c62a072cba50b44e0b140";
    const user = "61a2c612d248b224c0050521";
    try {
      const data = await addExpense({
        variables: {
          "description": description,
          "amount": amount,
          "categoryId": category,
          "userId":user

        },
      });

      console.log(data);

      setExpenseDescription('');
      setExpenseAmount('');
      setExpenseCategory('');
      setExpenseUser('');

    } catch (err) {
      console.error(err);
    }
  };
 
  return (
    <div>
      <h1>Expense</h1>
      <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Category..."
              value={expenseDescription}
              className="form-input w-100"
              onChange={(event) => setExpenseDescription(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Category..."
              value={expenseAmount}
              className="form-input w-100"
              onChange={(event) => setExpenseAmount(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Category..."
              value={expenseCategory}
              className="form-input w-100"
              onChange={(event) => setExpenseCategory(event.target.value)}
            />
          </div>
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add Category..."
              value={expenseUser}
              className="form-input w-100"
              onChange={(event) => setExpenseUser(event.target.value)}
            />
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
      
        <div>
        <ul>
          {
            props.expenses.map((expense) => (<li key={expense._id} id={expense._id}>{expense.description, expense.amount, expense.category.name} </li>))}
        </ul>
        </div>
    </div>
  );
}

export default Expenses;

