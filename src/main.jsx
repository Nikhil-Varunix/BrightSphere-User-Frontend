import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import 'leaflet/dist/leaflet.css';

import { BrowserRouter } from 'react-router-dom'
import  {JournalProvider}  from './pages/contexts/journalContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JournalProvider>
        <App />
      </JournalProvider>
    </BrowserRouter>
  </StrictMode>,
)
