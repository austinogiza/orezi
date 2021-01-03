import React from 'react'
import styled from 'styled-components'
import { mainButton } from '../styles/Button'
import { Header,Body} from '../styles/Textsyles'
import img from '../assets/sit.png'
import real from '../assets/r.svg'
import { motion} from 'framer-motion'

const Home = () => {
  return (
  <Homebody>
    <Container>
      <Orezi>
        <Oreziheader>Orezi Mena</Oreziheader>
        <Orezitext>Lets start the journey together,  and if you have
started when you see this, lets finish what you started.  That idea, business, brand, product, would stand out with proper branding...... </Orezitext>
<Orezibutton to='/about'>Discover more</Orezibutton>
      </Orezi>

      <Sitting>
        <Sitimg src={img} alt="Creaative Mena"/>
      </Sitting>
    </Container>
  </Homebody>
  )
}

const Homebody = styled(motion.div)`

min-height: 800px;
width: 100%;
display: flex;
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
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 50px;
padding: 10px 25px;
align-items: center;
justify-content: center;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
}

`
const Orezi = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;


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
`
const Sitimg = styled.img`
height: 100%;
width: 100%;
max-height: 794px;
max-width: 794px;


`

export default Home
