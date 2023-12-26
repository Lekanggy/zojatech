import styled from 'styled-components'
import { Column } from '../../globalStyles'
import { ButtonItem, CardContainer, Desc } from '../signUp/signUp.styled'


export const ConfirmCard = styled(CardContainer)`
    justify-content: center;
    align-items: center;
`

export const Centered = styled(Column)`
    justify-content: center;
    align-items: center;
`

export const DescV = styled(Desc)`
    text-align: center;
    width: 306px;

    .verify{
        color: var(--primary-col);
    }
    .col{
        color: #252C32;
    }
`
export const BtnItem = styled(ButtonItem) `
    width: 160px;
    .btn{
        color: #fff;
        background: var(--primary-col);
    }
   
`