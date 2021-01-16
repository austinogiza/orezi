import React from 'react'
import styled from 'styled-components'
import { Body,mediumHeader,tinyTexts,textCopy,textItalics } from '../styles/Textsyles'

import place from '../assets/place.png'
import real from '../assets/N.svg'
import ceal from '../assets/C.svg'
import Carousel from 'react-elastic-carousel';
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import AboutTop from '../Components/AboutTop'
const About = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
  <AboutPage variants={pageAnimation} initial="hidden" animate="show" exit="exit">

<Container>
<AboutTop/>


  <Saysection>
    <Saytitle><Sayh1>And this is what some of them has to say.........</Sayh1></Saytitle>
    <Saycover>
      <Saybox>
<Boximg>
<Boximage src={place} alt="Orezi Mena THe Creativemena" />

</Boximg>
<Boxdets>
<Detsh1>King Tobi</Detsh1>
<Detsp>Lead, Coca-Cola</Detsp>
<Details>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu pharetra in arcu eu, vel. Leo, neque, ultricies a turpis elit viverra.</Details>
  
</Boxdets>

      </Saybox>
      <Saybox>
<Boximg>
<Boximage src={place} alt="Orezi Mena THe Creativemena" />

</Boximg>
<Boxdets>
<Detsh1>King Tobi</Detsh1>
<Detsp>Lead, Coca-Cola</Detsp>
<Details>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu pharetra in arcu eu, vel. Leo, neque, ultricies a turpis elit viverra.</Details>
  
</Boxdets>

      </Saybox>
      <Saybox>
<Boximg>
<Boximage src={place} alt="Orezi Mena THe Creativemena" />

</Boximg>
<Boxdets>
<Detsh1>King Tobi</Detsh1>
<Detsp>Lead, Coca-Cola</Detsp>
<Details>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu pharetra in arcu eu, vel. Leo, neque, ultricies a turpis elit viverra.</Details>
  
</Boxdets>

      </Saybox>
      <Saybox>
<Boximg>
<Boximage src={place} alt="Orezi Mena THe Creativemena" />

</Boximg>
<Boxdets>
<Detsh1>King Tobi</Detsh1>
<Detsp>Lead, Coca-Cola</Detsp>
<Details>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu pharetra in arcu eu, vel. Leo, neque, ultricies a turpis elit viverra.</Details>
  
</Boxdets>

      </Saybox>
    </Saycover>
  </Saysection>

  <Slidercontainer breakPoints={breakPoints}>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena" />
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
      
    </Slidercontainer>
</Container>

  </AboutPage>
  )
}
const AboutPage =styled(motion.div)`
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;

background-image: url(${real}), url(${ceal});
background-position: left -5% top 50%, right -10% top 90%;
background-size: 35%,35%;
background-repeat: no-repeat, no-repeat;

`
const Container =styled.div`
min-height: 600px;
width: 100%;
max-width: 1100px;
margin: 0 auto;

`

const Saysection = styled.div`
min-height: 400px;
width: 100%;
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
padding: 10px 25px;
margin: 64px 0;
`
const Saytitle = styled.div`
min-height: 100px;
width: 100%;
@media only screen and (max-width: 650px){
  text-align: center;
}
`
const Sayh1 = styled(mediumHeader)`
margin: 34px 0;
text-align: left;
@media only screen and (max-width: 650px){
  text-align: center;
}
`
const Saycover = styled.div`
min-height: 400px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;

@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  align-items: center;
  justify-content: center;
}
`
const Saybox = styled.div`
display: grid;
grid-template-columns: 100px auto;
grid-gap: 10px;

@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
}
`
const Boximg = styled.div`

width: 100%;
height: 100%;

display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`
const Boximage = styled.img`
width: 100px;
height: 100px;
`
const Boxdets = styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
@media only screen and (max-width: 650px){

  align-items:center;
justify-content: center;
}
`
const Detsh1 = styled(textCopy)`

`
const Detsp = styled(textItalics)`
margin: 6px 0;
`

const Details = styled(tinyTexts)`
@media only screen and (max-width: 650px){

text-align: center;
}
`

const Slidercontainer = styled(Carousel)`
display: flex;
min-height: 300px;
width: 100%;
`
const Slidercover = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
min-height: 200px;
width: 100%;
`
const SliderImage = styled.img``
const Slidertext = styled(Body)`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
height: 30px;
text-align: center;
width: 100%;
`
export default About
