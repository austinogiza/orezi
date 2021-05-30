import React from 'react'
import styled, {keyframes} from 'styled-components'

const SmallPageLoading = () => {
    return (
       <Body>
<Shimmer>
    <Shimmerhalf />
</Shimmer>
          
               <SideShim>
                   <SmallShim/>
                   <SmallShim/>
                   <SmallShim/>
                   <SmallShim/>

               </SideShim>
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
height: 130px;
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

const SideShim = styled.div`
min-height: 100px;
width: 100%;
display: flex;
flex-direction: column;
`
const SmallShim = styled.div`
background: #ddd;
height: 25px;
width: 100%;
margin: 8px 0;

`

export default SmallPageLoading
