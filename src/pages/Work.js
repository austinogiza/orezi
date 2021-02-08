import React, {useEffect, useState} from 'react'
import styled,{keyframes} from 'styled-components'
import { bodyHeader, lightHeader,bodyText } from '../styles/Textsyles'
import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'
import {BsArrowRight} from  'react-icons/bs'
import PageLoading from '../Components/PageLoading'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { workUrl,workProductUrl,workflyerUrl,workpackageUrl, workcommunicationUrl, workcampaignUrl} from '../constants'
import { themes } from '../styles/ColorStyles'

const Work = () => {
  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(false)


 useEffect(() => {
async function fetchWork(){
  setLoading(true)
  const res = await axios.get(workUrl)
  console.log(res)
  setWorks(res.data)
  setLoading(false)
} 
fetchWork()
 }, [])

 const handleSelect = e =>{

 
   let word = e.target.value;
   console.log(word)

     console.log(word)
   if (word === "All"){
    setLoading(true)
    axios
    .get(workUrl)
    .then(res=>{
      setWorks(res.data)
      setLoading(false)
    })
   
   }
   else if(word ==="Product Design"){
    setLoading(true)
    axios
    .get(workProductUrl)
    .then(res=>{
      setWorks(res.data)
      setLoading(false)
    })
    
   
   }
   else if(word ==="Branding Identity"){
    setLoading(true)
    axios
    .get(workflyerUrl)
    .then(res=>{
      setWorks(res.data)
      setLoading(false)
    })
    
   
   }
   else if(word ==="Package"){
    setLoading(true)
    axios
    .get(workpackageUrl)
    .then(res=>{
      setWorks(res.data)
      setLoading(false)
    })

   }
   else if(word ==="Communication"){
    setLoading(true)
    axios
    .get(workcommunicationUrl)
    .then(res=>{
      setWorks(res.data)
        setLoading(false)
    })
   }
   else if(word ==="Campaign"){
    setLoading(true)
    axios
    .get(workcampaignUrl)
    .then(res=>{
      setWorks(res.data)
        setLoading(false)
    })
    
   }

   else if(word ==="Flyers"){
    setLoading(true)
    axios
    .get(workProductUrl)
    .then(res=>{
      setWorks(res.data)
      setLoading(false)
    })
   }
 }

  return (
   <Workbody>
     <Container>
       <Title><Titleh1>My Work</Titleh1></Title>

       <Workfilter>
       <Filtertitle>

         <Show>Showing <Showicon/></Show>
         <Workcategory>
           <Workul>
             <Workli value="All" onClick={handleSelect}>All</Workli>
             <Workli value="Branding Identity" onClick={handleSelect}>Branding Identity</Workli>
             <Workli value="Product Design" onClick={handleSelect}>Product Design</Workli>
             <Workli value="Package" onClick={handleSelect}>Package</Workli>
             <Workli value="Communication" onClick={handleSelect}>Communication</Workli>
             <Workli value="Campaign" onClick={handleSelect}>Campaign</Workli>
             <Workli value="Flyers" onClick={handleSelect}>Flyers</Workli>
           </Workul>
           <MobileWorkul>
            <Mobilelist>
         <Mobileselect>
         <Select onChange={handleSelect}>
               <Options selected value="All">All</Options>
               <Options value="Branding Identity"  >Branding Identity</Options>
               <Options value="Product Design">Product Design</Options>
               <Options value="Package" >Package</Options>
               <Options value="Communication">Communication</Options>
               <Options value="Campaign" >Campaign</Options>
               <Options value="Flyers" >Flyers</Options>
               
             </Select>
         </Mobileselect>
         
            </Mobilelist>
           </MobileWorkul>
         
         </Workcategory>
       </Filtertitle>
       {loading&& <Pagecenter><PageLoading/></Pagecenter>}
<Projects>


{works.length > 0 ? works.map(work=>{
    return (

  
  <Projectcover  key={work.id} >
  <Projectimg src={work.image} alt="The creative mena project" />
<Projecttitle>{work.title}</Projecttitle>
<Projecttext>{work.brief}</Projecttext>
<Projectlink to={`/work/${work.slug}`} />
  </Projectcover>
  )
  }): <div>

    <Producterror>
      No project available
    </Producterror>
  </div>}

  
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
const Mobileselect = styled.div`
min-height: 100px;
width: 100%;
`
const Select = styled.select`
max-width: 150px;
height: 44px;
width: 100%;
font-family: "Euclid-light";
font-size: 17px;
font-weight: 400;
line-height: 1.4;
padding: 5px;
border: 1px solid ${themes.black};
outline: none;
border-radius: 5px;
appearance: none;
--webkit-appearance: none;
--moz-appearance: none;

background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
background-repeat: no-repeat;
background-position: right 5px top 40%;
background-size: 15%;
:focus{
  border: 1px solid ${themes.yellow};
}
:active{
  border: 1px solid ${themes.yellow};
}
`
const Options = styled.option`
font-family: "Euclid-light";
font-size: 17px;
font-weight: 400;
line-height: 1.4;
background: ${themes.yellow};
color: ${themes.dark};
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
const Producterror = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;

font-family: "Euclid-bold";
font-size: 32px;
line-height: 1.4;
@media only screen and (max-width: 650px){
  font-size: 21px;
}
`

const Pagecenter = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;
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
width: 100%;
height: 100%;
@media only screen and (max-width: 650px){

display: block;
}
`
const Mobilelist = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
`


const Workli = styled.button`
margin: 0 15px;
border: none;
background: transparent;
outline: none;
font-family: "Euclid-medium";
font-size: 20px;
width: 100%;
font-weight: 400;
color: ${themes.white};
cursor: pointer;
line-height: 1;
height: 20px;
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
