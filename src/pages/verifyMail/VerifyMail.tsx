import  { useState } from 'react'

import OtpBox from '../../components/otp-input/OtpBox'
import {FormHeader, FormItem, ServicePolicy } from '../signUp/signUp.styled'

import { Centered, ConfirmCard, DescV, BtnItem} from './styled'



const VerifyMail = () => {

    const [otp, setOtp] = useState('')
  return (
    <ConfirmCard>
          <Centered style={{alignItems: 'flex-start'}}>
            <FormHeader>Verify your email</FormHeader>
            <DescV style={{textAlign: "left"}}>
                A four digit OTP code has been sent to your email <span className="verify">seyi@zojatech.com</span>
            </DescV>
            <FormItem style={{alignItems: 'flex-start'}}>
                <OtpBox numOtp={4} val={otp} setVal={setOtp}/>
            </FormItem>
            <BtnItem>
               <button className='btn'>
                Confirm Code
               </button>
            </BtnItem>

            <FormItem style={{marginTop: '1rem', textAlign: "left"}}>
                <ServicePolicy>
                    Didn't get the mail? <span className="service">Resend</span>
                </ServicePolicy>
            </FormItem>
        </Centered>

    </ConfirmCard>
  )
}

export default VerifyMail