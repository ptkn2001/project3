import React from 'react';
import Chart from '../components/Chart';
import Report from '../components/Report';

const Dashboard = () => {
  return (

      <div>
        <div>
          <p> Summary of what balance and Spent mean</p>
          <div className="card">

            <div>
             {/* <FontAwesomeIcon icon="fa-solid fa-scale-balanced" /> */}
              <p>need icon</p>
              <div>
                <h3>Balance</h3>
                <p>needs data from monthly budget</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div>
              <p>need icon</p>
              <div>
                <h3>Spent</h3>
                <p>calculate the monley has been used till today</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Chart/>
          </div>

          <div>
            <Report/>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
