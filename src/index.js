import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/About';
import ListPage from './pages/ListPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/provinces",
    element: <ListPage type='provinces' />,
  },
  {
    path: "/territories",
    element: <ListPage type='territories'/>,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/provinces'>Provinces</a></li>
        <li><a href='/territories'>Territories</a></li>
        <li><a href='/about'>About this App</a></li>
      </ul>
    </nav>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
