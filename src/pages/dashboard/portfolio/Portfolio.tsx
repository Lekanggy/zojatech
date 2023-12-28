import React from 'react'
import { CardGrowth, CardHandle, CardTitle, ColumItem, Desc, IconCircle, LeftItem, MedialHandle, MemberCard, MemberTitle, MemberWrapper, Members, NewsColumn, NewsHeader, NewsListItem, OverviewContainer, OverviewHeader, OverviewItem, OverviewRightHeader, OverviewTitle, PortfolioWrapper, PostTitle, Reaction, ReactionWrapper, RevenueCard, RevenueHeader, RevenueItem, RevenueLeft, RightItem, Summary, SummaryItem, TrendTitle, TrendingItem, TrendingNewsCard, TrendingPost, TrendingWrapper, WatchLeft, WatchListCard, WatchListHeader, WatchListItem } from './portfolio.styled'
import LayerIcon1 from '../../../icons/LayerIcon1'
import LayerIcon2 from '../../../icons/LayerIcon2'
import LayerIcon3 from '../../../icons/LayerIcon3'
import { Obj } from '../Dashboard'
import CommentIcon from '../../../icons/CommentIcon'
import GrowthIcon from '../../../icons/GrowthIcon'
import Avatar from '../../../assets/avatar.png'
import NewsImg from '../../../assets/rectanglee.png'
import AnalyticIcon from '../../../icons/AnalyticIcon'
import { ArrowIconDown } from '../../../icons/ArrowIcon'
import { FaceBook, Instagram, LinkedIn } from '../../../icons/SocialMedialIcon'
import ReplyIcon from '../../../icons/ReplyIcon'

const cardItems = [
  {
    text: "Total Channels",
    total: 51,
    icn: <LayerIcon1/>,
    col: "#E0FAF5"
  },
  {
    text: "New Members",
    total: 121,
    icn: <LayerIcon2/>,
    col: "#EFF2FE"
  },
  {
    text: "All Impression",
    total: 51,
    icn: <LayerIcon3/>,
    col: "#FFF0E0"
    
  }
]
const Portfolio = () => {
  return (
    <PortfolioWrapper>
        <LeftItem>
            <Summary>
              {
                cardItems.map((d:Obj, idx: number)=> 
                  <SummaryItem key={idx}>
                    <ColumItem>
                      <span className="txt_upper">{d.total}</span>
                      <span className="txt_lower">{d.text}</span>
                    </ColumItem>
                    <IconCircle bg={d.col}>
                     {d.icn}
                    </IconCircle>
                  </SummaryItem>
                )
              }
            </Summary>
            <OverviewContainer>
              <OverviewHeader>
                <OverviewTitle>Overview</OverviewTitle>
                <OverviewRightHeader>
                  <OverviewItem active='active'>Robbin hood</OverviewItem>
                  <OverviewItem>Amreitrade</OverviewItem>
                  <OverviewItem>Fidelity</OverviewItem>
                  <OverviewItem>Charles</OverviewItem>
                </OverviewRightHeader>
              </OverviewHeader>
            </OverviewContainer>
            <TrendingPost>
              <TrendTitle>Trending Post</TrendTitle>
              <TrendingWrapper>
                <TrendingItem>
                  <PostTitle>8 Upcoming Influencer Marketing Trends and Benefits</PostTitle>
                  <Desc>
                    Marketing is evolving. It's changing from a one-way street 
                    to a two-way conversa…
                  </Desc>
                  <ReactionWrapper>
                    <Reaction>
                      ❤️
                      <span className="reaction_txt">200</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <ReplyIcon/>
                      <span className="reaction_txt">130</span>
                    </Reaction>
                  </ReactionWrapper>
                </TrendingItem>
                <TrendingItem>
                  <PostTitle>8 Upcoming Influencer Marketing Trends and Benefits</PostTitle>
                  <Desc>
                    Marketing is evolving. It's changing from a one-way street 
                    to a two-way conversa…
                  </Desc>
                  <ReactionWrapper>
                    <Reaction>
                      ❤️
                      <span className="reaction_txt">200</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <ReplyIcon/>
                      <span className="reaction_txt">130</span>
                    </Reaction>
                  </ReactionWrapper>
                </TrendingItem>
              </TrendingWrapper>
            </TrendingPost>
            <Members>
              <MemberTitle>Potential Members</MemberTitle>
              <MemberWrapper>
                <MemberCard>
                  <img src={Avatar} alt='new member'/>
                  <CardTitle>Terry brown</CardTitle>
                  <CardHandle>@ashking1234</CardHandle>
                  <CardGrowth>
                    <GrowthIcon/>
                    <span className="growth_txt">10.3%</span>
                  </CardGrowth>
                </MemberCard>
                <MemberCard>
                  <img src={Avatar} alt='new member'/>
                  <CardTitle>Terry brown</CardTitle>
                  <CardHandle>@ashking1234</CardHandle>
                  <CardGrowth>
                    <GrowthIcon/>
                    <span className="growth_txt">10.3%</span>
                  </CardGrowth>
                </MemberCard>
                <MemberCard>
                  <img src={Avatar} alt='new member'/>
                  <CardTitle>Terry brown</CardTitle>
                  <CardHandle>@ashking1234</CardHandle>
                  <CardGrowth>
                    <GrowthIcon/>
                    <span className="growth_txt">10.3%</span>
                  </CardGrowth>
                </MemberCard>
                <MemberCard>
                  <img src={Avatar} alt='new member'/>
                  <CardTitle>Terry brown</CardTitle>
                  <CardHandle>@ashking1234</CardHandle>
                  <CardGrowth>
                    <GrowthIcon/>
                    <span className="growth_txt">10.3%</span>
                  </CardGrowth>
                </MemberCard>
              </MemberWrapper>
            </Members>
        </LeftItem>
        <RightItem>
           <WatchListCard>
            <WatchListHeader>
              <span className="title">Watch List</span>
              <span className="view">View all</span>
            </WatchListHeader>
            <WatchListItem>
              <WatchLeft>
                <span className="upper_txt">AAPL  <ArrowIconDown/></span>
                <span className="amt_txt">$123</span>
                <span className="margin_txt">+0.045%</span>
              </WatchLeft>
              <AnalyticIcon/>
            </WatchListItem>
            <WatchListItem>
              <WatchLeft>
                <span className="upper_txt">AAPL  <ArrowIconDown/></span>
                <span className="amt_txt">$123</span>
                <span className="margin_txt">+0.045%</span>
              </WatchLeft>
              <AnalyticIcon/>
            </WatchListItem>
           </WatchListCard>
           <RevenueCard>
            <RevenueHeader>
              <span className="title">Revenue</span>
            </RevenueHeader>
            <RevenueItem>
              <RevenueLeft>
                <span className="upper_txt">$4000</span>
                <span className="small_txt">Recently Added Pages</span>
              </RevenueLeft>
              <MedialHandle  bg="rgba(23, 115, 234, 0.08)">
                <FaceBook/>
              </MedialHandle>
            </RevenueItem>
            <RevenueItem>
              <RevenueLeft>
                <span className="upper_txt">$2,120</span>
                <span className="small_txt">Video Monetization</span>
              </RevenueLeft>
              <MedialHandle  bg="rgba(235, 51, 72, 0.08)">
                <Instagram/>
              </MedialHandle>
            </RevenueItem>
            <RevenueItem>
              <RevenueLeft>
                <span className="upper_txt">$1,175</span>
                <span className="small_txt">Community Buildup</span>
              </RevenueLeft>
              <MedialHandle  bg="rgba(39, 100, 172, 0.08)">
                <LinkedIn/>
              </MedialHandle>
            </RevenueItem>
           </RevenueCard>

           <TrendingNewsCard>
            <NewsHeader>
              <span className="title">Trending News</span>
            </NewsHeader>
            <NewsListItem>
              <img src={NewsImg} alt='new image'/>
              <NewsColumn>
                <span className="new_txt">Russia & Ukraine War</span>
                <span className="new_small">Marketing is evolving. It's chang...</span>
              </NewsColumn>
            </NewsListItem>
            <NewsListItem>
              <img src={NewsImg} alt='new image'/>
              <NewsColumn>
                <span className="new_txt">Elon Musk bought Twitter</span>
                <span className="new_small">Twitter is the most useful social pl...</span>
              </NewsColumn>
            </NewsListItem>
            <NewsListItem>
              <img src={NewsImg} alt='new image'/>
              <NewsColumn>
                <span className="new_txt">Fuel Crisis Everywhere</span>
                <span className="new_small">Due to covid situation in 2020 the...</span>
              </NewsColumn>
            </NewsListItem>
           </TrendingNewsCard>
        </RightItem>
    </PortfolioWrapper>
  )
}

export default Portfolio