import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_MONTHLY_BUDGET, REMOVE_MONTHLY_BUDGET} from '../utils/mutations';


function Budgets(props) {

  const [budgetDescription, setBudgetDescription] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');  
  const [budgetCategory, setBudgetCategory] = useState('');  
  const [addMonthlyBudget, { error }] = useMutation(ADD_MONTHLY_BUDGET);
  const [removeMonthlyBudget, { errorRemove }] = useMutation(REMOVE_MONTHLY_BUDGET);

  const deleteBudget = async (budgetId) => {
    await removeMonthlyBudget({
    variables: {"monthlyBudgetId": budgetId}
  })};


  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      });

      setBudgetDescription('');
      setBudgetAmount('');
      setBudgetCategory('');

      console.log(data);

    } catch (err) {
      console.error(err);
    }
  };

  console.log(props.budgets);



  return (
    
    <div>
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
                onChange={(e) => setBudgetCategory(e.target.value)}
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
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
          {
            props.budgets.map((budget) => (
            <tr key={budget._id} id={budget._id}>
              <td>{budget.category.name}</td>
              <td>{budget.amount}</td>
              <td>{budget.description}</td>
              <td> <button className="btn btn-info" onClick={(event) => deleteBudget(event.target.parentElement.id) }>Remove</button> </td>
            </tr>
            ))}       
        </table>
        </div>
    </div>
  );
}

export default Budgets;

