import React from 'react';
import classes from './App.module.css';
import Cockpit from './containers/Cockpit'

function App() {
  return (
    <div className={classes.App}>
      <h1>Hello world</h1>
      <Cockpit />
    </div>
  );
}

export default App;
