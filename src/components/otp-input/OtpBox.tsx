import {SetStateAction} from 'react'
//import { OtpItem } from './otp.styled';
import OtpInput from 'react-otp-input';
import './otp.style.css'

type OtpProps = {
  numOtp?: number,
  val: string
  setVal: React.Dispatch<SetStateAction<string>>
}
const OtpBox = ({numOtp, val, setVal}:OtpProps) => {
    
    // console.log(val)

    return (
      <OtpInput
        value={val}
        onChange={setVal}
        numInputs={numOtp ? numOtp : 6}
        //renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        containerStyle="otp_container"
        inputStyle="inputStyle"
      />
    );
}

export default OtpBox