import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import"./Css/index.css"
import"./Css/reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <About/>
  </React.StrictMode>,
)
