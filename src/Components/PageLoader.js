import React from 'react'
import styled, {keyframes} from 'styled-components'

const PageLoader = () => {
    return (
       <Body>
<Shimmer>
    <Shimmerhalf />
</Shimmer>
           <Top>
            <Circle /> 
               <SideShim>
                   <SmallShim/>
                   <SmallShim/>
               </SideShim>
           </Top>
           <BottomShim1/>
           <BottomShim2/>
           <BottomShim3/>
       </Body>
    )
}


const shimmerLoading = keyframes`
0%{
    transform: translateX(-150%);
}
50%{
    transform: translateX(-50%);
}
100%{
    transform: translateX(150%);
}

`


const Body = styled.div`
width: 100%;
height: 230px;
position: relative;
display: flex;
flex-direction: column;
overflow: hidden;
margin: 8px 0;
`


const Shimmer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
animation: ${shimmerLoading} 1.5s infinite;
`

const Shimmerhalf = styled.div`
width: 50%;
height: 100%;
transform: skewX(-20deg);
background: rgba(255,255,255,0.8);
`
const Top = styled.div`
height: 100px;
width: 100%;
display: flex;
flex-direction: row;
`
const Circle = styled.div`
background: #ddd;
border-radius: 50%;
width: 100px;
height: 100px;
margin: 0 8px;

`
const SideShim = styled.div`
min-height: 200px;
width: 100%;
display: flex;
flex-direction: column;
`
const SmallShim = styled.div`
background: #ddd;
height: 30px;
width: 100%;
margin: 8px 0;

`
const BottomShim1 = styled.div`

    height: 20px;
width: 80%;
margin: 8px 0;
background: #ddd;

`

const BottomShim2 = styled.div`

    height: 20px;
width: 60%;
margin: 8px 0;
background: #ddd;

`
const BottomShim3 = styled.div`

    height: 20px;
width: 40%;
margin: 8px 0;
background: #ddd;

`
export default PageLoader
