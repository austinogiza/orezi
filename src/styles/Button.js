import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "./ColorStyles";

export const mainButton = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 296px;
height: 70px;
background: ${themes.primary};
border-radius: 57px;
font-size: 35px;
font-weight: 500;
color: ${themes.black};
text-align: center;
`