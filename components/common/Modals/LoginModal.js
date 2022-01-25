import React, { useEffect, useState } from 'react';
import Image from "next/image" 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const LoginModal = (props) => {

    // modify this state to handle initial state on signin/signup click
    const [selectedIndex, setSelectedIndex] = useState(0)

    const initialSignUp = {
        firstName: "",
        lastName: "",
        email: "",
        institute: "",
        password: "",
        confirmPass: ""
    }

    const initialSignIn = {
        email: "",
        password: ""
    }
    
    // handles data states for sign up and sign in
    const [signUpData, setSignUpData] = useState(initialSignUp)
    const [signInData, setSignInData] = useState(initialSignIn)

    // handles error text states for sign up
    const [fname, setFname] = useState(false)
    const [lname, setLname] = useState(false)
    const [email, setEmail] = useState(false)
    const [institute, setInstitute] = useState(false)
    const [password, setPassword] = useState(false)
    const [passLength, setPassLength] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)

    // handles error text states for sign in
    const [signInEmail, setSignInEmail] = useState(false)
    const [noEmail, setNoEmail] = useState(false)
    const [signInPass, setSignInPass] = useState(false)
    const [wrongPass, setWrongPass] = useState(false)

    const SignIn = () => {
        const signin = document.querySelector('.signin');
        signin.style.backgroundColor = 'white';
        signin.style.color = '#163F65';

        const signup = document.querySelector('.signup');
        signup.style.backgroundColor = '#163F65';
        signup.style.color = 'white';
    }

    const SignUp = () => { 
        const signin = document.querySelector('.signin');
        signin.style.backgroundColor = '#163F65';
        signin.style.color = 'white';

        const signup = document.querySelector('.signup');
        signup.style.backgroundColor = 'white';
        signup.style.color = '#163F65';
    }

    const redirectSignIn = () => {
        resetStates();
        setSelectedIndex(1);
        SignIn();
    }

    const redirectSignUp = () => {
        resetStates();
        setSelectedIndex(0);
        SignUp();
    }

    const closeModal = () => {
        resetStates();
        props.setShowModal(false)
    }

    // function to check for password match and length
    // returns true if password matches or length is acceptable, else return false
    const checkPassword = () => {
        if(signUpData.password !== "" && signUpData.confirmPass !== "" && (signUpData.password === signUpData.confirmPass) && (signUpData.password.length >= 6)) {
            setConfirmPass(false)
            setPassLength(false)
            return true
        } else {
            if(signUpData.password.length < 6) 
                setPassLength(true)
            else 
                setPassLength(false)
            setConfirmPass(true)
            return false
        }   
    }

    // function to check for empty fields for sign up section
    // returns true if any field is empty, else return false
    const checkEmptyFields = () => {
        if(signUpData.firstName === "") {
            setFname(true)
            return true
        } 
        if(signUpData.lastName === "") {
            setLname(true)
            return true
        } 
        if(signUpData.email === "") {
            setEmail(true)
            return true
        } 
        if(signUpData.institute === "") {
            setInstitute(true)
            return true
        } 
        if(signUpData.password === "") {
            setPassword(true)
            return true
        } 
        if(signUpData.confirmPass === "") {
            setConfirmPass(true)
            return true
        }

        return false
    }


    // function to check for empty fields for sign in section
    // returns true if any field is empty, else return false
    const checkEmptyFieldsSignIn = () => {
        if(signInData.email === "") {
            setSignInEmail(true)
            return true
        }
        if(signInData.password === "") {
            setSignInPass(true)
            return true
        }
        return false
    }

    // function to reset error text states
    const resetStates = () => {
        setFname(false)
        setLname(false)
        setEmail(false)
        setInstitute(false)
        setPassword(false)
        setPassLength(false)
        setConfirmPass(false)
        setSignInEmail(false)
        setSignInPass(false)
    }

    // function to handle sign up operation
    const handleSignUp = () => {
        resetStates();
        // checks that the passwords match and that fields are not empty
        if(checkEmptyFields() | !checkPassword()) {
            // make call to backend here
        } else {
            // reset the states of the error texts
            resetStates();
        }
    }

    const handleSignIn =  () => {
        resetStates();
        console.log(checkEmptyFieldsSignIn())
        if(checkEmptyFieldsSignIn()) {
            console.log(signInData)
            // authenticate the user here
        } else {    
            // reset the states of the error texts
            resetStates()
        }
    }

    return (
      <>
        {
            props.showModal 
            &&
        <div
          className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
        >
            <div className="min-h-screen px-2 flex justify-center items-center fixed md:inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}>
                <div className="relative w-full flex flex-col md:w-1/2 my-6 mx-auto max-w-3xl text-black">
                    <div className="ml-auto">
                        <Image onClick={closeModal} className="cursor-pointer" src="https://ik.imagekit.io/iiscvsmanipal/close__1__A0_1Zg8-pXf.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642289536550" height={20} width={20}/>
                    </div>
                    <Tabs className="bg-white rounded-b-xl" selectedIndex={selectedIndex}>
                        <TabList className="flex flex-row justify-between items-center">
                            <Tab className="signup w-1/2 text-center text-2xl text-white font-semibold p-4 cursor-pointer" style={{ color:'#163F65' }} onClick={redirectSignUp}>SignUp</Tab>
                            <Tab className="signin w-1/2 text-center text-2xl text-white font-semibold p-4 cursor-pointer" style={{ backgroundColor:'#163F65' }} onClick={redirectSignIn}>SignIn</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='flex flex-col justify-center items-center px-3'>
                                <p className='text-lg md:px-20 py-5 text-center font-semibold theme-text'>
                                    Complete the following sign in procedure before contributing to the database
                                </p>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">First Name</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="text" 
                                        id="fname" 
                                        name="fname" 
                                        required
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                                    />
                                    {fname && <p className="text-red-400 text-xs" id="empty-first-name">First name cannot be empty</p>}
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Last Name</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="text" 
                                        id="lname" 
                                        name="lname" 
                                        required
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                                    />
                                    {lname && <p className="text-red-400 text-xs" id="empty-last-name">Last name cannot be empty</p>}
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Email ID</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                                    />
                                    {email && <p className="text-red-400 text-xs" id="error-email">Invalid Email ID</p>}
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Institute Name</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="text" 
                                        id="iname" 
                                        name="iname" 
                                        required
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, institute: e.target.value })}
                                    />
                                    {institute && <p className="text-red-400 text-xs" id="empty-institute">Institute name cannot be empty</p>}
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Password</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="password" 
                                        id="pass" 
                                        name="password" 
                                        required  
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                                    />
                                    {password && <p className="text-red-400 text-xs" id="empty-password">Password cannot be empty</p>}
                                    {passLength && <p className="text-red-400 text-xs" id="password-length">Password needs to be at least 6 characters</p>}
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Confirm Password</p>
                                    <input 
                                        className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                        type="password" 
                                        id="cpass" 
                                        name="password" 
                                        required  
                                        style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                        onChange={(e) => setSignUpData({ ...signUpData, confirmPass: e.target.value })}
                                    />
                                    {confirmPass && <p className="text-red-400 text-xs" id="password-length">Password entered needs to match with above password</p>}
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center md:w-3/4 w-full my-5'>
                                    <div className='w-3/4 flex flex-row items-center mt-2 md:m-0 md:order-1 order-2' onClick={redirectSignIn}>
                                        <p className="pr-2">Already have an account?</p><a className="theme-text" href="#">Sign In</a>
                                    </div>
                                    <button 
                                        className="rounded-md px-5 py-1 mb-1 md:m-0 text-white flex flex-row items-center md:order-2 order-1" 
                                        style={{ backgroundColor:'#163F65' }}
                                        onClick={handleSignUp}
                                    >
                                        Sign Up
                                        <svg className='mt-1 mx-1'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-lg md:px-20 px-2 py-5 text-center font-semibold theme-text'>
                                    Complete the following sign up procedure before contributing to the database
                                </p>
                                <div className="flex flex-col md:w-3/4 w-full mx-auto md:px-0 px-3 m-1">
                                    <div className="my-1">
                                        <p className="theme-text text-xs md:text-sm">Email ID</p>
                                        <input 
                                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                            type="email" 
                                            id="login-email" 
                                            name="login-email" 
                                            style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.2)'}}
                                            onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                                        />
                                        {signInEmail && <p className="text-red-400 text-xs" id="signin-email">Email cannot be empty</p>}
                                        {noEmail && <p className="text-red-400 text-xs" id="invalid-signin-email">Email does not exist</p>}
                                    </div>
                                    <div className="my-1">
                                        <p className="theme-text text-xs md:text-sm">Password</p>
                                        <input 
                                            className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" 
                                            type="password" 
                                            id="login-pass" 
                                            name="login-password" 
                                            required  
                                            style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)' }}
                                            onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                                        />
                                        {signInPass && <p className="text-red-400 text-xs" id="signin-pass">Password cannot be empty</p>}
                                        {wrongPass && <p className="text-red-400 text-xs" id="wrong-password">Wrong Password</p>}
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center md:w-3/4 w-full my-5'>
                                    <div className='flex flex-row items-center mt-2 md:m-0 md:order-1 order-2' onClick={redirectSignUp}>
                                        <p className="pr-2">Don't have an account?</p><a className="theme-text" href="#">Signup</a>
                                    </div>
                                    <button 
                                        className="rounded-md px-5 py-1 text-white flex flex-row items-center mt-2 md:m-0 md:order-2 order-1" 
                                        style={{ backgroundColor:'#163F65' }}
                                        onClick={handleSignIn}
                                    >
                                        Sign In
                                        <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
        }
      </>
    );
}

export default LoginModal;