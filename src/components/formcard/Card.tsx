import React from 'react'
import styled from 'styled-components'
import { Column } from '../../globalStyles'


const CardContainer = styled(Column)`
    border-radius: 8px;
    border: 1px solid var(--Border-line, #DDE2E4);
    background: var(--White, #FFF);
    box-shadow: 10px 50px 50px 0px rgba(0, 0, 0, 0.06);
`

const Card = () => {
  return (
    <CardContainer>

    </CardContainer>
  )
}

export default Card