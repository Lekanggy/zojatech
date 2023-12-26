import React from 'react'
import { Footer, ItemWrapper, LeftItem, RightItem, SignUpWrapper } from './signUp.styled'
//import LogoIcon from '../../icons/LogoIcon'
import Logo from '../../components/logo/Logo'
import StackItems from './StackItems'

import RegisterForm from './RegisterForm'
import GetHelp from './GetHelp'

const ChooseSignUp = () => {
  return (
    <SignUpWrapper>
     <LeftItem>
      <ItemWrapper>
        <Logo/>
        <StackItems/>
        <Footer>
          © 2022 Revvex. All rights reserved
        </Footer>
      </ItemWrapper>
     </LeftItem>

     <RightItem>
      <ItemWrapper margin='3rem 0 0 0'>
       <RegisterForm/>
       <GetHelp/>
      </ItemWrapper>
     </RightItem>
    </SignUpWrapper>
  )
}

export default ChooseSignUp