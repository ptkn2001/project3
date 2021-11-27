import React from 'react';
import './Navbar.css';

const Navbar = (props) => {

  const handleClick = (event) => {
    const { innerText } = event.target;

    props.changeActivePage(innerText);

  };
  const handleLogout = (event) => {
// TO DO - local storage issue- clear
    props.loginStatus(false);
  };

    return (
        <div>
             {(props.loggedIn) ? (
                    <ul>
                        <li className='navItem' onClick={handleClick}>Dashboard</li>
                        <li className='navItem' onClick={handleClick}>Budget</li>
                        <li className='navItem' onClick={handleClick}>Category</li>
                        <li className='navItem' onClick={handleClick}>Expense</li>
                        <li className='navItem' onClick={handleClick}>Report</li>
                        <li className='navItem' onClick={handleClick}>Extra</li>
                        <li className='navItem' onClick={handleLogout}>Logout</li>
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