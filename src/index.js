import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

//import './assets/css/app.css';
import App from './App';
import "font-awesome/css/font-awesome.min.css";

// import "./assets/css/vendor.css";
import "./assets/css/style.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);
