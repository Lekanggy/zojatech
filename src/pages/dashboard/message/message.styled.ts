import styled from "styled-components";
import { Column, Row } from "../../../globalStyles";

export const MessageWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    column-gap: 20px;
    /* padding-top: 1.5rem; */
    padding: 1.5rem 1rem;
    background: #fff;
    height: 876px;
`

export const MessageLeft = styled(Column)`
    width: 296px;
    background: #FAFAFA;
    border-radius: 12px;
    padding: 14px;
    span{
        font-family: 'Inter';
        font-weight: 600;
    }
    .profile_lg{
        color:  #FF8600;
        font-size: 15px;
    }
    .profile_sm{
        color:  #2E2E2E;
        font-size: 9px;
    }

    .msg_txt, .msg_ext{
        color: #8D8D8D;
        font-weight: 400;
        font-size: 9px
    }

    .msg_ext{
        width: 144px;
    }

    .status{
        width: 12px;
        height:12px;
        border-radius: 50%;
        text-align: center;
        background: #FF8600;
        color: #fff;
        font-family: 'Inter';
        font-size: 10px;
        font-weight: 400;
    }

    .search_in{
        color: #CDCDCD;
        font-family: 'Inter';
        font-size: 15px;
        font-weight: 400;
        border-radius: 30px;
    }
`

export const MsgLeftTop = styled(Column)`
   gap: 1rem;
   padding-bottom: 2rem;
`
export const MsgProfile = styled(Row)`
    justify-content: space-between;
    align-items: center;
`
export const RoundedImage = styled.img`
    width: 45px;
    height: 45px;
    flex-shrink: 0;
    object-fit: cover;
`
export const MsgLeftBottom = styled(Column)`
    /* justify-content: center;
    align-items: center; */
    border-bottom: 1.2px solid #CDCDCD;
    border-top: 1.2px solid #CDCDCD;
    padding: 25px 0;
    gap: 15px;
`
export const MsgItem = styled(Row)<{active?:string}>`
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background: #FFF;
    /* card */
    box-shadow: ${({active})=> active === "active" ? '0px 14px 25px 0px rgba(30, 30, 30, 0.10)': 'none'} ;
    padding: 5px 10px;
`
export const MessageRight = styled(Column)`
    padding: 10px 30px;
    background: #FAFAFA;
    border-radius: 12px;
    background: #FAFAFA;

    span{
       
        font-family: 'Inter';
       
    }
    .hd_txt{
        color: #2E2E2E;
        font-size: 15px;
        font-weight: 600;
    }

    .online{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #33EC23;
        position: absolute;
        bottom: 0.8rem;
    }
`
export const MsgBodyWrapper = styled(Column)`
    //align-items: start;
    height: 100%;
    justify-content: space-between;
`
export const MsgRightHeader = styled(Row)`
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid #D9D9D9;
    padding-bottom: 10px;
    position: relative;
`
export const ScrollMsg = styled(Column)`
`
export const MsgRightBody = styled(Column)`
    /* justify-content: space-between;
    align-items: center; */
    padding: 20px;
    position: relative;
    gap: 65px;
    span{
        display: flex;
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        width: 250px;
        background: #F1F1F1;
        padding: 15px;
        position: relative;
    }
    .chat_right{
        color: #FF8600;
    }
    .chat_left{
        color: #2E2E2E;
        border-radius: 10px 10px 10px 0px;
        //align-self: flex-end;
    }
`
export const ChatsLeft = styled(Column)`
    position: relative;
`
export const ChatsRight = styled(Column)`
   /* position: absolute;
    right: 0;
    top: 8rem; */
    position: relative;
    margin-left: 22rem;
`

export const ChatImage = styled(RoundedImage)`
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 0rem;
`
export const ChatImageLeft = styled(ChatImage)`
    left: -1.8rem;
`
export const ChatImageRight = styled(ChatImage)`
    right: -2rem;
    
`

export const TypeMsg = styled(Row)`
    padding: 28px 32px;
    border-radius: 12px;
    background:  #D9D9D9;
    box-shadow: 0px -2px 15px 0px rgba(0, 0, 0, 0.10);
    align-items: center;
    gap: 32px;
    .txt_box{
        border-radius: 30px;
        width: 100% !important;
        padding-right: 7rem;
    }
    //width: 596px;
`
export const InputSearch = styled(Row)`
    position: relative;
    width: 500px;
`
export const InputDetailsIcons = styled(Row)`
    align-items: center;
    gap: 10px;
    position: absolute;
    right: 0.5rem;
    top: 0.4rem;
`
