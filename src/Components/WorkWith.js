import React from 'react'
import styled from 'styled-components'
import {mainButton} from '../styles/Button'
import hand from '../assets/hand.png'
import small from '../assets/small.png'
import { Header,Body } from '../styles/Textsyles'


const WorkWith = () => {
  return (
  <Work>
<Container>
  
<Workleft>
     <Worktitle><Workh1>Get in touch</Workh1></Worktitle>
     <Worktext><Workp>If you want to work together on a project or just have a chat, please don't hesitate to contact me.</Workp></Worktext>
    <Workbutton> <Workbtn to='/contact'>Contact Me</Workbtn></Workbutton>
   </Workleft>
   <Workmiddle>
     <Image src={small} alt="The creative mena"/>
   </Workmiddle>
</Container>
  </Work>
  )
}

const Work = styled.div`
background-image: url(${hand});
background-position: top 30% right 0;
background-size: 30%;
background-repeat: no-repeat;
min-height: 500px;
width: 100%;
height: 100%;
@media only screen and (max-width: 600px){
  background-size: 50%;
}
`
const Container = styled.div`
max-width: 1100px;
width: 100%;
height: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-areas: "Workleft Workmiddle"
"Workleft Workmiddle";
justify-content: center;
padding: 10px 25px;
@media only screen and (max-width: 600px){
  grid-template-columns: repeat(1,1fr);
grid-template-areas: "Workmiddle"
"Workleft";
}
`
const Workleft = styled.div`
grid-area:Workleft;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
height: 100%;
min-height: 300px;
@media only screen and (max-width: 600px){
  align-items: center;
  text-align: center;
}
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
margin: 40px 0 0 0;
@media only screen and (max-width: 600px){
  align-items: center;
  text-align: center;
  display: flex;
flex-direction: column;

justify-content: center;
}
`
const Workbtn = styled(mainButton)`

`
const Workmiddle = styled.div`
grid-area:Workmiddle;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
width: 100%;
height: 100%;
min-height: 300px;
@media only screen and (max-width: 600px){
  align-items: center;
}
`
const Image = styled.img`
height: 191px;
width: 283px;
`

export default WorkWith
