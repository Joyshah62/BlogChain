import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewsletterDashboard from './dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      {/* <App /> */}
      <NewsletterDashboard />
    </React.StrictMode>
  </>
);
