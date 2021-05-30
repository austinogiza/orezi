import React from 'react'
import styled from 'styled-components'
import {workButtonNew} from '../styles/Button'
import {AiOutlineBehance,AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import { Header,Body } from '../styles/Textsyles'
import { themes } from '../styles/ColorStyles'


const WorkWith = () => {
  return (
  <Work>
<Container>
  
<Workleft>
     <Worktitle><Workh1>Get in touch</Workh1></Worktitle>
     <Worktext><Workp>I can help you bring that idea, business, brand, product to life. Let me worry about the visual & aspect, while you focus on other aspects of your journey. </Workp></Worktext>
    <Workbutton> <Workbtn to='/contact'>Contact Me</Workbtn></Workbutton>
    <Workicons>
  <Iconscover>  
  <a href="https://www.behance.net/creativemena" target="_blank"  rel="noopener noreferrer"><Iconswrapper><Behance/></Iconswrapper></a>
      <a href="https://twitter.com/Thecreativemena" target="_blank"   rel="noopener noreferrer">  <Iconswrapper><Twitter/></Iconswrapper></a>
      <a href="https://www.instagram.com/thecreativemena/" target="_blank"   rel="noopener noreferrer"> <Iconswrapper><Instagram/></Iconswrapper></a>
      </Iconscover>
    </Workicons>
   </Workleft>
 
</Container>
  </Work>
  )
}

const Work = styled.div`
min-height: 500px;
width: 100%;
margin: 0 auto;
max-width: 700px;
padding: 10px 25px;

`
const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
`
const Workleft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
min-height: 300px;
text-align: center;

`
const Worktitle = styled.div`
width: 100%;
height: 100%;
min-height: 64px;
`
const Workh1 = styled(Header)`
margin: 0 0 16px 0;
@media only screen and (max-width: 800px){
  font-size: 50px;
}
`
const Worktext = styled.div`
width: 100%;
height: 100%;
min-height: 20px;
`
const Workp = styled(Body)`
`
const Workbutton = styled.div`
width: 100%;
height: 100%;
min-height: 20px;
margin: 32px 0 0 0;
align-items: center;
  text-align: center;
  display: flex;
flex-direction: column;

justify-content: center;

`
const Workbtn = styled(workButtonNew)`
 font-family: "Euclid-medium";
font-size: 24px;
font-weight: 500;
line-height: 1.4;
@media only screen and (max-width: 650px){
  font-size: 18px;
}

`

const Workicons = styled.div`
width: 100%;
min-height: 100px;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin: 92px 0;
`
const Iconscover = styled.div`
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 82px;
text-align: center;
justify-content: center;
align-items: center;

@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
grid-gap: 24px;
place-items: center;
}
a{
  cursor: pointer;
}
`
const Iconswrapper = styled.div`
width: 90px;
height: 90px;
border: 2px solid ${themes.yellow};
border-radius: 50%;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
`
const Behance = styled(AiOutlineBehance)`
height: 26px;
width: 32px;
color: ${themes.white};
`
const Twitter = styled(AiOutlineTwitter)`
height: 26px;
width: 32px;
color: ${themes.white};
`
const Instagram = styled(AiOutlineInstagram)`
height: 26px;
width: 32px;
color: ${themes.white};

`
export default WorkWith
