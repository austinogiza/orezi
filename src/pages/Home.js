import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'
import { Header,Body} from '../styles/Textsyles'
import img from '../assets/sit.png'
import real from '../assets/r.svg'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import AboutTop from '../Components/AboutTop'
import Resume from '../Components/Resume'
import Business from '../Components/Business'

const Home = () => {
  return (
  <Homebody variants={pageAnimation} initial="hidden" animate="show"  exit="exit">
    <Container>
<HomeTop>
<Orezi>
        <Oreziheader>Hi, I’m Orezi Mena</Oreziheader>
        <Orezitext>Lets start the journey together,  and if you have
started when you see this, lets finish what you started.  That idea, business, brand, product, would stand out with proper branding...... </Orezitext>
<Orezibutton to='/contact'>Say Hi</Orezibutton>
      </Orezi>

      <Sitting>
        <Sitimg src={img} alt="Creaative Mena"/>
      </Sitting>
</HomeTop>

    
    </Container>
    <AboutTop/>
      <Business/>
      <Resume/>
  </Homebody>
  )
}

const Homebody = styled(motion.div)`

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
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-areas: "text image";
grid-gap: 50px;
padding: 10px 25px;
align-items: center;
justify-content: center;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
  grid-template-areas: "image"
  "text";
}

`
const Orezi = styled.div`
grid-area: text;
height: 100%;
width: 100%;
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
const Sitting = styled.div`
height: 100%;
width: 100%;
grid-area: image;
`
const Sitimg = styled.img`
height: 100%;
width: 100%;
max-height: 455px;
max-width: 455px;


`

export default Home
