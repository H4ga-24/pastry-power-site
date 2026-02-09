// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { HelmetProvider } from 'react-helmet-async' // 👈 1. NOUVEL IMPORT
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👈 2. ON OUVRE LE PROVIDER */}
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
    {/* 👈 ON FERME LE PROVIDER */}
  </React.StrictMode>,
)