import React from 'react'
import ReactDOM from 'react-dom/client'
import "animate.css"
import "remixicon/fonts/remixicon.css"
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css'

import App from './App.jsx';
import BtnTop from './common/BtnTop.jsx'

AOS.init()
AOS.init({
  duration: 1000,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
    <BtnTop />
  </React.StrictMode>,
)
