import React from 'react'
import './App.css'
import img from './assets/blacksmall.png'
const App = () => {
  return (
 <React.Fragment>

   <div className="logo">
   <div className="image"><img src={img} alt="the creative mena logo"/></div>
   <div className="title">
   <h1>The Creative Mena Is Coming Soon</h1>

   </div>

   </div>
 </React.Fragment>
  )
}

export default App
