import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { themes } from '../styles/ColorStyles';
import { Body, Header, WorkCopy } from '../styles/Textsyles';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import {TweenLite, Power3} from 'gsap/all'

const WordOn = () => {
const slider = useRef(null)

const [current, setCurrent] =useState(0)

const reviews = [

  {
    id: 1,
    name: "Chinny Obinwanne",
    image:
      "https://res.cloudinary.com/dimrd8ott/image/upload/v1622366821/1527291814542_1_1_tmbgnl.jpg",
    quote:
      "Had a great experience with Onofua. He created great designs for our team. I tried him the first time but after the team got the designs they kept requesting for more after each design project because he delivers more than they expected.",
    role: "MD, IBCLC Founder The Milk Booster",
  },
  {
    id: 2,
    name: "Jeiel SANUSI",
    image:
      "https://res.cloudinary.com/dimrd8ott/image/upload/v1622366899/1598965737994_g8sxsy.jpg",
    quote:
      "If you need a creative with team spirit, positive energy, drive and one who is straightforward, Orezimena is your man.",
    role: "Art Director at IntenseNG",
  },
  {
    id: 3,
    name: "Aisha Abiola",
    image:
      "https://res.cloudinary.com/dimrd8ott/image/upload/v1622366966/1564313712712_pvwagh.jpg",
    quote:
      "Ridiculously efficient is the phrase that comes to mind when I think about Orezi.",
    role: "Chief Of Staff at LifeBank Nigeri",
  }
]


const nextSlide =()=>{
  
  const nextReview = current + 1
  if( nextReview < reviews.length){
  

  setCurrent(nextReview)
    TweenLite.to(slider.current, 1, {
      ease: Power3.easeOut,
      x: -20
      
    })

    setCurrent(nextReview)
  }
}


const previousSlide = () =>{
  const previousReview = current - 1;
  if(reviews[current].id === 1){
  
  
}else{
    setCurrent(previousReview)
    TweenLite.to(slider.current, 1, {
      ease: Power3.easeOut,
      x: 20
      
    })

  }
}

  return (      
  <Slidercontainer>
     <Slidetitle>
       <Slideh1>Word on the street</Slideh1>
     </Slidetitle>
{reviews.length > 0 && 
     <Slidebody ref={slider}>
       <SlideImage>
         <Image src={`${reviews[current].image}`} alt="the creative mena client"/>
       </SlideImage>
       <Slidedesc>
         <Slidetop>
           <Slidetext>{reviews[current].quote}</Slidetext>
         </Slidetop>
         <Slidebottom>
           <Slidename>
             <Name>{reviews[current].name}</Name>
             <Role>{reviews[current].role}</Role>
           </Slidename>
           <Slidecontrol>
           <Left onClick={()=>previousSlide()}>
<AiOutlineLeftIcon/>

             </Left>
             <Right onClick={()=>nextSlide()}>

               <AiOutlineRightIcon/>
             </Right>
           </Slidecontrol>
         </Slidebottom>
       </Slidedesc>
     </Slidebody>
    }
    </Slidercontainer>
 
  )
}


const Slidercontainer = styled.div`
margin: 32px 0;
min-height: 300px;
width: 100%;
display: flex;
flex-direction: column;
padding: 10px 25px;
`
const Slidetitle = styled.div`
display: flex;
min-height: 50px;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 24px 0;
`
const Slideh1 = styled(Header)``
const Slidebody = styled.div`
display: grid;
min-height: 400px;
width: 100%;
grid-template-columns: repeat(2,1fr);
justify-content: center;
align-items: center;
grid-gap: 66px;
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap: 24px;
}
`
const SlideImage = styled.div`
min-height: 200px;
width: 100%;
max-width: 400px;
`
const Image = styled.img`
height: 100%;
width: 100%;
border-top-left-radius: 45px;
`
const Slidedesc = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Slidetop = styled.div`

min-height: 100px;
width: 100%;
display: flex;
flex-direction: column;
margin: 32px 0;

`
const Slidetext = styled(Body)`

width: 100%;
`
const Slidebottom = styled.div`
display: flex;
width: 100%;
min-height: 100px;
display: grid;
grid-template-columns: repeat(2,1fr);
justify-content: center;
align-items: center;
grid-gap: 24px;
grid-auto-rows: minmax(60px,auto);
@media only screen and (max-width: 650px){
  grid-template-columns: repeat(1,1fr);
  grid-gap: 12px;
}
`
const Slidename = styled.div`
width: 100%;
white-space: nowrap;

flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const Name = styled(WorkCopy)`
word-wrap: break-word;
`
const Role = styled(Body)`
word-wrap: break-word;
color: ${themes.primary};`
const Slidecontrol = styled.div`
width: 100%;
height: 100px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`
const Left = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 14px 21px;
width: 60px;
height: 60px;
background: #EAAE1E;
margin-right: 12px;
cursor: pointer;
outline: none;
border: none;
`
const Right = styled.button`
outline: none;
border: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 14px 21px;
cursor: pointer;
width: 60px;
height: 60px;
background: #EAAE1E;
`

const AiOutlineLeftIcon = styled(AiOutlineLeft)`
height: 24px;
width: 32px;
color: ${themes.white};

`
const AiOutlineRightIcon = styled(AiOutlineRight)`
height: 24px;
width: 32px;
color: ${themes.white};
`
export default WordOn
