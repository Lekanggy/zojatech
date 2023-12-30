
import {FormHeader} from '../signUp/signUp.styled'

import { Centered, ConfirmCard, DescV, BtnItem} from './styled'
import VerifiedIcon from '../../icons/VerifiedIcon'
import { useNavigate } from 'react-router-dom'



const Verified = () => {
    const navigate = useNavigate()
  return (
    <ConfirmCard>
          <Centered>
            <VerifiedIcon/>
            <FormHeader>Email verified !</FormHeader>
            <DescV>
                The verified email address will be associated with your account. Click on the button below to continue
            </DescV>
            <BtnItem onClick={()=>navigate("/login")}>
               <button className='btn' disabled>
                Continue
               </button>
            </BtnItem>
        </Centered>

    </ConfirmCard>
  )
}

export default Verified