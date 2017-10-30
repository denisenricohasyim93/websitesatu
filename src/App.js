import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var styles1 = {
	color:'white',
  backgroundImage: `url("http://www.creativehdwallpapers.com/uploads/large/background/cool-background-landscape.jpg")`,
  fontWeight:'bold',
  height: '600px'
};

var styles2 = {
	color:'white',
	backgroundColor:'brown',
  fontWeight:'bold',
  height: '600px'
};

var stylesP = {
  textAlign:'center',
  margin:'300px',
  position: 'absolute',
  borderStyle: 'solid',
  padding: '30px'
};

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      <div>
        <div style={styles1}>
            <p style={stylesP}>To get started, edit <code>src/App.js</code> and save to reload.</p>
        </div>
        <div style={styles1}>
            <p style={stylesP}>To get started, edit <code>src/App.js</code> and save to reload.</p>
        </div>
      </div>
    );
  }
}

export default App;
