import React from 'react'
import { CardGrowth, CardHandle, CardTitle, ColumItem, Desc, IconCircle, LeftItem, MemberCard, MemberTitle, MemberWrapper, Members, PortfolioWrapper, PostTitle, Reaction, ReactionWrapper, RightItem, Summary, SummaryItem, TrendTitle, TrendingItem, TrendingPost, TrendingWrapper } from './portfolio.styled'
import LayerIcon1 from '../../../icons/LayerIcon1'
import LayerIcon2 from '../../../icons/LayerIcon2'
import LayerIcon3 from '../../../icons/LayerIcon3'
import { Obj } from '../Dashboard'
import CommentIcon from '../../../icons/CommentIcon'
import GrowthIcon from '../../../icons/GrowthIcon'
import Avatar from '../../../assets/avatar.png'

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
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
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
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
                    </Reaction>
                    <Reaction>
                      <CommentIcon/>
                      <span className="reaction_txt">230</span>
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
            rigfhjtr
        </RightItem>
    </PortfolioWrapper>
  )
}

export default Portfolio