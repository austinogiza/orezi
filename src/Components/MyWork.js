import React,  { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Header,WorkCopy,captionHeader } from '../styles/Textsyles'
import { themes } from '../styles/ColorStyles'
import { workButtonNew } from '../styles/Button'
import { shortWorkUrl } from '../constants'
import axios from 'axios'
import PageLoader from './PageLoader'
const MyWork = () => {
  const [work, setWork]= useState([])
const [loading, setLoading] = useState(false)

  const fetchWork =()=>{
    setLoading(true)
    axios.get(shortWorkUrl)
    .then(res=>{
      setWork(res.data)
      setLoading(false)
    })
    .catch(err=>{
      setLoading(false)

    })
  }
  useEffect(()=>{
    fetchWork()
  }, [])
  return (
 <Work>

   <Container>
     <Worktitle><Titleh1>My Work</Titleh1></Worktitle>


{loading ? <>


<PageLoad>

{loading &&   [1,2,3].map(load=> 

<PageLoader key={load} /> )}
</PageLoad>

</>: <>
     <WorkSection>
   
     {work[0] && <>
      <Workcover>
    

      <WorkImage>
           <Image src={work[0].image} alt="The creative mena project"/>
         </WorkImage>
         <WorkDetails>
         {/* <Worktool><Photoshop src={photoshop} alt="The creative mena tool"/> <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool> */}
           <Workh1>{work[0].title}</Workh1>
           <Workcat><Category>{work[0].category}</Category></Workcat>
<Workbutton to={`/work/${work[0].slug}`}>View Project</Workbutton>
         </WorkDetails>

    
    
       </Workcover>

     </>}

     {work[1] && <>
      <Workcover>
    
    <WorkDetails>
    {/* <Worktool><Photoshop src={work[1].image} alt="The creative mena tool"/> 
    <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool> */}
      <Workh1>{work[1].title}</Workh1>
      <Workcat><Category>{work[1].category}</Category></Workcat>
<Workbutton to={`/work/${work[1].slug}`}>View Project</Workbutton>
    </WorkDetails>
    <WorkImage>
      <Image src={work[1].image} alt="The creative mena project"/>
    </WorkImage>
  </Workcover>

     </>}

     {work[2] && 
     
     <>
     <Workcover>
         <WorkImage>
           <Image src={work[2].image} alt="The creative mena project"/>
         </WorkImage>
         <WorkDetails>
         {/* <Worktool><Photoshop src={photoshop} alt="The creative mena tool"/> <Illustrator  src={illustrator} alt="The creative mena tool"/></Worktool> */}
           <Workh1>{work[2].title}</Workh1>
           <Workcat><Category>{work[2].category}</Category></Workcat>
<Workbutton to={`/work/${work[2].slug}`}>View Project</Workbutton>
         </WorkDetails>
       </Workcover>
  
     </>}
       
     </WorkSection>
     </>}
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

// const Worktool = styled.div`
// display: flex;
// flex-direction: row;
// align-items:flex-start;
// justify-content: center;
// `

// const Photoshop = styled.img`
// height: 50px;
// width: 50px;
// border-radius: 5px;


// `
// const Illustrator = styled.img`
// height: 50px;
// width: 50px;
// border-radius: 5px;
// margin: 0 15px;
// `

const Workh1 = styled(WorkCopy)`
margin: 8px 0;
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
const PageLoad = styled.div`
display: flex;
flex-direction: column;
min-height: 300px;
width: 100%;
`
export default MyWork
