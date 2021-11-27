import React, { useState } from 'react';
import './Navbar.css';


const Navbar = (props) => {

  const handleClick = (event) => {
    const { innerText } = event.target;

    props.changeActivePage(innerText);

  };

    return (
        <div>
             {(props.loggedIn) ? (
                    <ul>
                        <li>Dashboard</li>
                        <li>Budget</li>
                        <li>Category</li>
                        <li>Expense</li>
                        <li>Report</li>
                        <li>Extra</li>
                        <li>Logout</li>
                    </ul>
                ) : (
                        // If we are logged out, render this:
                        <div>
                          <ul>
                            <li className='navItem' onClick={handleClick}>Login</li>
                            <li className='navItem' onClick={handleClick}>Signup</li>
                            <li className='navItem' onClick={handleClick}>Extra</li>
                          </ul>
                        </div>
                      )
                }
        </div>
    );
  };
  
  export default Navbar;