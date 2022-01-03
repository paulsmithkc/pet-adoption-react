import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// check if browser supports service workers
if (navigator.serviceWorker) {
  // wait for the page to load
  window.addEventListener('load', () => {
    if (process.env.NODE_ENV === 'production') {
      // register service worker in prod environment
      navigator.serviceWorker.register(
        `${process.env.PUBLIC_URL}/service-worker.js`
      );
    } else {
      // unregister service worker in dev environment
      navigator.serviceWorker.ready
        .then((registration) => registration.unregister())
        .catch((error) => console.error(error.message));
    }
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
