import styled from "styled-components";
import { Column, Row, Text400, Text600, Text700 } from "../../../globalStyles";


export const PortfolioWrapper = styled(Row)`
    display: grid;
    grid-template-columns: 5fr 4fr;
    column-gap: 20px;
    padding-top: 1.5rem;
`

export const LeftItem = styled(Column)`
    //background: red;
    justify-content: space-between;
    //align-items: center;
`
export const Summary = styled(Row)`
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`

export const SummaryItem = styled(Row)` 
    width: 246px;
    padding: 16px;
    background: #fff;
    border-radius: 12px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
`
export const ColumItem = styled(Column)`
    span{
        font-family: 'Lexend';
       
    }

    .txt_upper{
        color: #3B3B45;
        font-size: 25px;
        font-weight: 700;
        line-height: 133%;
    }
    .txt_lower{
        color: #A3A3A6;
        font-size: 12px;
        font-weight: 400;
        line-height: 137.1%;
        letter-spacing: 0.24px;
    }
`
export const IconCircle = styled(Column)<{bg: string}>`
    justify-content: center;
    align-items: center;
    background: ${({bg})=> bg}; 
    width: 48px;
    height: 48px;
    border-radius: 50%;
`

export const TrendingPost = styled(Column)`
    padding: 24px;
    border-radius: 16px;
    background: #FFF;
`
export const TrendTitle = styled(Text700)`
    display: inline-flex;
    color: #3B3B45;
    font-family: 'Lexend';
    font-size: 20px;
    line-height: 133%;
`
export const TrendingWrapper = styled(Row)`
    padding: 10px;
    padding-top: 1rem;
    gap: 20px;
`
export const TrendingItem = styled(Column)`
    width: 354px;
    padding: 16px;
    align-items: flex-start;
    //gap: 10px;
    border-radius: 12px;
    border: 1px solid #F1F1F1;
    background: #FFF;
`
export const PostTitle = styled(Text600)`
    color: #3B3B45;
    font-family: 'Lexend';
    font-size: 18px;
    line-height: 130%; /* 25.2px */
`
export const Desc = styled.p`
    color: #818187;
    font-family: 'Lexend';
    font-size: 14px;
    font-weight: 300;
    line-height: 150%;
`
export const ReactionWrapper = styled(Row)`
    align-items: center;
    gap: 20px;
`
export const Reaction = styled(Row)`
    align-items: center;
    border-radius: 17px;
    background: #F6F6F6;
    padding: 4px 10px;
    gap: 10px;
    .reaction_txt{
        color:  #3B3B45;
        font-family: 'Lexend';
        font-size: 14px;
        font-weight: 500;
        line-height: 137.1%; /* 19.194px */
        letter-spacing: 0.28px;
    }
`

export const OverviewContainer = styled(TrendingPost)``
export const OverviewHeader = styled(Row)`
    justify-content: space-between;
    align-items: center;
`
export const OverviewTitle = styled(TrendTitle)``
export const OverviewChart = styled(Row)``
export const OverviewRightHeader = styled(Row)`
    gap: 16px;
    align-items: center;
`
export const OverviewItem = styled(Row)<{active?: string}>`
    padding: 6px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background:${({active})=> active === "active"? "#FF8600": "#F6F6F6"};
    color:${({active})=> active === "active"? "#FFF": "#818187"};
    font-family: 'Lexend';
    font-size: 12px;
    font-weight: 500;
    line-height: 137.1%; 
    letter-spacing: 0.24px;
`
export const Members = styled(TrendingPost)``
export const MemberTitle = styled(TrendTitle)``
export const MemberWrapper = styled(Row)`
    padding: 12px;
    align-items: center;
    gap: 8px;
`
export const MemberCard = styled(Column)`
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid #F1F1F1;
    background: #FFF;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`
export const CardTitle = styled(Text600)`
    color: #3B3B45;
    text-align: center;
    font-family: 'Lexend';
    font-size: 14px;
    font-weight: 600;
`
export const CardHandle = styled(Text400)`
    color: #818187;
    text-align: center;
    font-family: 'Lexend';
    font-size: 11px;
`
export const CardGrowth = styled(Row)`
    align-items: center;
    gap: 10px;
    .growth_txt{
        color:  #3B3B45;
        font-family: 'Lexend';
        font-size: 16px;
        font-weight: 700;
    }
`
export const RightItem = styled(Column)`
  justify-content: space-between;
  gap: 20px;
`

export const WatchListCard = styled(Column)` 
    align-items: flex-start;
    width: 330px;
    padding: 20px;
    gap: 16px;
    border-radius: 16px;
    background: #FFF;

    span{
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-family: 'Lexend';
    }

    .upper_txt{
        color: #3B3B45;
        font-size: 18px;
        font-weight: 600;
    }
    .amt_txt{
        color: #A3A3A6;
        font-size: 15px;
        font-weight: 500;
        line-height: 149.3%; 
    }
    .margin_txt {
        color: #00A441;
        font-size: 12px;
        font-weight: 500;
        line-height: 149.3%; 
    }

    .small_txt{
        color: #A3A3A6;
        font-size: 12px;
        font-weight: 400;
        line-height: 137.1%; 
        letter-spacing: 0.12px;
    }

    .new_txt{
        color: #3B3B45;
        font-size: 14px;
        font-weight: 600;
    }

    .new_small{
        color: #818187;
        font-size: 12px;
        font-weight: 300;
        line-height: 140%; 
    }
`
export const WatchListHeader = styled(Row)`
    justify-content: space-between;
    align-items: center;
    gap: 65px;
    span{
        display: inline-flex;
        font-family: 'Lexend';
        font-family: 'Lexend';
    }
    .title{
        color: #3B3B45;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 133%; /* 26.6px */
    }

    .view{
        color: #FF8600;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }
`
export const WatchListItem = styled(Row)`
    padding: 12px 16px;
    justify-content: space-between; 
    //gap: 20px;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    background: #F6F6F6;
`
export const WatchLeft = styled(Column)`
`

export const RevenueCard = styled(WatchListCard)``
export const RevenueHeader = styled(WatchListHeader)``
export const RevenueItem = styled(WatchListItem)`
    padding: 8px 16px;
    border: 1px solid #F1F1F1;
    box-shadow: 4px 5px 58px 0px rgba(0, 0, 0, 0.05);
`
export const RevenueLeft = styled(Column)``
export const MedialHandle = styled(IconCircle)``

export const TrendingNewsCard = styled(WatchListCard)`
  
`
export const NewsHeader = styled(WatchListHeader)``
export const NewsListItem = styled(WatchListItem)`
    justify-content: flex-start;
   
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #F1F1F1;
    background: #FFF;
    gap: 10px;
    img{
        width: 48px;
        height: 48px;
        object-fit: cover;
        border-radius: 8px;
        flex-shrink: 0;
    }
`
export const NewsColumn = styled(Column)`
   
`