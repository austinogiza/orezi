import React from 'react'
// import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { headerMedium,textCopy,bodyHeader,bodyText } from '../styles/Textsyles'
import pic from '../assets/pic.png'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const DetailedWork = () => {

  // const {slug} = useParams()


  return (
   <WorkBody variants={pageAnimation} initial="hidden" animate="show"  exit="exit">
     <Container>
       <Title><Titleh1>Kinikan Kinikan</Titleh1>
       <Titlep>Project Information</Titlep>
       </Title>

       <Project>

         <Projecth1>Project Brief</Projecth1>
         <Projecttext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet in in turpis gravida magnis ultricies. Ultrices viverra nunc nec pellentesque quisque id quam semper lacus. Dolor neque sit facilisis congue pellentesque mauris tortor, quam. Aliquam ut accumsan leo volutpat nullam eu eget. In lectus vitae aliquet lectus amet, vel ipsum, ullamcorper adipiscing. Ullamcorper morbi quis donec eget cras velit risus posuere mus. Neque tellus fermentum amet lobortis.</Projecttext>
         <Projecth1>Challenges</Projecth1>
         <Projecttext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet iaculis consequat pellentesque sapien purus in urna leo ut. Ipsum enim suspendisse aliquet lobortis.</Projecttext>
         <Projecth1>Approach</Projecth1>
         <Projecttext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet iaculis consequat pellentesque sapien purus in urna leo ut. Ipsum enim suspendisse aliquet lobortis.</Projecttext>
       </Project>
<ProjectImages>
  <Projectimg><Image src={pic} alt={`The Creativemena project`} /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
</ProjectImages>
<Projectlarge>
<Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
</Projectlarge>
<ProjectImages>
  <Projectimg><Image  src={pic} alt={`The Creativemena project`} /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
</ProjectImages>

     </Container>
   </WorkBody>
  )
}

const WorkBody = styled(motion.div)`
min-height: 600px;
width:100%;
padding: 10px 25px;
`
const Container = styled.div`
max-width: 1100px;
width:100%;
height: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
`
const Title = styled.div`
width:100%;
min-height: 100px;
margin: 17px 0;
`
const Titleh1 = styled(headerMedium)`
margin: 16px 0;
`
const Titlep = styled(textCopy)`
margin: 16px 0;
`
const Project = styled.div`
min-height: 500px;
max-width: 1100px;
width:100%;
background: ${themes.black};
padding: 40px;
@media only screen and (max-width: 800px){
  padding: 20px 16px;
}

`
const Projecth1 = styled(bodyHeader)`
margin: 20px 0 13px 0;
`
const Projecttext = styled(bodyText)``
const ProjectImages = styled.div`
margin: 20px 0;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
min-height:500px;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
}
`
const Projectimg = styled.div`
width: 100%;
height: 100%;
`
const Image = styled.img`
width: 100%;
height: 100%;
`
const Projectlarge = styled.div`
height: 100%;
width: 100%;
min-height:470px;
@media only screen and (max-width: 800px){
  min-height:250px;
}
`
export default DetailedWork
