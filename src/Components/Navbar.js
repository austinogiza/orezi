import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import img from '../assets/e.svg'
import logo from '../assets/Logo.svg'
import { themes } from '../styles/ColorStyles'

const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const [dropdownMenu,setDropdownMenu] =useState(false)

  

  useEffect(() => {
  
    return () => {
   
    }
  }, [])
  return (
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
         </Navli >
        
         <DropNavli onMouseLeave={ () => setDropdownMenu(false)} onMouseEnter={() => setDropdownMenu(true)}>
           <Navhref activeClassName="active-nav" to='/work'>
       Work 
           </Navhref>
           <Dropdown isDropped={dropdownMenu}>
           <Dropcover>
           <Droplink>Portfolio</Droplink>
             <Droplink>Resume</Droplink>

           </Dropcover>
             
           </Dropdown>
         </DropNavli>
         <Navli>
           <Navhref  activeClassName="active-nav"  to='/services'>
           Services 
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
     <Mobilenav onClick={ () => setMenu(!menu)}>
      <Menumob >
      <Top></Top>
       <Span></Span>
       <Bottom></Bottom>
      </Menumob>
     </Mobilenav>
   </Container>
 </Navcover>
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
justify-content: center;
align-items: center;
@media only screen and (max-width: 800px){
position: fixed;
top: 0px;
right: 0;
background: ${themes.black};
width: 100%;
height: auto;
padding: 50px 0;
transform:${props => (props.isOpen ? "translateY(0%)":"translateY(-100%)")}

}
`
const DropNavli = styled.li`
font-size: 24px;
font-weight: 400;
padding: 10px 30px;
position: relative;
`
const revealDropDown = keyframes`
0%{
  opacity: 0;

}
100%{
  opacity: 1;
}
`
const Dropdown = styled.div`
position: absolute;
top: 60px;
left: 20px;
animation: ${revealDropDown} 1s ease-in-out;
display: ${props=>(props.isDropped ? "block": "none")}
`
const Dropcover = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Droplink = styled.div``
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
