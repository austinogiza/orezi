import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import ballon1 from '../assets/Baloons0001.svg'
import ballon2 from '../assets/Baloons0002.svg'
import { headerMedium } from '../styles/Textsyles'
import { workButton } from '../styles/Button'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import whatsapp from '../assets/whatsapp.svg'
const Business = () => {
  return (
<Businessbody>

 <Businesscover>

 <BusinessTitle>
    <Businessh1>I would love to help you bring that idea, business, brand or products to live. </Businessh1>
  </BusinessTitle>

  <Businessbtn>
    <Businessbutton to='/contact'>
    Work With Me
    </Businessbutton>

  </Businessbtn>
  <Businesssocials>
    <Facebook>
      <Facebookimg src={facebook} alt="The creative mena social media"/>
        
    </Facebook>
    <Twitter>
      <Twitterimg   src={twitter} alt="The creative mena social media"/>
    </Twitter>
    <WhatsApp>
      <Whatsappimg  src={whatsapp} alt="The creative mena social media"/>
    </WhatsApp>
  </Businesssocials>
 </Businesscover>

</Businessbody>
  )
}

const Businessbody = styled.div`
background: ${themes.yellow};
display: flex;
justify-content: center;
align-items: center;
min-height: 600px;
width: 100%;
background-image: url(${ballon2}),url(${ballon1});
background-size: 25%,25%;
background-position: top -30px left 0%, bottom -20% right 0%;
background-repeat: no-repeat, no-repeat;
height: 100%;
margin: 16px 0; 
@media only screen and (max-width: 600px){
  min-height: 500px;
}
`
const Businesscover = styled.div`
min-height: 600px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 750px;
margin: 0 auto;
text-align: center;
`
const BusinessTitle = styled.div`
min-height: 40px;
width: 100%;
`
const Businessh1 = styled(headerMedium)`
color: ${themes.dark};
padding: 10px 25px;

`
const Businessbtn = styled.div`
min-height: 40px;
width: 100%;
margin: 48px 0 40px 0;
display: flex;
justify-content: center;
align-items: center;
`
const Businessbutton = styled(workButton)``
const Businesssocials = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 40px;
width: 100%;
`
const Facebook = styled.div`
height: 54px;
width: 54px;
background: #91AAD3;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: all 0.3s ease-in;
:hover{
  transform: translateY(-5px);
}
`
const Facebookimg = styled.img`
width: 32px;
height: 32px;
`
const Twitter = styled.div`
height: 54px;
width: 54px;
background: #B6E1F1;
display: flex;
border-radius: 50%;
justify-content: center;
align-items: center;
margin: 0 32px;
transition: all 0.3s ease-in;
:hover{
  transform: translateY(-5px);
}
`
const Twitterimg = styled.img`
width: 32px;
height: 32px;
`
const WhatsApp = styled.div`
border-radius: 50%;

height: 54px;
width: 54px;
background: #ADF095;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.3s ease-in;
:hover{
  transform: translateY(-5px);
}
`
const Whatsappimg = styled.img`
width: 32px;
height: 32px;
`
export default Business
