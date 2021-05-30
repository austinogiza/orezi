import React from 'react'
import styled from 'styled-components'
import {Header, Body } from '../styles/Textsyles'

import { themes } from '../styles/ColorStyles'
import { resumeButtonNew } from '../styles/Button'
const AboutTop = () => {
  return (
    <Container>
  <Section>

<Exploreimg>
  <Image  src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622341236/orezipic_dcnkwi.png" alt="The Creative Mena"  />
    
</Exploreimg>
<Explore><RightH2>I’m Onofua L.
Orezimena</RightH2>
<Righttext>
An international Product Designer and Branding Specialist. 
<br/>
I work with organizations of all sizes, from individuals and start-ups to leading brands and corporations, across all sectors. 
</Righttext>
<ResumeButton>My Resume</ResumeButton>
</Explore>

  </Section>

    </Container>
  )
}



const Container =styled.div`
min-height: 600px;
width: 100%;
max-width: 1100px;
margin: 0 auto;

`
const Section =styled.div`
min-height: 400px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;
padding: 10px 25px;
margin: 32px 0;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
  
}
`

const RightH2 = styled(Header)`
color: ${themes.yellow}
`
const Righttext = styled(Body)`
margin: 34px 0;
width:100%;
text-align: left;
@media only screen and (max-width: 800px){
  text-align: center;
}
`

const Exploreimg =styled.div`
height: 100%;
width: 100%;
img{
  border-top-left-radius: 50px;
}
`
const Explore =styled.div`

display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
height: 100%;
width: 100%;
@media only screen and (max-width: 800px){
  align-items:center;
  text-align: center;
}
`


const Image =styled.img`
height: 100%;
width: 100%;
`

const ResumeButton = styled(resumeButtonNew)``
export default AboutTop

