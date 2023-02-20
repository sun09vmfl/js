import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import App1 from './App1';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    {/* <App1 /> */}
    <App2 />
  </HashRouter>
);
