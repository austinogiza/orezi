import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Header,Body,smallTexts,tinyTexts } from '../styles/Textsyles'
import { themes } from '../styles/ColorStyles';

const Testimonials = () => {

  return (
    <Testbody>

      <Title>
        <Titleh1>Not Yet Convinced?</Titleh1>
        <Titlep>Here’s what past client have to say about me</Titlep>
      </Title>
      <Reviews>
<Reviewscover >
<Reviewh1>Amet minim </Reviewh1>
<Reviewp>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
</Reviewp>

</Reviewscover>
<Reviewscover >
<Reviewh1>Amet minim </Reviewh1>
<Reviewp>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
</Reviewp>

</Reviewscover>
<Reviewscover >
<Reviewh1>Amet minim </Reviewh1>
<Reviewp>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
</Reviewp>

</Reviewscover>
<Reviewscover >
<Reviewh1>Amet minim </Reviewh1>
<Reviewp>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
</Reviewp>

</Reviewscover>
<Reviewscover >
<Reviewh1>Amet minim </Reviewh1>
<Reviewp>
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
</Reviewp>

</Reviewscover>
      </Reviews>
    </Testbody>
  )
}

const Testbody = styled.div`
min-height: 327px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 16px 0;


`

const sliderAnim = keyframes`

50%{
transform: translateX(-200%);
}
`
const Title = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
const Titleh1 = styled(Header)`

`
const Titlep = styled(Body)`
margin: 16px 0 0 0;
`
const Reviews = styled.div`
margin: 60px 0 0 0;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: repeat(5, minmax(10px,1fr));
grid-gap: 40px;
/* animation: ${sliderAnim} 60s ease 0s infinite; */
`
const Reviewscover = styled.div`
height: 130px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items:flex-start;
background: ${themes.primary};
padding: 20px;
border-radius: 30px;

`
const Reviewh1 = styled(smallTexts)`
color: ${themes.dark};
`
const Reviewp = styled(tinyTexts)`
color: ${themes.black};
`
export default Testimonials
