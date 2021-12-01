import React from 'react';
import Chart2 from '../components/Chart';
import Report from '../components/Report';
import BalanceIcon from '../icons/balance.jpg';
import SpenddingIcon from '../icons/spending.jpg';
import Moment from 'moment';

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
        <div className="flex-row justify-center dashboard-title">
          <h2>Balance and Spending Summaries</h2>
        </div>
        <div className="flex-row justify-space-around">

          <div className="card flex-row align-center">
            <img src={BalanceIcon} alt="balance icon" style={{height: '100px', width: '100px'}} />
            <div>
              <div className="card-header">
                <h3>Balance</h3>
                </div>
                <div className="card-body">
                <p><span className="c-orange">Total Budget: </span> <span className="c-darkBlue">${budgeted}</span></p>
                <p><span className="c-blue">Balance:</span> <span className="c-darkBlue">${balance}</span></p>
              </div>
            </div>
          </div>

          <div className="card flex-row align-center">
          <img src={SpenddingIcon} alt="spending icon" style={{height: '100px', width: '100px'}} />
          <div>
            <div className="card-header">
              <h3>Spent</h3>
            </div>
            <div className="card-body">
              <p className="c-orange">{Moment(Date.now()).format('MMM, YYYY')}</p>
              <p><span className="c-blue">Spending to date: </span><span className="c-darkBlue">${expensed}</span></p>
            </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-row justify-center mt-3 mb-2 ">
            <h2>Top 5 Expenses</h2>
          </div>
          <Chart2 expenses={expenses} />
        </div>

          <div>
          <div className="flex-row justify-center mt-3 mb-2 ">
            <h2>Expense Report</h2>
          </div>
            <Report/>
          </div>
      </div>
  );
};

export default Dashboard;
