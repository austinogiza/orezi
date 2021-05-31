import React, {useEffect}from 'react'
import styled from 'styled-components'
import {Header} from '../styles/Textsyles'
import { themes } from '../styles/ColorStyles'
import { Link } from 'react-router-dom'
import {  gsap, ScrollTrigger} from 'gsap/all'
import { motion } from 'framer-motion'

const SelectedWorks = () => {


    gsap.registerPlugin(ScrollTrigger)
   


  useEffect(() => {

})


  return (
   <Selectbody>

     <Title>
       <TitleTxt>
         <TextH2>Selected Work</TextH2>
       </TitleTxt>
       <WorksView>
         <Viewworks><Link to='/work'>View All</Link></Viewworks>
       </WorksView>
     </Title>

     <SelectedProjects >
       <Works initial={{y: 20}} animate={{y: 0, transition: {duration: 1}}}   >
         <Image src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622485930/Artboard_1_nbcbz8.png`}  alt="The creative mena projects"/>
        
       </Works>
       <Works initial={{y: 30}} animate={{y: 0, transition: {duration: 1, delay: 0.3}}} >
  <Image src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622485929/Artboard_4_lqm6wg.png`}     alt="The creative mena projects"/>
  <Worktitle />
       </Works>
       <Works initial={{y: 30}} animate={{y: 0, transition: {duration: 1, delay: 0.5}}} >
   <Image src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622485929/Artboard_2_pozxx2.png`}   alt="The creative mena projects"/>
   <Worktitle />
       </Works>
       <Works initial={{y: 30}} animate={{y: 0, transition: {duration: 1, delay: 0.9}}} >
    <Image src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622485929/Artboard_3_douprc.png"  alt="The creative mena projects"/>
    <Worktitle />
       </Works>
     </SelectedProjects>
   </Selectbody>
  )
}


const Selectbody = styled.div`
padding:10px 24px;
min-height: 200px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 24px 0;

@media only screen and (max-width : 650px){
  margin: 16px 0;
}

`

const Title = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 24px auto;
max-width: 1100px;

@media only screen and (max-width : 650px){
  flex-direction: column;
}

`
const TitleTxt = styled.div`

`
const TextH2 = styled(Header)`

`
const WorksView = styled.div`

`
const Viewworks = styled.div`
font-family: "Euclid-light";
font-size: 20px;
font-weight: 400;
line-height: 1.4;
position: relative;
color: ${themes.white};
cursor: pointer;

a{
  color: ${themes.white};
  transition: all 0.4s ease-in;
  :hover{
    color: ${themes.yellow};
  }
}
transition: all 0.4s ease-in;
@media only screen and (max-width: 650px){
  font-size: 17px;
}

::after{
  position: absolute;
  height: 2px;
width: 74px;
background: ${themes.yellow};
content: "";
left: 0;
bottom: -3px;
transition: all 0.4s ease-in;
}

:hover{
  color: ${themes.yellow};
}


`
const SelectedProjects = styled.div`
height: 100%;
width: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 13px;

@media only screen and (max-width: 800px){
  grid-template-columns: repeat(1,1fr);
}

`
const Works = styled(motion.div)`
position: relative;
height: 100%;
`
const Image = styled(motion.img)`
height: 100%;
width: 100%;
`
const Worktitle = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
`

export default SelectedWorks
