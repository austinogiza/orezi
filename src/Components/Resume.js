import React from 'react'
import styled from 'styled-components'
import { resumeButton } from '../styles/Button'
import { themes } from '../styles/ColorStyles'
import { headerMedium,Body } from '../styles/Textsyles'

const Resume = () => {
  return (
    <Resumebody>
      <Container>
        <ResumeImage>
          <Image src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622486267/toy_vz7bsy_1_1_2_1_ud4ojm.png" alt="Creative Mena"/>
        </ResumeImage>
        <Resumecontainer>
          <Resumetitle>
          <Resumedesc><Resumecov>PDF</Resumecov></Resumedesc>
          <Resumeh1>Check out my résume.</Resumeh1></Resumetitle>
          <Resumetext><Resumep>I'm The Creative Mena, the creative genius you need. I'm not just talk, I've got the experience to back it up. </Resumep></Resumetext>
          <Resumebutton>
            <Resumebtn>Download</Resumebtn>
          </Resumebutton>
        </Resumecontainer>
      </Container>
    </Resumebody>
  )
}
const Resumebody = styled.div`
min-height: 579px;
max-width: 1180px;
width:100%;
margin: 60px auto;
padding: 10px 15px;

`
const Container = styled.div`
display: grid;
width:100%;
height: 100%;
grid-template-columns: auto 450px;

@media only screen and (max-width:768px){
  grid-template-columns: repeat(1,1fr);


}
`
const ResumeImage = styled.div`
width:100%;
height:100%;
@media only screen and (max-width:768px){
  min-height: 300px;
}
`
const Image = styled.img`
width:100%;
height:100%;
`
const Resumecontainer = styled.div`
width:100%;
background : ${themes.yellow};
max-height: 512px;
max-width: 447px;
margin: 0 auto;
padding: 10px 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
@media only screen and (max-width:768px){
  min-height: 512px;
  align-items: center;
}
`
const Resumetitle = styled.div`
width:100%;
min-height: 38px;
`
const Resumedesc = styled.div`
width:100%;
min-height: 38px;
margin: 0 0 24px 0;
`

const Resumecov = styled.div`
width: 90px;
height: 38px;
background: ${themes.dark};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${themes.yellow};
font-size: 24px;
font-weight: 400;


`
const Resumeh1 = styled(headerMedium)`
margin: 0 0 16px 0;
color: ${themes.dark};
`
const Resumetext = styled.div`
width:100%;
min-height: 38px;
`
const Resumep = styled(Body)`
color: ${themes.dark};

`
const Resumebutton = styled.div`
width:100%;
min-height: 38px;
margin: 64px 0 0 0 ;
`
const Resumebtn = styled(resumeButton)`

font-weight: 500;
line-height: 30px;
width:100%;
`
export default Resume
