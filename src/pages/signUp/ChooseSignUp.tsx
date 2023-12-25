import React from 'react'
import { Footer, ItemWrapper, LeftItem, RightItem, SignUpWrapper } from './signUp.styled'
//import LogoIcon from '../../icons/LogoIcon'
import Logo from '../../components/logo/Logo'
import StackItems from './StackItems'
import PasswordInput from '../../components/formInput/FormInput'
import { EyeClosed } from '../../icons/EyeIcon'

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
      <ItemWrapper>
        <PasswordInput icn={<EyeClosed/>} inputType='password'/>
      </ItemWrapper>
     
     </RightItem>
    </SignUpWrapper>
  )
}

export default ChooseSignUp