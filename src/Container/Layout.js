import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Layout = ({children}) => {
  return (
  <React.Fragment>
 <Navbar />
    {children}
    <Footer/>
  </React.Fragment>
  )
}

export default Layout
