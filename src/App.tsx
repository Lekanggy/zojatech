//import { Container } from "./globalStyles"
import GlobalStyle from "./globalStyles"
//import Dashboard from "./pages/dashboard/Dashboard"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChooseSignUp from "./pages/signUp/ChooseSignUp";
import SignUp from "./pages/signUp/SignUp";
import RegisterForm from "./pages/signUp/RegisterForm";
import ConfirmMail from "./pages/verifyMail/ConfirmMail";
import VerifyMail from "./pages/verifyMail/VerifyMail";
import Verified from "./pages/verifyMail/Verified";
import Dashboard from "./pages/dashboard/Dashboard";
import { ToastContainer } from 'react-toastify';
import LoginForm from "./pages/login/Login";
import Portfolio from "./pages/dashboard/portfolio/Portfolio";
import Message from "./pages/dashboard/message/Message";
//import SignUp from "./pages/signUp/SignUp"


function App() {
  
  return (
    <>
     <GlobalStyle/>
     <Router>
        <Routes>
          <Route path='/' element={<SignUp/>}>
            <Route index element={<ChooseSignUp/>}/>
            <Route path='register' element={<RegisterForm/>}/>
            <Route path='login' element={<LoginForm/>}/>
            <Route path='confirm-inbox' element={<ConfirmMail/>}/>
            <Route path='verify-mail' element={<VerifyMail/>}/>
            <Route path='verified' element={<Verified/>}/>
          </Route>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Portfolio/>}/>
            <Route path="message" element={<Message/>}/>
          </Route>
        </Routes>
      </Router>
      <ToastContainer autoClose={1000} className="toast_item"/>
     {/* <SignUp/> */}
     {/* <Dashboard/> */}
    </>
  )
}

export default App
