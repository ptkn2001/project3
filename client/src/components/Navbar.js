import React, { useState } from 'react';

const Header = () => {


    return (
        <div>
            <ul>
                {loggedIn ? (
                        <div>
                          <span role="img" aria-label="tada">
                            🎉
                          </span>
                          <h3>You are signed in!</h3>
                          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log out
                          </button>
                        </div>
                      ) : (
                        // If we are logged out, render this:
                        <div>
                          <span role="img" aria-label="stopsign">
                            🛑
                          </span>
                          <h3>You are currently logged out</h3>
                          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
                            Log in
                          </button>
                        </div>
                      )
                }
                <li>Home</li>
                <li>Dashboard</li>
                <li>Budget</li>
                <li>Category</li>
                <li>Expense</li>
                <li>Report</li>
                <li>Extra</li>
                <li>Logout</li>
            </ul>
        </div>
    );
  };
  
  export default Header;