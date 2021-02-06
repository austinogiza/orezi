import React from 'react'
import styled from 'styled-components';
import place from '../assets/place.png'
import { Body } from '../styles/Textsyles';
const WordOn = () => {

  return (
    <div>
      
  <Slidercontainer>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena" />
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
     <Slidercover>
       <SliderImage src={place} alt="The creative mena"/>
       <Slidertext>Kagilari</Slidertext>
     </Slidercover>
      
    </Slidercontainer>
    </div>
  )
}


const Slidercontainer = styled.div`
display: flex;
min-height: 300px;
width: 100%;
`
const Slidercover = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
min-height: 200px;
width: 100%;
`
const SliderImage = styled.img``
const Slidertext = styled(Body)`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
height: 30px;
text-align: center;
width: 100%;
`
export default WordOn
