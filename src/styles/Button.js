import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "./ColorStyles";

export const mainButton = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 280px;
height: 74px;
background: ${themes.primary};
border-radius: 30px;
font-size: 35px;
font-weight: 500;
color: ${themes.black};
text-align: center;
transition: all 0.3s ease-in;

:hover{
  background: ${themes.yellow};
  color: ${themes.black};
}

@media only screen and (max-width: 650px){

font-size: 21px;
}
`

export const resumeButton = styled.a`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 230px;
height: 74px;
background: ${themes.primary};
border-radius: 30px;
font-size: 24px;
font-weight: 500;
color: ${themes.black};
text-align: center;
transition: all 0.3s ease-in;

:hover{
  background: ${themes.yellow};
  border: 1px solid ${themes.dark};
  color: ${themes.black};
}

@media only screen and (max-width: 650px){

font-size: 21px;
}
`
export const workButton = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
max-width: 230px;
height: 74px;
background: ${themes.primary};
border-radius: 30px;
font-size: 24px;
font-weight: 500;
color: ${themes.black};
text-align: center;
transition: all 0.3s ease-in;

:hover{
  background: ${themes.yellow};
  border: 1px solid ${themes.dark};
  color: ${themes.black};
}

@media only screen and (max-width: 650px){

font-size: 21px;
}
`