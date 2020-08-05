import React from 'react';
import request from 'superagent';
import Header from './Header.js';
import './App.css';

class App extends React.Component {
  state = {
    search: '',
    
  }
  render() { 
    return (
      <body>
        <Header />
      </body>
    );
  }
}
 
export default App;