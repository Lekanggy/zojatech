import React from 'react'
import {FormHeader} from '../signUp/signUp.styled'

import { Centered, ConfirmCard, DescV, BtnItem} from './styled'
import VerifiedIcon from '../../icons/VerifiedIcon'



const Verified = () => {
  return (
    <ConfirmCard>
          <Centered>
            <VerifiedIcon/>
            <FormHeader>Email verified !</FormHeader>
            <DescV>
                The verified email address will be associated with your account. Click on the button below to continue
            </DescV>
            <BtnItem>
               <button className='btn'>
                Continue
               </button>
            </BtnItem>
        </Centered>

    </ConfirmCard>
  )
}

export default Verified