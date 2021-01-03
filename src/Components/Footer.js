import React from 'react'
import styled from 'styled-components'
import pattern from '../assets/pattern.svg'
import img from '../assets/Thecreativemena.svg'
import { themes } from '../styles/ColorStyles'



const Footer = () => {
  return (
    <Footercover>
      <Container>
        <Name>
          <Logo src={img} alt="Orezi logo" />
        </Name>

        <Social>
          <Socialcover>
    
           <Links>
            <Link>Twitter</Link>
            </Links>
 <Links>

<Link>Instagram</Link>

</Links>
 <Links>

<Link>Linkedin</Link>

</Links>
          </Socialcover>
        </Social>
      </Container>
    </Footercover>
  )
}

const Footercover = styled.div`
height: 200px;
width: 100%;

background: url(${pattern}) no-repeat center center/ cover;
`
const Container = styled.div`
height: 100%;
max-width: 1180px;
margin: 0 auto;
width: 100%;
padding: 10px 25px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 650px){
  flex-direction: column;
}
`
const Name = styled.div`
height: 30px;
width: 202px;

`
const Logo = styled.img`
height: 100%;
width: 100%;
`
const Social = styled.div`
height: 100%;

width: 100%;
max-width: 500px;
margin: 0 auto;
@media only screen and (max-width: 650px){
margin: 16px 0;
}

`
const Socialcover = styled.ul`
height: 100%;
width: 100%;
max-width: 500px;
display: flex;
flex-direction: row;
justify-content: space-between;
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
export default Footer
