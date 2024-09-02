import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { Title } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <Title/>
  </StrictMode>,
)
