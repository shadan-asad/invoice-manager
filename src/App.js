import React, { Component } from 'react';
import './App.css';
import MyGrid from './components/mygrid';
import Footer from './components/footer';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div style={{color: "white"}} className="App">
        <Header/>
        <MyGrid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
