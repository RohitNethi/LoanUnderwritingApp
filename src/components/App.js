import React, { Component } from 'react';
import './App.css';
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'
import Form from './Form.js';

class App extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
