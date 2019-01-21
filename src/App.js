import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Location from './components/Location/Location';
import AppLogo from './components/AppLogo/AppLogo'

class App extends Component {ß

 render(){

    return (
      <div className='container'>
        <div className="main">
          <div className='top-bar'>
            <AppLogo/>
            <Header/>
          </div>
          
          <Location/>
        </div>
      </div>
    );
  }
}

export default App;
