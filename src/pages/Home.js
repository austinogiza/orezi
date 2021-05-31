import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'
import { Header,Body} from '../styles/Textsyles'
import real from '../assets/r.svg'
import Resume from '../Components/Resume'
import Business from '../Components/Business'
import SelectedWorks from '../Components/SelectedWorks'
import Skills from '../Components/Skills'
import loader from '../assets/orezi.gif'

const Home = () => {
const [preloader, setPreloader]=useState(false)
const [timer, setTimer]=useState(4)

  useEffect(()=>{
   window.setInterval(() => {
    setTimer((timer)=> timer - 1)

   }, 1000);

    if(timer === 0 ){
      setPreloader(true)
    }
  }, [timer])
  
  return (
  <Homebody>

  <Preloader preloader={preloader}>
    <Loaderimg src={loader}/>
  </Preloader>
    <Container>
<HomeTop>
<Orezi>
        <Oreziheader> <span>Hi, I’m</span> Orezi Mena</Oreziheader>
        <Orezitext>Got a brand, business, or product to design? 
Let's start the journey together. If you have started the process, let's finish what you started. 
That idea, business, brand, product, would stand out with proper branding.
I help you bring that idea, business, brand, or product to life. 

</Orezitext>
<Orezibutton to='/about'>About Me</Orezibutton>
      </Orezi>
</HomeTop>

    </Container>
    <SelectedWorks/>
    <Skills/>
      <Business/>
    
      <Resume/>
  </Homebody>
  )
}

const Homebody = styled.div`
min-height: 800px;
width: 100%;
display: flex;
flex-direction: column;
overflow-x: hidden !important;
align-items: center;
justify-content: center;
background-image: url(${real});
background-position: left -5% top 50%;
background-size: 40%;
background-repeat: no-repeat;
`
const Container = styled.div`
height: 100%;
width: 100%;
max-width: 1200px;
margin: 0 auto;
`

const HomeTop = styled.div`
height: 100%;
width: 100%;
max-width: 1100px;
margin: 40px auto;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 10px 25px;
min-height: 400px;
`
const Orezi = styled.div`
grid-area: text;
height: 100%;
width: 100%;
max-width: 650px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
@media only screen and (max-width: 800px){
  align-items:center;
  text-align: center;
justify-content: center;
}
@media only screen and (max-width: 650px){
  align-items: flex-start;
}

`
const Oreziheader = styled(Header)`
@media only screen and (max-width: 650px){
  text-align: left;
}
`
const Orezitext = styled(Body)`
margin: 16px 0;
@media only screen and (max-width: 650px){
  text-align: left;
}
`
const Orezibutton = styled(mainButton)`
margin: 16px 0;
`
const Preloader = styled.div`
position: fixed;
width:100%;
height: 100%;
top: 0;
left:0;
z-index: 20;
display: ${props => props.preloader ? "none" : "flex" };
background: #000;
`

const Loaderimg = styled.img`
width: 100%;
height: 100%;
max-width: 800px;
margin: 0 auto;
`

export default Home
