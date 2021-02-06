import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { Header } from '../styles/Textsyles'
import lifebank from '../assets/LifeBank.svg'
import afriOne from '../assets/afriOne.svg'
import lirslogo from '../assets/lirslogo-1.svg'
import RIGGA from '../assets/RIGGA.svg'
import reezuta from '../assets/reezuta.svg'
import staxckfill from '../assets/staxckfill.svg'
import agrific from '../assets/agrific.svg'


const Client = () => {
  return (
    <What>
  <Whattitle><Titleh1>My Client</Titleh1></Whattitle>

  <Whatsection>
  <WhatMiddle>
    <Whatskill>
<Image src={lifebank} alt="The creative mena clients"/>
    </Whatskill>
    <Whatskill>
    <Image src={RIGGA} alt="The creative mena clients"/>
    </Whatskill>
    <Whatskill>
    <Image src={afriOne} alt="The creative mena clients"/>
    </Whatskill>
    <Whatskill>
    <Image src={reezuta} alt="The creative mena clients"/>
    </Whatskill>
    </WhatMiddle>
    <Whattop>
    <Whatskill>
    <Image src={staxckfill} alt="The creative mena clients"/>
    </Whatskill>
    <Whatskill>
  <Image src={agrific} alt="The creative mena clients"/>
    </Whatskill>
    <Whatskill>
    <Image src={lirslogo} alt="The creative mena clients"/>
    </Whatskill>

    </Whattop>
  
  </Whatsection>
</What>
  )
}

const What = styled.div`
width: 100%;
min-height: 600px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin: 50px 0;

`
const Whattitle = styled.div`
min-height: 70px;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
@media only screen and (max-width: 700px){
  min-height: 40px;
}
`
const Titleh1 = styled(Header)`

`
const Whatsection = styled.div`
min-height: 400px;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`
const Whattop = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 50px;
@media only screen and (max-width: 780px){
  grid-template-columns: repeat(1,1fr);
}
`

const Image = styled.img`
height: 78px;
width: 100%;
`
const Whatskill = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 24px 35px;
max-width: 250px;
height: 78px;
width: 100%;
text-align: center;
background: ${themes.white};
height: 120px;
border-radius: 22px;
transition: all 0.3s ease-in;

`
const WhatMiddle = styled.div`
margin: 40px 0;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 50px;
@media only screen and (max-width: 780px){
  grid-template-columns: repeat(1,1fr);
}
`


export default Client
