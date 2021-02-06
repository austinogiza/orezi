import React from 'react'
import styled from 'styled-components'
import pattern from '../assets/pattern.svg'
import img from '../assets/Logo.svg'
import { themes } from '../styles/ColorStyles'
import {FiLinkedin,FiInstagram,FiTwitter} from 'react-icons/fi'
import { bodyHeader } from '../styles/Textsyles'


const Footer = () => {
  return (
    <Footercover>
      <Container>
        <Name>
          <Logo src={img} alt="Orezi logo" />
        </Name>
<Orezi>
  <Oreziname>Orezi Mena
</Oreziname>
<Oreziname>Designer</Oreziname>
</Orezi>
        <Social>
        <Socialtitle>Thecreativemena</Socialtitle>
          <Socialcover>
    
           <Links>
           <Link><Instagram/></Link>
         
            </Links>
 <Links>
 <Link><Twitter/></Link>

</Links>
 <Links>

<Link><Linkedin/></Link>

</Links>
          </Socialcover>
        </Social>
      </Container>
    </Footercover>
  )
}

const Footercover = styled.div`
min-height: 200px;
width: 100%;
background: url(${pattern}) no-repeat center center/ cover;

`
const Container = styled.div`
height: 100%;
max-width: 1180px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;
display: grid;
grid-template-columns: repeat(3, minmax(10px,1fr));
justify-content: center;
align-items: center;
@media only screen and (max-width: 800px){
  place-items: center;
  grid-template-columns: repeat(1, minmax(10px,1fr));
  padding: 20px 25px;
}
`
const Name = styled.div`
height: 60px;
max-width: 202px;
width:100%;
`

const Orezi = styled.div`
height: 60px;
max-width: 202px;
width: 100%;
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;
@media only screen and (max-width: 800px){
margin:24px 0;
}
`
const Oreziname = styled(bodyHeader)`

`
const Logo = styled.img`
height: 100%;
width: 100%;
`
const Social = styled.div`
min-height: 200px;
display: flex;
flex-direction: column;
width: 100%;

justify-content: center;
align-items: flex-start;
@media only screen and (max-width: 800px){
  align-items: center;
}

`

const Socialtitle = styled(bodyHeader)`
margin: 24px 0;
`
const Socialcover = styled.ul`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
@media only screen and (max-width: 650px){
  flex-direction: column;
}
`
const Links = styled.li`
font-family: Euclid Circular B;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 30px;
color: ${themes.white};

`
const Link = styled.a`
cursor: pointer;
`

const Twitter = styled(FiTwitter)`
margin: 0 24px;

@media only screen and (max-width: 650px){
  margin: 24px 0;
}
`
const Instagram = styled(FiInstagram)`

`
const Linkedin = styled(FiLinkedin)`

`
export default Footer
