import React from 'react';
import User from './User';
import logo from './logo.svg';
import './App.css';

import HomeContainer from './container/HomeContainer';

function App() {
  return (
    <div className="App">
      {/* <hi>App Component</hi> */}
      {/* <User data={{name:'pankaj kumar',age:'24'}} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
