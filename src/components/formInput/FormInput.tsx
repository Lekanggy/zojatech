import React, { useState } from 'react';
import styled from 'styled-components';
import Eye, { EyeClosed } from '../../icons/EyeIcon';



const PasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LeftIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

const PasswordInputField = styled.input`
  padding-left: 35px; /* Space for the left icon */
  padding-right: 35px; /* Space for the eye icon */
  width: 100%;
  height: 40px;
  border-radius: 6px;
  border: 1px solid #DDE2E4;

  &:focus{
    outline-color: var(--primary-col);
  }
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

type InputProp = React.InputHTMLAttributes<HTMLInputElement> & {
    inputType?: string
    icn?:React.ReactNode
}

const PasswordInput = ({icn,  inputType='text', ...props}:InputProp) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <PasswordInputContainer>
      <LeftIcon>
        {/* Add your left icon here, for example: */}
        {icn}
      </LeftIcon>
      <PasswordInputField
        type={passwordVisible ? 'text'  : inputType}
        {...props}
      />
      {
         inputType === "password" && (
            <EyeIcon  onClick={togglePasswordVisibility}>
              
              {
                  passwordVisible ? <Eye/> : <EyeClosed/>
              }
            </EyeIcon>
        )
      }
      
    </PasswordInputContainer>
  );
};

export default PasswordInput;
