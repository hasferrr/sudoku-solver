import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GridContextProvider } from './contexts/GridContext'
import { QueueGridContextProvider } from './contexts/QueueGridContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GridContextProvider>
      <QueueGridContextProvider>
        <App />
      </QueueGridContextProvider>
    </GridContextProvider>
  </React.StrictMode>
)
