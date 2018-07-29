import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
