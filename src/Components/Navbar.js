import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/e.svg'
import logo from '../assets/Logo.svg'
import { themes } from '../styles/ColorStyles'
import Panels from './Panels'
import {AnimatePresence} from 'framer-motion'
const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const [handlePanel, setHandlePanel] = useState(false)
  const location = useLocation()

const handleMenu = ()=>{
  setHandlePanel(true)
  setMenu(!menu)
}
  

  useEffect(() => {
    setMenu(false)

  }, [location])
  return (

    <AnimatePresence>
    <>
 <Navcover>
   <Container>
     <Logo>
   <NavLink to='/'>

   <Orezi src={logo} alt="The creative mena logo"/>
   </NavLink>
     </Logo>

     <Navlinks isOpen={menu}>
       <Navul>
         <Navli>
           <Navhref activeClassName="active-nav" to='/about'>
           About 
           </Navhref>
         </Navli>
         <Navli>
           <Navhref activeClassName="active-nav" to='/work'>
           My Work 
           </Navhref>
         </Navli>
         <Navli>
           <Navhref   activeClassName="active-nav" to='/blog'>
           Blog 
           </Navhref>
         </Navli>
         <Navli>
           <Navhref  activeClassName="active-nav"  to='/contact'>
           Contact 
           </Navhref>
         </Navli>
       </Navul>
     </Navlinks>
     <Mobilenav onClick={handleMenu}>
      <Menumob >
      <Top></Top>
       <Span></Span>
       <Bottom></Bottom>
      </Menumob>
     </Mobilenav>
   </Container>
 </Navcover>

{handlePanel && <Panels />}  </>
 </AnimatePresence>

  )
}


const Navcover = styled.div`
height: 200px;
width: 100%;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 20%;
background-position: right 0% top 30%;
`
const Container = styled.div`
max-width: 1100px;
height: 100%;
width: 100%;
margin: 0 auto;
display: grid; 
grid-template-columns: 200px auto;
padding: 10px 20px;
align-items: center;
position: relative;
@media only screen and (max-width: 800px){
  padding: 30px 40px;
}
`
const Logo = styled.div`
height: 60px;
width: 160px;
`
const Orezi = styled.img`
width: 100%;
height: 100%;
`
const Navlinks = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media only screen and (max-width: 800px){
  justify-content: center;
position: fixed;
top: 0px;
right: 0;
background: ${themes.black};
width: 100%;
height: auto;
padding: 50px 0;
transition: all 0.5s ease-in;
transform: ${props => (props.isOpen ? "translateY(0%)":"translateY(-100%)")}

}
`


const Navul = styled.ul`
display: flex;
justify-content: center;
align-items: center;

@media only screen and (max-width: 800px){
  flex-direction: column;


}
`

const Navli = styled.li`
font-size: 24px;
font-weight: 400;
padding: 10px 30px;
`
const Navhref = styled(NavLink)`
color: ${themes.white};
`

const Mobilenav = styled.div`
right: 50px;
top: 80px;
height: 25px;
width: 33px;
position: absolute;
display:none;
@media only screen and (max-width: 800px){
  display:block;
}
`

const Menumob = styled.div`
height: 100%;
width: 100%;
flex-direction: column;
display: flex;
justify-content: center;
align-items: flex-end;

`
const Top = styled.span`
width: 33.5px;
height: 5px;
background: #FFFFFF;
margin: 3px 0;
`
const Span = styled.span`
width: 25px;
height: 5px;
background: #FFFFFF;
margin: 3px 0;
`
const Bottom = styled.span`
width: 14px;
height: 5px;
background: #FFFFFF;
margin: 3px 0;
`


export default Navbar
