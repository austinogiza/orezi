import React from 'react'
import styled from 'styled-components'
import { lightHeader,headerMedium, Body,mediumHeader,tinyTexts,textCopy,textItalics } from '../styles/Textsyles'
import lady from '../assets/lady.png'
import walk from '../assets/walk.png'
import place from '../assets/place.png'
import real from '../assets/N.svg'
import ceal from '../assets/C.svg'
import Carousel from 'react-elastic-carousel';

const About = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
  <AboutPage>
<Title>
  <Titleh1>About ME</Titleh1>
</Title>
<Container>

  <Section>
<Right><RightH2>Brand. Design. Educate </RightH2>
<Righttext>
My name is Onofua Orezimena Leonard, a graduate of Electrical Electronics Engineering, but i am passionate about being mentioned as  part of the success stories for any person, brands, business or products. 
That is why i do all i do.
</Righttext>
</Right>
<Left>
  <Image src={lady} alt="The Creative Mena" />
    
</Left>
<Left>
  <Image  src={walk} alt="The Creative Mena"  />
    
</Left>
<Right><RightH2>Explore. Inspire. Impact.  </RightH2>
<Righttext>
In my journey as a Designer, i started out as a graphic designer, but i wanted to do more than execute an already existing plan or concept, becasue i noticed i could have done it better.

With over 5 years of practical approach to design problems, i have helped alot of brand reach their goal and in turn gain massive reach
and customers with proper branding and design
to whatever products they are working on
</Righttext>
</Right>

  </Section>

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
const AboutPage =styled.div`
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;

background-image: url(${real}), url(${ceal});
background-position: left -5% top 50%, right -10% top 90%;
background-size: 35%,35%;
background-repeat: no-repeat, no-repeat;

`
const Title =styled.div`
height: 100px;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`
const Titleh1 =styled(lightHeader)``
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
padding: 20px 25px;
margin: 44px 0 0 0;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
}
`
const Right =styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
height: 100%;
width: 100%;
`
const RightH2 = styled(headerMedium)``
const Righttext = styled(Body)`
margin: 13px 0;
text-align: left;

`
const Left =styled.div``
const Image =styled.img`
height: 100%;
width: 100%;
`

const Saysection = styled.div`
min-height: 400px;
width: 100%;
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
padding: 10px 25px;
`
const Saytitle = styled.div`
min-height: 100px;
width: 100%;
`
const Sayh1 = styled(mediumHeader)`
margin: 34px 0;
text-align: left;
`
const Saycover = styled.div`
min-height: 400px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 40px;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
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
width: 100px;
height: 100px;
`
const Boximage = styled.img`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`
const Boxdets = styled.div``
const Detsh1 = styled(textCopy)`

`
const Detsp = styled(textItalics)`
margin: 6px 0;
`

const Details = styled(tinyTexts)``

const Slidercontainer = styled(Carousel)`
display: flex;
flex-direction: grid;
grid-template-columns: repeat(4,1fr);
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
