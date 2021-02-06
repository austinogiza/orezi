import React from 'react'
import styled from 'styled-components'
import { Body, Header, lightHeader } from '../styles/Textsyles'
import skill from '../assets/skills.png'
import skill1 from '../assets/skills1.png'
import skill2 from '../assets/skills2.png'

const Skills = () => {
  return (
<Skillsbody>
  <Title><Titleh1>My Skills</Titleh1></Title>

  <Skillset>
    <Skilltop>
<Skillcover>
<SkillImage src={skill} alt="The creative mena" />
<Cover>  <Coverh1>
  Branding
  </Coverh1>
  <Coverp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in.</Coverp></Cover>
</Skillcover>
    </Skilltop>
    <Skillbottom>
      <Skillmini>
      <Skillcover>
      <SkillImage src={skill1} alt="The creative mena" />
<Cover>  <Coverh1>
  Branding
  </Coverh1>
  <Coverp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in.</Coverp></Cover>
</Skillcover>
      </Skillmini>
      <Skillmini>
      <Skillcover>
      <SkillImage src={skill2} alt="The creative mena" />
<Cover>  <Coverh1>
  Branding
  </Coverh1>
  <Coverp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in.</Coverp></Cover>
</Skillcover>
      </Skillmini>
    </Skillbottom>
  </Skillset>
</Skillsbody>
  )
}


const Skillsbody = styled.div`
min-height: 1100px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 96px 0;
max-width: 1100px;
padding: 0 15px;
`

const Title = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
margin: 40px auto;

`

const Titleh1 = styled(Header)`

`
const Skillset = styled.div`
min-height: 1000px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Skilltop = styled.div`
height: 100%;
width: 100%;
min-height: 500px;
@media only screen and (max-width: 800px){

  min-height: 350px;
}
`
const Skillcover = styled.div`
height: 100%;
width: 100%;
min-height: 500px;
position: relative;

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
::after{
background: rgba(0,0,0,0.4);
position: absolute;
content: "";
top: 0;
left: 0;
width: 100%;
height: 100%;
}
@media only screen and (max-width: 800px){

min-height: 350px;
}
`

const SkillImage = styled.img`
position: absolute;
object-fit: cover;
height: 100%;
width: 100%;
z-index: -1;
top:0;
left: 0;

`
const Cover = styled.div`
position: relative;
z-index: 10;
padding: 0 65px ;
@media only screen and (max-width: 800px){
  padding: 0 25px ;
}
`
const Coverh1 = styled(lightHeader)`

`
const Coverp = styled(Body)`
margin: 13px 0 0 0;
`
const Skillbottom = styled.div`
min-height: 500px;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 12px;
height: 100%;
margin-top: 24px;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
  min-height: 350px;
}
`
const Skillmini = styled.div`
height: 100%;
width: 100%;
`
export default Skills
