import React, { Component } from 'react';
import './App.css';
import PostForm from './PostForm';
import AllForm from './AllForm';
import LoginForm from './LoginForm';
import { createStore } from 'redux';
import postReducer from './reducers/postReducer';
import loginReducer from './reducers/loginReducer';
class App extends Component {
  render() {
    const store = createStore(postReducer);
    const loginStore = createStore(loginReducer);
    return (
      <div className="container-fluid" >
          <PostForm store={store}/>
          <br /><p />
          <AllForm store={store}/>        
        <br /><p />
        <LoginForm store={loginStore}/>
      </div>
    );
  }
}
export default App;
