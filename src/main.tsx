import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { GridContextProvider } from './contexts/GridContext.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GridContextProvider>
      <App />
    </GridContextProvider>
  </React.StrictMode>
)
