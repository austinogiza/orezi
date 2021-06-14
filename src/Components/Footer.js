import React from 'react'
import styled from 'styled-components'
import pattern from '../assets/pattern.svg'
import img from '../assets/Logo.svg'
import { themes } from '../styles/ColorStyles'
import {FiLinkedin,FiInstagram,FiTwitter} from 'react-icons/fi'
import { bodyHeader } from '../styles/Textsyles'
import {AiOutlineDribbble} from 'react-icons/ai'

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
<Oreziname>Product Designer</Oreziname>
</Orezi>
        <Social>
        <Socialtitle>Thecreativemena</Socialtitle>
          <Socialcover>
    
           <Links>
           <Link href="https://www.instagram.com/thecreativemena/"   target="_blank"  rel="noopener noreferrer"><Instagram/></Link>
         
            </Links>
 <Links>
 <Link href="https://twitter.com/Thecreativemena"  target="_blank"  rel="noopener noreferrer"><Twitter/></Link>

</Links>
 <Links>

<Link href="https://www.linkedin.com/in/thecreativemena/"  target="_blank"  rel="noopener noreferrer"><Linkedin/></Link>

</Links>
 <Links>

 <Link href="https://dribbble.com/creativemena/"  target="_blank"  rel="noopener noreferrer"><Dribbble/></Link>

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
@media only screen and (max-width: 800px){

  justify-content: center;
}
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
margin: 8px;

`
const Link = styled.a`
cursor: pointer;
color: ${themes.white};
transition: 0.3s all ease;
margin: 0 12px;

:hover{
  color: ${themes.yellow};
}
`

const Twitter = styled(FiTwitter)`

`
const Instagram = styled(FiInstagram)`

`
const Linkedin = styled(FiLinkedin)`

`
const Dribbble = styled(AiOutlineDribbble)`

`
export default Footer
