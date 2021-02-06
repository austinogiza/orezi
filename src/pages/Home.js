import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'
import { Header,Body} from '../styles/Textsyles'
import real from '../assets/r.svg'
import Resume from '../Components/Resume'
import Business from '../Components/Business'
import SelectedWorks from '../Components/SelectedWorks'
import Skills from '../Components/Skills'

const Home = () => {
  return (
  <Homebody>
    <Container>
<HomeTop>
<Orezi>
        <Oreziheader> <span>Hi, I’m</span> Orezi Mena</Oreziheader>
        <Orezitext>Lets start the journey together,  and if you have
started when you see this, lets finish what you started.  That idea, business, brand, product, would stand out with proper branding...... </Orezitext>
<Orezibutton to='/contact'>Say Hi</Orezibutton>
      </Orezi>


</HomeTop>

    
    </Container>
    <SelectedWorks/>
    <Skills/>
      <Business/>
      {/* <Testimonials/> */}
      <Resume/>
  </Homebody>
  )
}

const Homebody = styled.div`
min-height: 800px;
width: 100%;
display: flex;
flex-direction: column;

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

`
const Oreziheader = styled(Header)``
const Orezitext = styled(Body)`
margin: 16px 0;
`
const Orezibutton = styled(mainButton)`
margin: 16px 0;
`


export default Home
