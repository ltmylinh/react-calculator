import React, {Component} from 'react';
import logo from './../assets/images/logo.svg';
import './app.css';
import Calculator from './../components/calculator/calculator';

class App extends Component {
 render() {
  return (
   <div className="calculator-app">
    <header className="calculator-app-header">
     <img src={logo} className="calculator-app-logo" alt="logo"/>
     <h1 className="calculator-app-title">Calculator</h1>
    </header>
    <Calculator/>
   </div>
  );
 };
}

export default App;