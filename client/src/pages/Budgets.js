import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import {QUERY_BUDGET, QUERY_EXPENSE} from '../utils/queries';
import { ADD_MONTHLY_BUDGET, REMOVE_MONTHLY_BUDGET} from '../utils/mutations';

function Budgets(props) {
  const [budgetDescription, setBudgetDescription] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');  
  const [budgetCategory, setBudgetCategory] = useState(''); 
  const [updateCount, setUpdateCount] = useState(0);
  
  const [addMonthlyBudget, { error }] = useMutation(ADD_MONTHLY_BUDGET);
  const [removeMonthlyBudget, { error: removeError }] = useMutation(REMOVE_MONTHLY_BUDGET);

  const deleteBudget = async (budgetId) => {
    const userId = localStorage.getItem('user_id');
    await removeMonthlyBudget({
    variables: {"monthlyBudgetId": budgetId},
    refetchQueries: [{query: QUERY_BUDGET, variables: { "user": userId} }],
  })
  setUpdateCount(updateCount + 1);
};


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('user_id');
    const description = budgetDescription;
    const amount = budgetAmount;
    const category= budgetCategory;
    const user = localStorage.getItem('user_id');
    try {
      const data = await addMonthlyBudget({
        variables: {
          "description": description,
          "amount": amount,
          "categoryId": category,
          "userId":user

        },
        refetchQueries: [{query: QUERY_BUDGET, variables: { "user": userId} }],
      });

      setBudgetDescription('');
      setBudgetAmount('');
      setBudgetCategory('');
      setUpdateCount(updateCount + 1);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-4">
      <h1>Monthly Budget</h1>
      <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="description"
              value={budgetDescription}
              className="form-input w-100"
              onChange={(event) => setBudgetDescription(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <input
              placeholder="amount"
              value={budgetAmount}
              className="form-input w-100"
              onChange={(event) => setBudgetAmount(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-9">
            <select
                onChange={(event) => setBudgetCategory(event.target.value)}
                value={budgetCategory}
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
              Add
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
                  <th><span className="mr-4"> Category</span></th>
                  <th><span className="mr-4">Amount</span></th>
                  <th><span className="mr-4">Description</span></th>
                </tr>
                <tbody>
          {
            props.budgets.map((budget) => (
            <tr key={budget._id} id={budget._id}>
              <td>{budget.category.name}</td>
              <td>{budget.amount}</td>
              <td>{budget.description}</td>
              <td> <button className="btn btn-info" onClick={(event) => deleteBudget(event.target.parentElement.parentElement.id) }>Remove</button> </td>
            </tr>
            ))}
             </tbody>      
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

export default Budgets;

