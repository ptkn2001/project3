import React from 'react';
import Chart2 from '../components/Chart';
import Report from '../components/Report';

const Dashboard = ({expenses, budgets}) => {

  let expensed = 0;
  let budgeted = 0;

  if(budgets) {
    budgeted =  budgets.reduce((n, {amount}) => n + parseInt(amount), 0);
  }

  if(expenses) {
    expensed =  expenses.reduce((n, {amount}) => n + parseInt(amount), 0);
  }

  const balance = budgeted - expensed;
  
  return (

      <div>
        <div className="flex-row justify-center">
          <p>Summary of what balance and Spent mean</p>
        </div>
        <div className="flex-row justify-space-around">

          <div className="card">
              <p>need icon</p>
              <div className="card-header">
                <h3>Balance</h3>
                </div>
                <div className="card-body">
                <p>Total Budget: ${budgeted}</p>
                <p>Balance: ${balance}</p>
              </div>
          </div>

          <div className="card">
            <p>need icon</p>
            <div className="card-header">
              <h3>Spent</h3>
            </div>
            <div className="card-body">
              <p>Spending up to date: ${expensed}</p>
            </div>
          </div>

        </div>

          <div>
            <Chart2 expenses={expenses} />
          </div>

          <div>
            <Report/>
          </div>
      </div>
  );
};

export default Dashboard;
