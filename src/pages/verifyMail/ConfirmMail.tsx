//import React, { useState } from 'react'
import {FormHeader, FormItem, ServicePolicy } from '../signUp/signUp.styled'
import VerifyMailIcon from '../../icons/VerifyMailIcon'

import { Centered, ConfirmCard, DescV, BtnItem} from './styled'
import { useNavigate } from 'react-router-dom'




const ConfirmMail = () => {


  const navigate = useNavigate()
    
  return (
    <ConfirmCard>
          <Centered>
            <VerifyMailIcon/>
            <FormHeader>Check your mailbox !</FormHeader>
            <DescV>
                We’ve sent an email to <span className='col'>seyi@zojatech.com</span> with a an OTP to confirm your account. 
                Check your inbox to  activate your account.
            </DescV>
            <BtnItem onClick={()=>navigate("/verify-mail")}>
               <button className='btn' disabled>
                Confirm Email
               </button>
            </BtnItem>

            <FormItem style={{marginTop: '1rem', textAlign: "center"}}>
                <ServicePolicy>
                    Didn't get the mail? <span className="service">Resend</span>
                </ServicePolicy>
            </FormItem>
        </Centered>

    </ConfirmCard>
  )
}

export default ConfirmMail