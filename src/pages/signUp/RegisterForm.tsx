import { useState } from 'react'
import { ButtonItem, CardContainer, Desc, Form, FormHeader, FormItem, FormLabel, ServicePolicy } from './signUp.styled'
import PasswordInput from '../../components/formInput/FormInput'

import UserIcon from '../../icons/UserIcon'
import EmailIcon from '../../icons/EmailIcon'
import Lock from '../../icons/Lock'

import useFormSubmission from '../../hooks/useFormSubmission'
import { useNavigate } from 'react-router-dom'
import SideEmailIcon from '../../icons/SideEmailIcon'
//import { useSubmit } from 'react-router-dom'

const url = import.meta.env.VITE_APP_BASE_URL + "register"


const RegisterForm = () => {

    const navigate = useNavigate()
    const [activate, setActivate] = useState(false)
    const {handleData, handleSubmit} = useFormSubmission(url, 'register', navigate)

   
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
                        name="first_name"
                        onChange={handleData}
                        id="first_name"
                        required
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
                        name="last_name"
                        onChange={handleData}
                        id="last_name"
                        required
                    />
                </FormItem>
            </FormItem>
            <FormItem>
                {
                    activate &&  <FormLabel>Email <SideEmailIcon/></FormLabel>
                }
                <PasswordInput 
                    icn={<EmailIcon/>} 
                    inputType='email' 
                    placeholder='Work mail'
                    onFocus={()=>setActivate(true)}
                    name="email"                  
                    onChange={handleData}
                    id="email"
                    required
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
                    name="password"
                    onChange={handleData}
                    id="password"
                    required
                />
            </FormItem>
            <ButtonItem activate={activate ? 'true' : 'false'}>
               <button className='btn' disabled={activate ? false : true} onClick={handleSubmit}>
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

        <FormItem style={{marginTop: '4rem'}}>
            <ServicePolicy>
              Already have an account? <span className="service">Login</span>
            </ServicePolicy>
        </FormItem>
    </CardContainer>
  )
}

export default RegisterForm