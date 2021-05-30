import React from 'react'
import styled from 'styled-components'

import real from '../assets/N.svg'
import ceal from '../assets/C.svg'

import AboutTop from '../Components/AboutTop'
import WhatIDo from '../Components/WhatIDo'
import Client from '../Components/Client'
import MyWork from '../Components/MyWork'
import WordOn from '../Components/WordOn'

const About = () => {


  



  return (
  <AboutPage >

<Container>
<AboutTop/>
<WhatIDo/>
<MyWork/>
<Client/>
  <WordOn/>
</Container>

  </AboutPage>
  )
}
const AboutPage =styled.div`
min-height: 600px;
width: 100%;
display: flex;
flex-direction: column;

background-image: url(${real}), url(${ceal});
background-position: left -5% top 50%, right -10% top 90%;
background-size: 35%,35%;
background-repeat: no-repeat, no-repeat;

`
const Container =styled.div`
min-height: 600px;
width: 100%;
max-width: 1100px;
margin: 0 auto;

`


export default About
