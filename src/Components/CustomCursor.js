import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { themes } from '../styles/ColorStyles'

const CustomCursor = () => {

  const [mousePosition, setMousePosition] = useState({
    x:10,
    y:10
  })

  const onMouseMove = e =>{
    const {pageX:x, pageY:y} = e;
    setMousePosition({x,y})
  }


useEffect(() => {
  document.addEventListener('mousemove', onMouseMove)

  return () => {
    document.removeEventListener('mousemove', onMouseMove)
  }
}, [])
  return (
    <>
    <Cursor style={{left:`${mousePosition.x}px`, top: `${mousePosition.y}px`}}>

    </Cursor>
    </>
  )
}

const Cursor = styled.div`
position: absolute;
top: 0;
left: 0;
width: 40px;
height: 40px;
border: 1px solid ${themes.white};
pointer-events: none;
transition: 0.2s ease-in-out;
border-radius: 100%;
transform: translate(-30%,-30%);
z-index: 999;
transition-property: width, height, border;
will-change: width, height, border;
`

export default CustomCursor
