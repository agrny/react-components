import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TemporaryDrawer from './sideBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemporaryDrawer />
    <App />
  </StrictMode>,
)
