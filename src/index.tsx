import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ModelProvider } from './context/modal.context';
import { UserProvider } from './context/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
    <ModelProvider>
       <App />
    </ModelProvider> 
    </UserProvider>    
  </React.StrictMode>
);
reportWebVitals();
