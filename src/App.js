import React, { Component } from 'react';
import './App.css';
import MyGrid from './components/mygrid';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyGrid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
