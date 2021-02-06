import React from 'react'
import styled from 'styled-components'
import pic from '../assets/projectsmall.png'
import { Header,WorkCopy,captionHeader } from '../styles/Textsyles'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import { themes } from '../styles/ColorStyles'
import { workButtonNew } from '../styles/Button'
const MyWork = () => {
  return (
 <Work>

   <Container>
     <Worktitle><Titleh1>My Work</Titleh1></Worktitle>

     <WorkSection>
       <Workcover>
         <WorkImage>
           <Image src={pic} alt="The creative mena project"/>
         </WorkImage>
         <WorkDetails>
         <Worktool><Photoshop src={photoshop} alt="The creative mena tool"/> <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool>
           <Workh1>Agrific Brand Identity</Workh1>
           <Workcat><Category>Branding & Visual Identity</Category><Category>Marketing Materials</Category></Workcat>
<Workbutton>View Project</Workbutton>
         </WorkDetails>
       </Workcover>
       <Workcover>
    
         <WorkDetails>
         <Worktool><Photoshop src={photoshop} alt="The creative mena tool"/> <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool>
           <Workh1>Agrific Brand Identity</Workh1>
           <Workcat><Category>Branding & Visual Identity</Category><Category>Marketing Materials</Category></Workcat>
<Workbutton>View Project</Workbutton>
         </WorkDetails>
         <WorkImage>
           <Image src={pic} alt="The creative mena project"/>
         </WorkImage>
       </Workcover>
       <Workcover>
         <WorkImage>
           <Image src={pic} alt="The creative mena project"/>
         </WorkImage>
         <WorkDetails>
         <Worktool><Photoshop src={photoshop} alt="The creative mena tool"/> <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool>
           <Workh1>Agrific Brand Identity</Workh1>
           <Workcat><Category>Branding & Visual Identity</Category><Category>Marketing Materials</Category></Workcat>
<Workbutton>View Project</Workbutton>
         </WorkDetails>
       </Workcover>
  
     </WorkSection>
   </Container>
 </Work>
  )
}

const Work = styled.div`

width: 100%;
min-height: 600px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin: 50px 0;
`
const Container = styled.div`
min-height: 600px;
width: 100%;
max-width: 1100px;
margin: 0 auto;
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
`

const Worktitle = styled.div`
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

const WorkSection = styled.div`
width: 100%;
min-height: 600px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
padding: 10px 25px;
`

const Workcover = styled.div`
margin: 40px 0;
display: grid;
grid-template-columns: repeat(2, minmax(10px,1fr));
grid-gap: 59px;
grid-auto-rows: 400px;
@media only screen and (max-width: 700px){
  grid-gap: 10px;
  grid-template-columns: repeat(1, minmax(10px,1fr));
  grid-auto-rows: 250px;
  margin: 20px 0;
}
`

const WorkImage = styled.div`
width: 100%;
height: 100%;
max-height: 400px;
@media only screen and (max-width: 700px){
  max-height: 250px;
}
`

const Image = styled.img`
width: 100%;
height: 100%;
`

const WorkDetails = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: center;
@media only screen and (max-width: 700px){
  align-items:center;
}

`

const Worktool = styled.div`
display: flex;
flex-direction: row;
align-items:flex-start;
justify-content: center;
`

const Photoshop = styled.img`
height: 50px;
width: 50px;
border-radius: 5px;


`
const Illustrator = styled.img`
height: 50px;
width: 50px;
border-radius: 5px;
margin: 0 15px;
`

const Workh1 = styled(WorkCopy)`
margin: 16px 0;
`

const Workcat = styled.div`
display: flex;
flex-direction: row;
align-items:flex-start;
justify-content: center;
`

const Category = styled(captionHeader)`
color: ${themes.yellow};
margin: 0 15px 0 0;
`

const Workbutton = styled(workButtonNew)`
margin: 40px 0 0 0;
`


export default MyWork
