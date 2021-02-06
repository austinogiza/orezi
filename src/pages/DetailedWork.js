import React from 'react'
// import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {BodyNew, Header } from '../styles/Textsyles'
import pic from '../assets/projectsmall.png'
import pic1 from '../assets/projectlarge.png'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
const DetailedWork = () => {

  // const {slug} = useParams()


  return (
   <WorkBody >
     <Container>
       <Title><Titleh1>Kinikan Kinikan</Titleh1>
       <Titlep>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa laborum inventore maiores nemo nobis numquam molestias. Voluptates, debitis officia.</Titlep>
       </Title>

<ProjectImages>
  <Projectimg><Image src={pic} alt={`The Creativemena project`} /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`} /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
</ProjectImages>
<Projectlarge>
<Projectimg><Image src={pic1} alt={`The Creativemena project`}  /></Projectimg>
</Projectlarge>
<ProjectImages>
  <Projectimg><Image  src={pic} alt={`The Creativemena project`} /></Projectimg>
  <Projectimg><Image src={pic} alt={`The Creativemena project`}  /></Projectimg>
</ProjectImages>
<Softwaresused>
<Softcover>
<Softtitle>Software used</Softtitle><Softwares><Photoshop src={photoshop} alt="The creative mena tools" /><Illustrator  src={illustrator} alt="The creative mena tools"/> </Softwares>
</Softcover>
</Softwaresused>
     </Container>
   </WorkBody>
  )
}

const WorkBody = styled.div`
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
const Titleh1 = styled(Header)`
margin: 16px 0;
color: ${themes.yellow}
`
const Titlep = styled(BodyNew)`
margin: 16px 0;
`


const ProjectImages = styled.div`
margin: 20px 0;
width: 100%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
min-height:425px;
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

const Softwaresused = styled.div`
height: 100%;
width: 100%;
min-height:100px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
`
const Softcover = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
`
const Softtitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 23px;
font-weight: 600;
line-height: 41px;
letter-spacing: 0.025em;
text-align: justified;
color: ${themes.white};
height: 51px;
width: 100%;
max-width: 223px;
border-radius: 23px;
padding: 5px, 30px, 5px, 30px;
background: ${themes.yellow};


`
const Softwares = styled.div`
margin: 0 15px;
`
const Photoshop = styled.img`
height: 63px;
width: 63px;
border-radius: 5px;
margin: 0 15px;
`
const Illustrator = styled.img`
height: 63px;
width: 63px;
border-radius: 5px;
`
export default DetailedWork
