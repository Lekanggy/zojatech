//import React, { useState } from 'react'
import {CardContainer, ChooseItem, ChooseLabel, Form, FormHeader, FormItem, Hr, ServicePolicy } from '../signUp/signUp.styled'
import ChooseIcon from '../../icons/ChooseIcon'
import Google from '../../icons/Google'


const ChooseSignUp = () => {

  
  return (
    <CardContainer>
        <Form>
            <FormHeader>Register your account</FormHeader>
          
            <ChooseItem>
                <ChooseLabel>
                    <ChooseIcon/>
                   Sign up with email
                </ChooseLabel>
            </ChooseItem>
            <ChooseLabel style={{padding: "1rem 0"}}>
                <Hr/> or <Hr/>
            </ChooseLabel>
            <ChooseItem>
                 <ChooseLabel>
                    <Google/>
                    Sign up with google
                </ChooseLabel>
            </ChooseItem>
           
        </Form>
        <FormItem style={{paddingTop: "2rem"}}>
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

export default ChooseSignUp