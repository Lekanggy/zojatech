import React from 'react'
import { CheckItem, StackText, Stacks } from './signUp.styled'
import { Row } from '../../globalStyles'
import Check from '../../assets/Checkboxes.png'

const StackItems = () => {
  return (
    <Stacks>
        <Row gap='10px'>
            <CheckItem src={Check} alt='check items'/>
            <StackText>
                Track real-time overview of company’s financial performance.
            </StackText>
        </Row>
        <Row gap='10px'>
            <CheckItem src={Check} alt='check items'/>
            <StackText>
                Track real-time overview of company’s financial performance.
            </StackText>
        </Row>
        <Row gap='10px'>
            <CheckItem src={Check} alt='check items'/>
            <StackText>
                Highlighted reports on budget deficit and surplus, accounting dimensions, 
                balance sheets and real-time sales margin estimation.
            </StackText>
        </Row>
    </Stacks>
  )
}

export default StackItems