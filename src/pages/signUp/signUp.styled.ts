import styled from "styled-components";
import { Column, Row, Text400 } from "../../globalStyles";


export const SignUpWrapper = styled(Row)`
   height: 100vh;
`
export const LeftItem = styled(Column)`
    flex: 1;
    background: #fff;
`

export const RightItem = styled(Column)`
    flex: 1;
    background: #F8FAFC;
`

export const ItemWrapper = styled(Column)`
    padding: 50px;
`

export const Stacks =styled(Column)`
    margin-top: 4rem;
    gap: 37px;
    
`
export const CheckItem = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
`

export const StackText = styled(Text400)`
    font-family: 'Mulish';
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.198px;
`

export const Footer = styled.footer`
    font-family: 'Mulish';
    font-size: 13px;
    font-weight: 400;
    line-height: 19px; /* 146.154% */
    letter-spacing: -0.058px;
    margin-top: 96px;
`