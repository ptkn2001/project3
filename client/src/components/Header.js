import React, { useState } from 'react';

const Header = () => {


    return (
        <div>
            <div><h1>Header</h1></div>
            <div>
                <p>{Date.now()}</p>
                <p>Johngamil</p>
            </div>
        </div>
    );
  };
  
  export default Header;