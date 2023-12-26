import React, { useState } from 'react'
import { ButtonItem, CardContainer, Desc, Form, FormHeader, FormItem, FormLabel, ServicePolicy } from './signUp.styled'
import PasswordInput from '../../components/formInput/FormInput'

import UserIcon from '../../icons/UserIcon'
import EmailIcon from '../../icons/EmailIcon'
import Lock from '../../icons/Lock'

const RegisterForm = () => {

    const [activate, setActivate] = useState(false)

    console.log('ac', activate)
  return (
    <CardContainer>
        <Form>
            <FormHeader>Register your account</FormHeader>
            <Desc>Proceed to create account and setup your organization</Desc>
            <FormItem style={{flexDirection: 'row', justifyContent: "space-between", padding: 0}}>
                <FormItem style={{width: '180px'}}>
                    {
                        activate &&  <FormLabel>First Name</FormLabel>
                    }
                   
                    <PasswordInput 
                        icn={<UserIcon/>} 
                        inputType='text' 
                        placeholder='First Name'
                        onFocus={()=>setActivate(true)}
                    />
                </FormItem>
                <FormItem style={{width: '180px'}}>
                {
                        activate &&  <FormLabel>Last Name</FormLabel>
                    }
                    <PasswordInput 
                        icn={<UserIcon/>} 
                        inputType='text' 
                        placeholder='Last Named'
                        onFocus={()=>setActivate(true)}
                    />
                </FormItem>
            </FormItem>
            <FormItem>
                {
                    activate &&  <FormLabel>Email</FormLabel>
                }
                <PasswordInput 
                    icn={<EmailIcon/>} 
                    inputType='email' 
                    placeholder='Work mail'
                    onFocus={()=>setActivate(true)}
                />
            </FormItem>
            <FormItem>
                {
                    activate &&  <FormLabel>Password</FormLabel>
                }
                <PasswordInput 
                    icn={<Lock/>} 
                    inputType='password' 
                    placeholder='Password'
                    onFocus={()=>setActivate(true)}
                />
            </FormItem>
            <ButtonItem activate={activate ? 'true' : 'false'}>
               <button className='btn' disabled={activate}>
                 Create account
               </button>
            </ButtonItem>
        </Form>
        <FormItem>
            <ServicePolicy>
                By clicking the button above, 
                you agree to our <span className='service'>Terms of Service</span> and <span className='service'>Privacy Policy.</span>
            </ServicePolicy>
        </FormItem>

        <FormItem style={{marginTop: '1rem'}}>
            <ServicePolicy>
              Already have an account? <span className="service">Login</span>
            </ServicePolicy>
        </FormItem>
    </CardContainer>
  )
}

export default RegisterForm