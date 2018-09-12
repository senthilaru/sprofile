import ReactDOM from 'react-dom'
import React from 'react'
import HomePage from './pages/HomePage/homePage';
import { Provider } from 'react-redux';
import store from "./store";


const element = 
<Provider store={store()}>
    <HomePage />
  </Provider>

ReactDOM.render(
  element,
  document.getElementById('root')
);