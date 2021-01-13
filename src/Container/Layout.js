import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import WorkWith from '../Components/WorkWith'

const Layout = ({children}) => {
  return (
  <React.Fragment>
 <Navbar />
    {children}
    <WorkWith/>
    <Footer/>
  </React.Fragment>
  )
}

export default Layout
