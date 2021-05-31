import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import { headerMedium } from '../styles/Textsyles'
import { workButton } from '../styles/Button'

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
    <Facebook  href="https://www.facebook.com/TheCreativeMena" target="_blank"  rel="noopener noreferrer">
      <Facebookimg src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622486628/facebook_1_lhltwx.png`} alt="The creative mena social media"/>
        
    </Facebook>
    <Twitter href="https://twitter.com/Thecreativemena" target="_blank"  rel="noopener noreferrer">
      <Twitterimg   src="https://res.cloudinary.com/dimrd8ott/image/upload/v1622486628/twitter_1_ypalin.png" alt="The creative mena social media"/>
    </Twitter>
    <WhatsApp href="https://api.whatsapp.com/send?phone=2348137871513&text=Hello%20Creative%20Mena,%20I%20got%20your%20contact%20from%20your%20website" target="_blank"  rel="noopener noreferrer">
      <Whatsappimg  src={`https://res.cloudinary.com/dimrd8ott/image/upload/v1622486628/whatsapp_1_dhksqz.png`} alt="The creative mena social media"/>
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
background-image: url("https://res.cloudinary.com/dimrd8ott/image/upload/v1622486745/Baloons0002_1_1_tsko83.png"),url("https://res.cloudinary.com/dimrd8ott/image/upload/v1622486746/Baloons0001_1_1_k5cuo5.png");
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
const Facebook = styled.a`
height: 54px;
width: 54px;
cursor: pointer;
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
const Twitter = styled.a`
height: 54px;
width: 54px;
background: #B6E1F1;
display: flex;
cursor: pointer;
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
const WhatsApp = styled.a`
border-radius: 50%;
cursor: pointer;
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
