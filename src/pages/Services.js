import React from 'react'
import styled from 'styled-components'
import { lightHeader,Body } from '../styles/Textsyles'
import pic from '../assets/pic.png'

import inv from '../assets/Inv.svg'
import ni from '../assets/Ni.svg'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const Services = () => {
  return (
  <Serve variants={pageAnimation} initial="hidden" animate="show"  exit="exit">

    <Container>
    <Title><Titleh1>Services</Titleh1>
   
       </Title>
<Layout>

  <Branding>
  <Brandingh1>
  Branding
  </Brandingh1>
  <Brandingtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in. Sociis habitasse elit, hendrerit ac volutpat diam. Egestas varius morbi sollicitudin duis tellus proin nibh amet, vitae. Sed elit, gravida donec amet platea pellentesque gravida vel hendrerit. Mattis commodo purus pellentesque parturient aliquam nisi enim, varius.
</Brandingtext>

  </Branding>
  <Brandimg>
    <Image src={pic} alt="The Creative Mena Services"/>
  </Brandimg>
  <Productimg>
    <Image src={pic} alt="The Creative Mena Services"/>
  </Productimg>
  <Product>

  <Brandingh1>
  Product Design
  </Brandingh1>
  <Brandingtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in. Sociis habitasse elit, hendrerit ac volutpat diam. Egestas varius morbi sollicitudin duis tellus proin nibh amet, vitae. Sed elit, gravida donec amet platea pellentesque gravida vel hendrerit. Mattis commodo purus pellentesque parturient aliquam nisi enim, varius.
</Brandingtext>

  </Product>
  <Reaseachimg>
    <Image src={pic} alt="The Creative Mena Services"/>
  </Reaseachimg>
  <Reaseach>

  <Brandingh1>
  UX Research
  </Brandingh1>
  <Brandingtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in. Sociis habitasse elit, hendrerit ac volutpat diam. Egestas varius morbi sollicitudin duis tellus proin nibh amet, vitae. Sed elit, gravida donec amet platea pellentesque gravida vel hendrerit. Mattis commodo purus pellentesque parturient aliquam nisi enim, varius.
</Brandingtext>

  </Reaseach>

  <Packagingimg>
    <Image src={pic} alt="The Creative Mena Services"/>
  </Packagingimg>
  <Packaging>

  <Brandingh1>
  Packaging
  </Brandingh1>
  <Brandingtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in. Sociis habitasse elit, hendrerit ac volutpat diam. Egestas varius morbi sollicitudin duis tellus proin nibh amet, vitae. Sed elit, gravida donec amet platea pellentesque gravida vel hendrerit. Mattis commodo purus pellentesque parturient aliquam nisi enim, varius.
</Brandingtext>

  </Packaging>
 
  <Communicationsimg>
    <Image src={pic} alt="The Creative Mena Services"/>
  </Communicationsimg>
  <Communications>

  <Brandingh1>
  Communications
  </Brandingh1>
  <Brandingtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus egestas magna leo vestibulum in. Sociis habitasse elit, hendrerit ac volutpat diam. Egestas varius morbi sollicitudin duis tellus proin nibh amet, vitae. Sed elit, gravida donec amet platea pellentesque gravida vel hendrerit. Mattis commodo purus pellentesque parturient aliquam nisi enim, varius.
</Brandingtext>

  </Communications>

</Layout>

    </Container>
  </Serve>
  )
}


const Serve = styled(motion.div)`
min-height: 600px;
width:100%;
padding: 10px 25px;

background-image: url(${inv}),url(${ni});
background-size: 20%,20%;
background-repeat: no-repeat, no-repeat;
background-position: left -10px top 20%, right -5% top 45%;
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

const Layout = styled.div`
width:100%;
min-height: 600px;
display: grid;
grid-template-columns: repeat(2 , 1fr);
grid-gap: 30px;
grid-auto-rows: minmax(300px,auto);
grid-template-areas: 
      "Branding BrandingImg"
      "ProductImg Product"
      "ResearchImg Research"
      "Packaging PackagingImg"
      "Communications CommunicationsImg";

@media only screen and (max-width:800px){
  grid-auto-rows: minmax(250px,auto);
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
  "BrandingImg" 
      "Branding"
      "ProductImg"
      "Product"
      "ResearchImg"
      "Research"
      'PackagingImg'
      "Packaging"
      "CommunicationsImg"
      "Communications";

}
`
const Branding = styled.div`
width:100%;
height: 100%;
grid-area: Branding;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`
const Brandingh1 = styled(lightHeader)`

`
const Brandingtext = styled(Body)`
margin: 13px 0;
`
const Brandimg = styled.div`
grid-area: BrandingImg;
width:100%;
height: 100%;
`
const Image = styled.img`
width:100%;
height: 100%;
`
const Product = styled.div`
grid-area: Product;
width:100%;
height: 100%;
`
const Productimg = styled.div`
grid-area: ProductImg;
width:100%;
height: 100%;
`
const Reaseachimg = styled.div`
grid-area: ResearchImg;
width:100%;
height: 100%;
`
const Reaseach = styled.div`
grid-area: Research;
width:100%;
height: 100%;
`
const Packagingimg = styled.div`
grid-area: PackagingImg;
width:100%;
height: 100%;
`
const Packaging = styled.div`
grid-area:Packaging ;
width:100%;
height: 100%;
`

const Communicationsimg = styled.div`
grid-area: CommunicationsImg;
width:100%;
height: 100%;
`
const Communications = styled.div`
grid-area: Communications;
width:100%;
height: 100%;
`
export default Services
