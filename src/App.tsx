import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import RegisterForm from './components/RegisterForm'
import UserData from './components/UserData'


function App() {

  const companyName = "CodeAcademy";
  const aboutText = "About Us";
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userData,setUserData] = useState({
    fullname:"",
    email:"",
    address:"",
    username:"",
    password:"",
});

  return (
    <>
     
        <Navbar companyName={companyName} aboutText={aboutText} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

        {isLoggedIn ? (<UserData user={userData}/>) : (<RegisterForm setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData}/>)}
    </>
  )
}

export default App
