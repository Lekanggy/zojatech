import React, { useState } from 'react'
import { BottomSidebar, DashboardLayout, Logout, MainContent, SideBar, TopSidebar, TopsideItem, TopsideRow } from './dasboard.styled'
import Logo from '../../components/logo/Logo'
import { LuUsers2 } from "react-icons/lu";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import User from '../../assets/user.png'

type Obj = {[k:string]:any}
const sideItems = [
  {
    id: 1,
    txt: "My Portfolio",
    icn: <LuUser2/>,
    route: '/smart-admin/panel/user-profile'

  },
  {
    id: 2,
    txt: "My Groups",
    icn: <LuUsers2/>,
    route: '/smart-admin/panel/create-invite'

  },
  
  {
    id: 3,
    txt: "Messages",
    icn: <MdForwardToInbox/>,
    route: '/smart-admin/panel/feedback'
  },
   {
    id: 4,
    txt: "Analytics",
    icn: <IoAnalytics/>,
    route: '/smart-admin/panel/create-bonus'
  },
  {
    id: 5,
    txt: "Packs",
    icn: <CiDollar/>,
    route: '/smart-admin/panel/bonus-token'
  },
  {
    id: 6,
    txt: "Settings",
    icn: <IoSettingsOutline/>,
    route: '/smart-admin/panel/create-survey'
  }
]
const Dashboard = () => {
  const [cls, setCls] = useState(0)
  return (
    <DashboardLayout>
      <SideBar>
        <TopSidebar>
          <TopsideRow>
            <Logo/>
          </TopsideRow>
         
          <TopsideItem>
            {
              sideItems.map((d:Obj, idx:number)=>
                  <TopsideRow onClick={()=>setCls(idx+1)} act={cls === d?.id ? "active" : "none"}>
                    <span className="icon">
                     {d?.icn}
                    </span>
                    <span>{d?.txt}</span>
                  </TopsideRow>
                )
            }
          </TopsideItem>
        </TopSidebar>
        <BottomSidebar>
          <img src={User} alt='new image' className='user'/>
          <span className="name">Theresa milly</span>
          <span className="title">Influencer</span>
          <Logout>
            <RiLoginBoxLine/>
            Logout
          </Logout>
       </BottomSidebar>
      </SideBar>
      <MainContent>
        main
      </MainContent>
    </DashboardLayout>
  )
}

export default Dashboard