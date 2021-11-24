import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
   <div>
     <div><Header/></div>
     <div>
        <div><Navbar loggedIn={false}/></div>
        <div><Main/></div>
     </div>
   </div>
  );
}

export default App;
