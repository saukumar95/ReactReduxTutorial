import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm';
import AllForm from './AllForm';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <PostForm />
        <br /><p />
        <AllForm />
      </div>
    );
  }
}
export default App;
