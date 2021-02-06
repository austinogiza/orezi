import React, {useEffect}from 'react'
import styled from 'styled-components'
import {Header} from '../styles/Textsyles'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import work4 from '../assets/work4.png'
import { themes } from '../styles/ColorStyles'
import { Link } from 'react-router-dom'
import {  gsap, Power2} from 'gsap'


const SelectedWorks = () => {


const tl =gsap.timeline()
const scroll =()=>{

  tl.to(".container", 1, { css: { visibility: "visible" }})
    .from(".photo",1.4, { scale:1.6, ease:Power2.easeInOut, delay: -1.6 } )
}

  useEffect(() => {

scroll()
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

     <SelectedProjects onScroll={scroll} className="container"  >
       <Works className="img-container" >
         <Image src={work1} className="photo" alt="The creative mena projects"/>
         <Worktitle />
       </Works>
       <Works className="img-container"  >
  <Image src={work2}  className="photo" alt="The creative mena projects"/>
  <Worktitle />
       </Works>
       <Works className="img-container">
   <Image src={work3} className="photo" alt="The creative mena projects"/>
   <Worktitle />
       </Works>
       <Works  className="img-container"  >
    <Image src={work4}  className="photo" alt="The creative mena projects"/>
    <Worktitle />
       </Works>
     </SelectedProjects>
   </Selectbody>
  )
}


const Selectbody = styled.div`
padding:10px 25px;
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 96px 0;`
const Title = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 32px auto;
max-width: 1100px;

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
min-height: 600px;
width: 100%;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-gap: 13px;
visibility: hidden;
@media only screen and (max-width:800px){
  grid-template-columns: repeat(1,1fr);

}

/* .img-container::after{
position:absolute;
content: "";
top:0;
left: 0;
width: 100%;
height: 100%;
background: ${themes.yellow};
} */
`
const Works = styled.div`
position: relative;

@media only screen and (max-width:800px){
  height: 350px;

}
`
const Image = styled.img`
height: 100%;
width: 100%;

`
const Worktitle = styled(Link)`
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
`

export default SelectedWorks
