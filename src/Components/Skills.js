import React from 'react'
import styled from 'styled-components'
import { Body, Header, skillTexts } from '../styles/Textsyles'

const Skills = () => {
  return (
<Skillsbody>
  <Title><Titleh1>My Skills</Titleh1></Title>

  <Skillset>

    <Skillbottom>
      <Skillmini>
      <Skillcover>
      <SkillImage src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622486070/b1f4e9118261741.6085f2a93f03d_1_u0bvcs_1_1_1_oeyhjr.png" alt="The creative mena" />
<Cover>  <Coverh1>
Co-operate Design
  </Coverh1>
  <Coverp>Give your business and product an identity, a life of its own. Cut through the noise and reach a wider audience with marketing materials that stand out.</Coverp></Cover>
</Skillcover>
      </Skillmini>
      <Skillmini>
      <Skillcover>
      <SkillImage src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622486147/gtb_1_z5lmcg_1_1_1_jnrbmw.jpg`} alt="The creative mena" />
<Cover>  <Coverh1>
Product Design
  </Coverh1>
  <Coverp>User experience is a critical part of your product's infrastructure. Let me help you craft a seamless user experience with a full product experience</Coverp></Cover>
</Skillcover>
      </Skillmini>
    </Skillbottom>
    
  
  </Skillset>
</Skillsbody>
  )
}


const Skillsbody = styled.div`
min-height: 1000px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 48px 0;
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
min-height: 500px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

const Skillcover = styled.div`
height: 100%;
width: 100%;
min-height: 400px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 16px 0;
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
min-height: 300px;
width: 100%;
height: 100%;
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
const Coverh1 = styled(skillTexts)`

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
grid-auto-rows: minmax(250px,auto);
margin-top: 24px;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  min-height: 300px;
}
`
const Skillmini = styled.div`
width: 100%;
@media only screen and (max-width: 650px){
height: 350px;
}
`
export default Skills
