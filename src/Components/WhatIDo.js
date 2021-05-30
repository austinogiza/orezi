import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { Header } from '../styles/Textsyles'

const WhatIDo = () => {
  return (
    <What>
  <Whattitle><Titleh1>What I Do</Titleh1></Whattitle>

  <Whatsection>
    <Whattop>
    <Whatskill>
    Wireframing & User Testing
    </Whatskill>
    <Whatskill>
    Branding & Visual Identity
    </Whatskill>
    <Whatskill>
    Mobile App & Web Design
    </Whatskill>

    </Whattop>
    <WhatMiddle>
    <Whatskill>
    Strategy & Design
    </Whatskill>
    <Whatskill>
    Design System
    </Whatskill>
    <Whatskill>
    User Experience Design
    </Whatskill>
    <Whatskill>
    Print Design
    </Whatskill>
    </WhatMiddle>
    <Whattop>
    <Whatskill>
    Augmented Reality Design
    </Whatskill>
    <Whatskill>
    Marketing Materials
    </Whatskill>
    <Whatskill>
    Product Design
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
min-height: 80px;
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin: 40px 0;
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
const Whatskill = styled.div`
display: flex;
cursor: pointer;
justify-content: center;
align-items: center;
padding: 24px 35px;
max-width: 350px;
width: 100%;
height: 78px;
border: 2px solid ${themes.yellow};
text-align: center;
background: ${themes.dark};
border-radius: 60px;
transition: all 0.3s ease-in;

:hover{
  opacity: 1;
background: ${themes.yellow};
transform-origin: bottom;
transition-property: background;
}
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


export default WhatIDo
