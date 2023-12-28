import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../icons/LogoIcon'
import { Row } from '../../globalStyles'

const LogoContainer = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`
const Buddy = styled.span`
    display: inline-flex;
    font-family: 'Lexend';
    font-weight: 600 !important;
    font-size: 25px;
    line-height: 133%;
    color: #3B3B45 !important;
`

const Logo = () => {
  return (
    <LogoContainer>
        <LogoIcon/>
        <Buddy>Buddy</Buddy>
    </LogoContainer>
  )
}

export default Logo