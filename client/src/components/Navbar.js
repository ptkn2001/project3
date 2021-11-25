import React, { useState } from 'react';


const Navbar = (props) => {

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
                        <div><ul>
                            <li>Home</li>
                            <li>Extra</li>
                          </ul>
                        </div>
                      )
                }
        </div>
    );
  };
  
  export default Navbar;