import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import './css/App.css';

// Redux for tracking user logged in
// import { Provider } from 'react-redux';
// import store from './Redux/Store';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
