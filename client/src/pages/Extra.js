import React from 'react';
import UnderConstructionIcon from '../icons/site-under-construction.jpg';

const Travel = () => {
  return (
      <div className="container">
        <div className="align-center justify-center">
          <h1>Welcome to Travel!</h1>
        </div>
        <div className="align-center">
          <img src={UnderConstructionIcon} alt="under construction icon" style={{height: '300px', width: '300px'}} />
        </div>
      </div>
  );
};

export default Travel;
