import React from 'react'
import styled from 'styled-components'
import { lightHeader,headerMedium, Body } from '../styles/Textsyles'
import lady from '../assets/lady.png'
import walk from '../assets/walk.png'
const AboutTop = () => {
  return (
    <Container>
      <Title>
  <Titleh1>About ME</Titleh1>
</Title>
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
<Exploreimg>
  <Image  src={walk} alt="The Creative Mena"  />
    
</Exploreimg>
<Explore><RightH2>Explore. Inspire. Impact.  </RightH2>
<Righttext>
In my journey as a Designer, i started out as a graphic designer, but i wanted to do more than execute an already existing plan or concept, becasue i noticed i could have done it better.

With over 5 years of practical approach to design problems, i have helped alot of brand reach their goal and in turn gain massive reach
and customers with proper branding and design
to whatever products they are working on
</Righttext>
</Explore>

  </Section>

    </Container>
  )
}


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
grid-template-areas: "Right Left"
"Exploreimg Explore";

padding: 20px 25px;
margin: 44px 0 0 0;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
  grid-template-areas:
  "Left" 
  "Right"
"Exploreimg"
"Explore";
}
`
const Right =styled.div`
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
height: 100%;
width: 100%;
grid-area:Right;
@media only screen and (max-width: 800px){
  align-items:center;
  text-align: center;
}
`
const RightH2 = styled(headerMedium)``
const Righttext = styled(Body)`
margin: 13px 0;
text-align: left;
@media only screen and (max-width: 800px){
 
  text-align: center;
}
`
const Left =styled.div`
grid-area:Left;
height: 100%;
width: 100%;
`

const Exploreimg =styled.div`
height: 100%;
width: 100%;
grid-area:Exploreimg;
`
const Explore =styled.div`
grid-area:Explore;
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
export default AboutTop

