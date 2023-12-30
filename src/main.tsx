import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ContextProvider from './components/context/ContextProvider.tsx'
import 'react-toastify/dist/ReactToastify.css'; 


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
