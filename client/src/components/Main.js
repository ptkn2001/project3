import React, { useState } from 'react';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Extra from '../pages/Extra';



const Main = (props) => {

    switch(props.activePage) {
        case "Login":
            return (
                    <div><Login/></div>
            );
          break;
          case "Signup":
            return (
                    <div><Signup/></div>
            );
          break;
          case "Extra":
            return (
                    <div><Extra/></div>
            );
          break;
        default:
            return (
                <div><Dashboard/></div>
        );
      break;
      }
  };
  
  export default Main;