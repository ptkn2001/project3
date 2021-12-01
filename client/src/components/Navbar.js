import React from 'react';
import auth from '../utils/auth';

const Navbar = (props) => {

  const handleClick = (event) => {
    const { innerText } = event.target;
    props.changeActivePage(innerText);
  };
  const handleLogout = (event) => {
    auth.logout();
  };

  const isLogin = auth.loggedIn();
    return (
        <div >
             {(isLogin) ? (
                    <ul>
                        <li className='navItem my-1' onClick={handleClick}>Dashboard</li><hr/>
                        <li className='navItem my-1' onClick={handleClick}>Category</li><hr/>
                        <li className='navItem my-1' onClick={handleClick}>Budget</li><hr/>
                        <li className='navItem my-1' onClick={handleClick}>Expense</li><hr/>
                        <li className='navItem my-1' onClick={handleClick}>Extra</li><hr/>
                        <li className='navItem my-1' onClick={handleLogout}>Logout</li><hr/>
                    </ul>
                ) : (
                        <div>
                          <ul>
                            <li className='navItem my-1' onClick={handleClick}>Login</li><hr/>
                            <li className='navItem my-1' onClick={handleClick}>Signup</li><hr/>
                          </ul>
                        </div>
                      )
                }
        </div>
    );
  };
  
  export default Navbar;