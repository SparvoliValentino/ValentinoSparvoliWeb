import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Footer from './Components/Footer.tsx';
config.autoAddCss = false;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='bg-gray-900 w-full min-h-screen '>
        <App />
      <Footer/>
    </div>
  </StrictMode>,
)
