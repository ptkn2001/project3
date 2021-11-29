import React from 'react';

const Header = () => {
const userName = localStorage.getItem('user_name');

    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <div className="container flex-row justify-space-between align-center text-center">
          <h1 style={{ fontSize: '3rem' }}>
            Expense Management System
          </h1>
          <p style={{ margin: '0 1rem 0 0' }}>
            {userName}
          </p>
        </div>
      </header>
    );
  };
  
  export default Header;