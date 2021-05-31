import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { Header } from '../styles/Textsyles'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import figma from '../assets/logo-figma.svg'
import after from '../assets/after-effect.svg'
import { useParams } from 'react-router'
import axios from 'axios'
import { workDetailUrl } from '../constants'
import PageLoader from '../Components/PageLoader'
import SmallPageLoading from '../Components/SmallPageLoading'
const DetailedWork = () => {
  const [loading,setLoading] = useState(false)
  const [work,setWork] = useState(null)

  const {slug} = useParams()
  
  const fetchWorkPost =()=>{
    setLoading(true)

    axios.get(workDetailUrl(slug))
    .then(res=>{
      setWork(res.data)
      setLoading(false)
    })
    .catch(err=>{
     
      setLoading(false)
    })
   
   
  }
  


  useEffect(()=>{
  fetchWorkPost()
}, [])

  return (
   <WorkBody >
     <Container>

     {loading ?
     <>
     <PageLoader/>
     <SmallPageLoading/>
     <SmallPageLoading/>
     <SmallPageLoading/> 
     <SmallPageLoading/>

     </>:<>
{work && <>

  <Title><Titleh1>{work.title}</Titleh1>
       </Title>

       <ProjectImages dangerouslySetInnerHTML={{__html: work.text}}/>


{work.software.length > 0 && 
  <Softwaresused>
<Softcover>
<Softtitle>Software used</Softtitle><Softwares>
{work.software.map((software)=>{
  return (
    <>
{software.title === "Figma" && <Figma src={figma} alt="The creative mena tools"/>}
{software.title === "After Effects" && <After src={after} alt="The creative mena tools" />}
{software.title === "Illustrator" && <Illustrator  src={illustrator} alt="The creative mena tools"/> }
{software.title === "Photoshop" && <Photoshop src={photoshop} alt="The creative mena tools" />}
</>
  )
}

)}





</Softwares>
</Softcover>
</Softwaresused>
}

</>}

     </>}
      
     </Container>
   </WorkBody>
  )
}

const WorkBody = styled.div`
min-height: 600px;
width:100%;
padding: 10px 24px;
overflow-x: hidden;
word-wrap: break-word;

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

const ProjectImages = styled.div`
margin: 16px 0;
max-width: 1100px;
width: 100%;
min-height:425px;
img{
  max-width: 1100px;
width: 100%;
margin: 8px 0  !important;
min-height: 200px !important;
}
a{
  color: ${themes.yellow};
  transition: 0.3s ease-in;
  :hover{
    
  color: ${themes.primary};
  }
}


p{
  line-height: 1.6  !important;
  font-size: 16px  !important;
  margin: 8px 0  !important;
  text-align: left  !important;
  
}
h1, h2,h3,h4{
  margin: 4px 0 !important;
}
`

const Softwaresused = styled.div`
height: 100%;
width: 100%;
min-height:100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Softcover = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
@media only screen and (max-width: 650px){

  flex-direction: column;
}
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
margin: 8px 15px;
`
const Photoshop = styled.img`
height: 40px;
width: 40px;
border-radius: 5px;
margin: 4px;
`
const Illustrator = styled.img`
height: 40px;
width: 40px;
border-radius: 5px;
margin: 4px;
`

const Figma = styled.img`
height: 40px;
width: 40px;
border-radius: 5px;
margin: 4px;
`
const After = styled.img`
height: 40px;
width: 40px;
margin: 4px;
border-radius: 5px;
`
export default DetailedWork
