import React from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'
import {motion} from 'framer-motion'
import {} from '../animation'


const Panels = () => {

  const transition = {duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9]}
  return (
 <>
    
    <Leftpanel  initial={{height: 0}}
 animate={{
   height:[0, window.innerHeight,0], bottom: [null, 0,0] 
 }}
 transition={{...transition, duration: 2, times: [0,0.5,1]}}
exit={{height: [0, window.innerHeight, 0], top: [null,0,0]}}

 />
    <Rightpanel initial={{height: 0}}
 animate={{
   height:[0, window.innerHeight,0], bottom: [0, 0,window.innerHeight] 
 }}
 transition={{...transition, duration: 2, times: [0,0.5,1]}}
exit={{height: [0, window.innerHeight, 0], bottom: [null,0,0]}}/>
</>
  )
}

const Leftpanel = styled(motion.div)`
width: 50vw;
height: 100vh;
background: ${themes.yellow};
position: absolute;
z-index: 11;
left:0;
`
const Rightpanel = styled(motion.div)`
width: 50vw;
height: 100vh;
background: ${themes.yellow};
position: absolute;
z-index: 11;
right: 0;
`
export default Panels
