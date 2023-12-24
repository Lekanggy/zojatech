import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../icons/LogoIcon'
import { Row } from '../../globalStyles'

const LogoContainer = styled(Row)`
    justify-content: center;
    align-items: center;
`
const Buddy = styled.span`
    font-family: 'Lexend';
    font-weight: 600;
    font-size: 25px;
    line-height: 133%
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