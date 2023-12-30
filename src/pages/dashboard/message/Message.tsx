
import { ChatImageLeft, ChatImageRight, ChatsLeft, ChatsRight, InputDetailsIcons, InputSearch, MessageLeft, MessageRight, MessageWrapper, MsgBodyWrapper, MsgItem, MsgLeftBottom, MsgLeftTop, MsgProfile, MsgRightBody, MsgRightHeader, RoundedImage, ScrollMsg, TypeMsg } from './message.styled'
import { FiEdit2 } from "react-icons/fi";
import { Column, Row } from '../../../globalStyles';
import User from '../../../assets/user.png'
import UserII from '../../../assets/ellipe.png'
import PasswordInput from '../../../components/formInput/FormInput';
import { SearchIconII } from '../../../icons/SearchIcon';
import GroupIcon from '../../../icons/GroupIcon';
import MicIcon from '../../../icons/MicIcon';
import AttacheIcon from '../../../icons/AttacheIcon';
import CameraIcon from '../../../icons/CameraIcon';
import SmileIcon from '../../../icons/SmileIcon';
import SendIcon from '../../../icons/SendIcon';

const Message = () => {
  return (
    <MessageWrapper>
       <MessageLeft>
        <MsgLeftTop>
            <MsgProfile>
                <Row align='center' gap='10px'>
                    <RoundedImage src={User} alt='user-profile'/>
                    <Column align='start'>
                        <span className="profile_lg">David Peters</span>
                        <span className="profile_sm">Senior Developer</span>
                    </Column>
                </Row>
                <FiEdit2/>
            </MsgProfile>
            <PasswordInput 
                icn={<SearchIconII/>} 
                inputType='text' 
                className='search_in'
                placeholder='Search Here...'
            />
        </MsgLeftTop>
        <MsgLeftBottom>
            <MsgItem active='active'>
                <Row align='center' gap='10px'>
                    <RoundedImage src={UserII} alt='profile -image'/>
                    <Column align='start' gap='5px'>
                        <span className="profile_lg">David Peters</span>
                        <span className="msg_ext">
                            That’s Great. I am Looking forward to having a great start.
                        </span>
                    </Column>
                </Row>
                <Column align='end'>
                    <span className="msg_txt">10:35 AM</span>
                    <span className="status">3</span>
                </Column>
            </MsgItem>
            <MsgItem>
                <Row align='center' gap='10px'>
                    <RoundedImage src={User} alt='profile -image'/>
                    <Column align='start' gap='5px'>
                        <span className="profile_lg">David Peters</span>
                        <span className="msg_ext">
                            That’s Great. I am Looking forward to having a great start.
                        </span>
                    </Column>
                </Row>
                <Column align='end'>
                    <span className="msg_txt">10:35 AM</span>
                    <span className="status">3</span>
                </Column>
            </MsgItem>
            <MsgItem>
                <Row align='center' gap='10px'>
                    <RoundedImage src={User} alt='profile -image'/>
                    <Column align='start' gap='5px'>
                        <span className="profile_lg">David Peters</span>
                        <span className="msg_ext">
                            That’s Great. I am Looking forward to having a great start.
                        </span>
                    </Column>
                </Row>
                <Column align='end'>
                    <span className="msg_txt">10:35 AM</span>
                    <span className="status">3</span>
                </Column>
            </MsgItem>
        </MsgLeftBottom>
       </MessageLeft>

       <MessageRight>
        <MsgRightHeader>
            <span className="online"></span>
            <Row align='center' gap='10px'>
                <RoundedImage src={User} alt='chat image'/>
                <span className="hd_txt">Lisa Roy</span>
            </Row>
            <GroupIcon/>
        </MsgRightHeader>
        <MsgBodyWrapper>
            <ScrollMsg>
                <MsgRightBody>
                    <ChatsLeft>
                        <span className="chat_left">Ya. I’ll be adding more team members to it.</span>
                        <ChatImageLeft src={User} alt='cat img'/>
                    </ChatsLeft>
                    <ChatsRight>
                        <span className="chat_right">Ok. Should I send it over email as well after filling the details..</span>
                        <ChatImageRight src={User} alt='cat img'/>
                    </ChatsRight>
                </MsgRightBody>
                <MsgRightBody>
                    <ChatsLeft>
                        <span className="chat_left">Ya. I’ll be adding more team members to it.</span>
                        <ChatImageLeft src={User} alt='cat img'/>
                    </ChatsLeft>
                    <ChatsRight>
                        <span className="chat_right">Ok. Should I send it over email as well after filling the details..</span>
                        <ChatImageRight src={User} alt='cat img'/>
                    </ChatsRight>
                </MsgRightBody>
            </ScrollMsg>
            <TypeMsg>
                <InputSearch>
                    <PasswordInput icn={<MicIcon/>} inputType='text' className='txt_box'/>
                    <InputDetailsIcons>
                        <AttacheIcon/>
                        <CameraIcon/>
                        <SmileIcon/>
                    </InputDetailsIcons>
                </InputSearch>
                   
                <SendIcon/>
            </TypeMsg>
        </MsgBodyWrapper>
       </MessageRight>
    </MessageWrapper>
  )
}

export default Message