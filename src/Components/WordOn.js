import React from 'react'
import styled from 'styled-components';
import client from '../assets/client.png'
import { themes } from '../styles/ColorStyles';
import { Body, Header, WorkCopy } from '../styles/Textsyles';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'

const WordOn = () => {

//   const [active, setActive] = useState({
// isActive1: true,
// isActive2: false,
// isActive3: false,

// })
  return (      
  <Slidercontainer>
     <Slidetitle>
       <Slideh1>Word on the street</Slideh1>
     </Slidetitle>

     <Slidebody>
       <SlideImage>
         <Image src={client} alt="the creative mena client"/>
       </SlideImage>
       <Slidedesc>
         <Slidetop>
           <Slidetext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices cras dui quis dolor lectus at. Morbi odio enim, nisl nulla nunc dignissim at. Nisi commodo, fames sapien sed vitae quam at tempus. Turpis quis egestas in.</Slidetext>
         </Slidetop>
         <Slidebottom>
           <Slidename>
             <Name>Alexandre Phillip</Name>
             <Role>CEO, This & That</Role>
           </Slidename>
           <Slidecontrol>
             <Left></Left>
             <Right></Right>
           </Slidecontrol>
         </Slidebottom>
       </Slidedesc>
     </Slidebody>
    </Slidercontainer>
 
  )
}


const Slidercontainer = styled.div`
margin: 32px 0;
min-height: 300px;
width: 100%;
display: flex;
flex-direction: column;
padding: 10px 25px;
`
const Slidetitle = styled.div`
display: flex;
min-height: 50px;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 24px 0;
`
const Slideh1 = styled(Header)``
const Slidebody = styled.div`
display: grid;
min-height: 400px;
width: 100%;
grid-template-columns: repeat(2,1fr);
justify-content: center;
align-items: center;
grid-gap: 66px;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap: 24px;
}
`
const SlideImage = styled.div`
height: 100%;
width: 100%;
`
const Image = styled.img`
height: 100%;
width: 100%;
border-top-left-radius: 45px;
`
const Slidedesc = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Slidetop = styled.div`
height: 100%;
min-height: 100px;
width: 100%;
display: flex;
flex-direction: column;
margin: 32px 0;

`
const Slidetext = styled(Body)`
height: 100%;
width: 100%;
`
const Slidebottom = styled.div`
display: flex;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
justify-content: center;
align-items: center;
grid-gap: 24px;
grid-auto-rows: minmax(250px,auto);
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap: 12px;
}
`
const Slidename = styled.div`
width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Name = styled(WorkCopy)``
const Role = styled(Body)`

color: ${themes.primary};`
const Slidecontrol = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`
const Left = styled(AiOutlineLeft)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 14px 21px;
width: 60px;
height: 60px;
background: #EAAE1E;
margin-right: 12px;
cursor: pointer;
`
const Right = styled(AiOutlineRight)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 14px 21px;
cursor: pointer;
width: 60px;
height: 60px;
background: #EAAE1E;
`
export default WordOn
