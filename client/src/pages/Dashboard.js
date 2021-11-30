import React from 'react';
import Chart from '../components/Chart';
import Report from '../components/Report';

const Dashboard = () => {
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
                <p>needs data from monthly budget</p>
              </div>
          </div>

          <div className="card">
            <p>need icon</p>
            <div className="card-header">
              <h3>Spent</h3>
            </div>
            <div className="card-body">
              <p>monthly been spent till today</p>
            </div>
          </div>

        </div>

          <div>
            <Chart/>
          </div>

          <div>
            <Report/>
          </div>
      </div>
  );
};

export default Dashboard;
