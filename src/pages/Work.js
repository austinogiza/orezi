import React from 'react'
import styled,{keyframes} from 'styled-components'
import { bodyHeader, lightHeader,bodyText } from '../styles/Textsyles'
import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'
import {BsArrowRight} from  'react-icons/bs'
import pic from '../assets/projectsmall.png'
import bla from '../assets/bla.png'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
   <Workbody>
     <Container>
       <Title><Titleh1>My Work</Titleh1></Title>

       <Workfilter>
       <Filtertitle>

         <Show>Showing <Showicon/></Show>
         <Workcategory>
           <Workul>
             <Workli>All</Workli>
             <Workli>Branding Identity</Workli>
             <Workli>Product Design</Workli>
             <Workli>Package</Workli>
             <Workli>Communication</Workli>
             <Workli>Campaign</Workli>
             <Workli>Flyers</Workli>
           </Workul>
           <MobileWorkul>
             <Workli>All</Workli>
         
           </MobileWorkul>
         
         </Workcategory>
       </Filtertitle>
<Projects>

  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg  src={bla} alt="The creative mena project"/>
<Projecttitle>Kinikan KiniKan - Brand 
Identity Design</Projecttitle>
<Projecttext>Creating a brand that helps
us solve this and that</Projecttext>
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  <Projectcover>
 <Projectimg src={pic} alt="The creative mena project" />
  <Projectlink />
  </Projectcover>
  
</Projects>
       </Workfilter>
     </Container>
   </Workbody>
  )
}
const Workbody = styled.div`
min-height: 600px;
width:100%;
padding: 10px 25px;

background-image: url(${inv}),url(${ni});
background-size: 20%,20%;
background-repeat: no-repeat, no-repeat;
background-position: left -10px top 20%, right -5% top 65%;
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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Titleh1 = styled(lightHeader)`
margin: 16px 0;
`

const Workfilter = styled.div`
min-height: 100px;
width: 100%;
`

const Filtertitle = styled.div`
display: flex;
margin: 50px 0;
`
const Show = styled.div`
width: 200px;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
font-family: "Euclid-medium";
font-size: 20px;
font-weight: 400;
line-height: 1.4;
@media only screen and (max-width: 650px){
  font-size: 17px;
}
`
const Showicon = styled(BsArrowRight)`
margin: 0 0 0 16px;
`
const Workcategory = styled.div`
width: 100%;
height: 100%;
`
const Workul = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
@media only screen and (max-width: 650px){

  display: none;
}

`
const MobileWorkul = styled.ul`
display: none;
@media only screen and (max-width: 650px){

display: block;
}
`


const Workli = styled.li`
margin: 0 15px;
font-family: "Euclid-medium";
font-size: 20px;
width: 100%;
font-weight: 400;
line-height: 1;
@media only screen and (max-width: 650px){
  font-size: 17px;

}
`

const Projects = styled.div`
min-height: 600px;
width: 100%;
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 56px;
grid-auto-rows:350px;
@media only screen and (max-width: 800px){
  grid-template-columns: repeat(2,1fr);
  grid-gap: 22px;
}
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-auto-rows:250px;
  grid-gap: 22px;
}
`
const Projectcover = styled.div`
width: 100%;
height: 100%;
position: relative;
z-index: 1;
padding: 10px 25px;
`
const Projectimg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const upAnim = keyframes`
0%{
  transform: translateY(20px);
  opacity: 0;
}
100%{
  transform: translateY(0px);
  opacity: 1;

}
`
const Projecttitle = styled(bodyHeader)`
margin: 16px 0;
opacity: 0;
${Projectcover}:hover & {
  opacity: 1;
  animation: ${upAnim} 1s ease-in;
}
`
const Projecttext = styled(bodyText)`
opacity: 0;
${Projectcover}:hover & {
  opacity: 1;
  animation: ${upAnim} 1s ease-in;
}
`
const Projectlink = styled(Link)`
 object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
z-index: 3;

`
export default Work
