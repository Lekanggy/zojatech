import React, { useState } from 'react'
import { ButtonItem, CardContainer, Desc, Form, FormHeader, FormItem, FormLabel, ServicePolicy } from '../signUp/signUp.styled'
import PasswordInput from '../../components/formInput/FormInput'

import EmailIcon from '../../icons/EmailIcon'
import Lock from '../../icons/Lock'

const LoginForm = () => {

    const [activate, setActivate] = useState(false)

    console.log('ac', activate)
  return (
    <CardContainer>
        <Form>
            <FormHeader>Login in to your account</FormHeader>
            <Desc>Proceed to create account and setup your organization</Desc>
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
               <button className='btn' disabled={activate ? false : true}>
                 Login
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
              Don't have an account? <span className="service">Register</span>
            </ServicePolicy>
        </FormItem>
    </CardContainer>
  )
}

export default LoginForm