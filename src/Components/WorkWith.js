import React from 'react'
import styled from 'styled-components'
import {mainButton} from '../styles/Button'

const WorkWith = () => {
  return (
  <Work>

    <Workbtn to='/contact'>Work with me</Workbtn>
  </Work>
  )
}

const Work = styled.div`
height: 400px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Workbtn = styled(mainButton)``

export default WorkWith
