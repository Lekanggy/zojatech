import React, { useState } from 'react'
import { BottomSidebar, Circle, DashboardLayout, Header, HeaderLeft, HeaderRight, Logout, MainContent, SearchInput, SideBar, TopSidebar, TopsideItem, TopsideRow } from './dasboard.styled'
import Logo from '../../components/logo/Logo'
import { LuUsers2 } from "react-icons/lu";
import { RiLoginBoxLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { MdForwardToInbox } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import User from '../../assets/user.png'
import PasswordInput from '../../components/formInput/FormInput';
import SearchIcon from '../../icons/SearchIcon';
import PlusIcon from '../../icons/PlusIcon';

import { Outlet, useNavigate } from 'react-router-dom';

export type Obj = {[k:string]:any}
const sideItems = [
  {
    id: 1,
    txt: "My Portfolio",
    icn: <LuUser2/>,
    route: '/dashboard'

  },
  {
    id: 2,
    txt: "My Groups",
    icn: <LuUsers2/>,
    route: '/dashboard'

  },
  
  {
    id: 3,
    txt: "Messages",
    icn: <MdForwardToInbox/>,
    route: '/dashboard/message'
  },
   {
    id: 4,
    txt: "Analytics",
    icn: <IoAnalytics/>,
    route: ''
  },
  {
    id: 5,
    txt: "Packs",
    icn: <CiDollar/>,
    route: '/dashboard'
  },
  {
    id: 6,
    txt: "Settings",
    icn: <IoSettingsOutline/>,
    route: '/dashboard'
  }
]
const Dashboard = () => {
  const [cls, setCls] = useState(1)
  const navigate = useNavigate()

  const handleRoute = (route:string, index:number)=>{
    setCls(index)
    navigate(route)
  }

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
                  <TopsideRow onClick={()=>handleRoute(d?.route, idx+1)} act={cls === d?.id ? "active" : "none"}>
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
       <Header>
        <HeaderLeft>My Portfolio</HeaderLeft>
        <HeaderRight>
          <SearchInput>
            <PasswordInput icn={<SearchIcon/>} inputType='text' placeholder='Search' className='search'/>
          </SearchInput>
          <Circle>
            <PlusIcon/>
          </Circle>
          <Circle>
            <span className="barge"></span>
            <FaRegBell/>
          </Circle>
        </HeaderRight>
       </Header>
       {/* <Portfolio/> */}
       <Outlet/>
      </MainContent>
    </DashboardLayout>
  )
}

export default Dashboard