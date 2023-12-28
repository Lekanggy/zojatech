import styled from "styled-components";
import { Column, Row, Text700 } from "../../globalStyles";


export const DashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;
`

export const SideBar = styled(Column)`
    background: #fff;
    justify-content: space-between;
    align-items: center;
`

export const TopSidebar = styled(Column)`
    justify-content: space-between;
`
export const TopsideItem = styled(Column)`
    /* align-items: center; */
    gap: 10px;
    padding-top: 1 rem;
    
`
export const TopsideRow = styled(Row)<{act?:string}>`
    //align-self: flex-start;
    align-items: center;
    gap: 8px;
    //text-align: left;
    width: 200px;
    padding: 16px 32px;
    border-radius: 16px;
    background: #FFF;
    box-shadow:${({act})=> act === "active" ? '0px 4px 58px 0px rgba(0, 0, 0, 0.07)': 'none'} ;
    cursor: pointer;

    /* transition: all 0.5s ease;
    width: 180px; */
    span{
        color:${({act})=> act === "active" ? '#FF8600': '#818187'};
        font-family: 'Lexend';
        font-size: 14px;
        font-weight: 500;
        line-height: 137.1%; 
        letter-spacing: 0.28px;
    }

    /* &:hover{
        border-radius: 5px;
        background: rgba(163, 163, 173, 0.10);
        padding: 5px 3px;
        
    } */

    .user_icon{
        color: #A3A3AD;
        font-size: 2rem;
    }
`

export const BottomSidebar = styled(Column)`
    align-items: center;
    gap: 8px;
    padding-top: 10rem;
    padding-bottom: 1rem;

    .user{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
    }

    span{
        display: inline-flex;
        align-items: center;
        font-family: 'Lexend';
        line-height: 137.1%; /* 24.678px */
    }

    .name{
        color: #3B3B45;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.36px;
    }

    .title{
        color: #818187;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.12px;
    }
`
export const Logout = styled(Row)`
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 12px;
    background: rgba(255, 134, 0, 0.16);
    color: #FF8600;
    font-family: 'Lexend';
    font-size: 14px;
    font-weight: 500;
    line-height: 137.1%; /* 19.194px */
    letter-spacing: 0.28px;
`
export const MainContent = styled.div`
    background: #f6f6f6;
    padding:20px 30px;
`

export const Header = styled(Row)`
    justify-content: space-between;
    align-items: center;
`

export const HeaderLeft = styled(Text700)`
    color: #3B3B45;
    font-family: 'Lexend';
    font-size: 25px;
    line-height: 133%;
`
export const HeaderRight = styled(Row)`
    gap: 10px;
    align-items: center;
`
export const SearchInput = styled.div`
   
    
    .search{
        border-radius: 16px;
        width: 422px;
        height: 38px;
    }
`
export const Circle = styled(Column)`
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #fff;
`