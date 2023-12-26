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
    position: relative;
    /* margin-bottom: 3rem; */
    flex: 1;
    background: #F8FAFC;
`

export const ItemWrapper = styled(Column)`
    position: relative;
    padding: 50px;
`

export const Stacks =styled(Column)`
    margin-top: 8rem;
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
    color: #84919A;
`

export const CardContainer = styled(Column)`
    align-items: center;
    border-radius: 8px;
    border: 1px solid  #DDE2E4;
    background:  #FFF;
    box-shadow: 10px 50px 50px 0px rgba(0, 0, 0, 0.06);
    padding: 50px;
`

export const Form = styled.form``
export const FormItem = styled(Column)`  
    width: 389px;
    /* height: 40px; */
    padding: 12px 0px;
`

export const ButtonItem = styled(FormItem)<{activate?:string}>`

    .btn {
        display: flex;
        width: 100%;
        padding: 10px 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border: none;
        border-radius: 6px;
        background:${({activate})=> activate === 'true' ? 'var(--primary-col)' : '#ECEDED'};
        color:${({activate})=> activate === 'true' ? '#FFF' : '#C3C7CE'};
        cursor: pointer;

        /* Font/Button */
        font-family: 'Mulish';
        font-size: 0.85rem;
        font-weight: 600;
        line-height: 24px; /* 19.2px */
    }
`

export const FormLabel = styled.label`
    color:  #5B6871;
    font-family: 'Mulish';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px; 
    letter-spacing: -0.063px;
`
export const FormHeader = styled.h2`
    color:  #1D1D18;
    font-family: 'Mulish';
    font-size: 24px;
    font-weight: 700;
    line-height: 24px; 
    letter-spacing: -0.264px;
`

export const Desc = styled(Text400)`
    color: #5B6871;
    font-family: 'Mulish';
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.058px;
`
export const ServicePolicy = styled(Text400)`
    font-size: 13px;
    font-weight: 400;
    line-height: 19px; 
    letter-spacing: -0.058px;
    color: #84919A;
    
    .service{
        color: var(--primary-col);
        cursor: pointer;
    }
`

export const GetHelpWrapper = styled.div`
    position: absolute;
    bottom: -10rem;
    right: 3rem;
    padding-bottom: 3rem;
`
export const GetHelpContainer = styled(Row)`
    justify-content: center;
    align-items: center;
    width: 118px;
    gap: 8px;
    border-radius: 60.714px;
    background: var(--primary-col);
    box-shadow: 4.45px 35.602px 22.251px 0px rgba(0, 0, 0, 0.06);
    padding: 10px;
    cursor: pointer;
    /* margin-bottom: 6rem;  */
    span {
        color: #FFF;
        font-family: 'Mulish';
        font-size: 14px;
        font-weight: 600;
        line-height: 24px; 
        letter-spacing: -0.084px;
    }
`