import React from 'react';
import Image from "next/image" 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const LoginModal = (props) => {
    
    const SignUp = () => {
        const signup = document.querySelector('.signup');
        signup.style.backgroundColor = 'white';
        signup.style.color = '#163F65';

        const signin = document.querySelector('.signin');
        signin.style.backgroundColor = '#163F65';
        signin.style.color = 'white';
    }

    const SignIn = () => { 
        const signup = document.querySelector('.signup');
        signup.style.backgroundColor = '#163F65';
        signup.style.color = 'white';

        const signin = document.querySelector('.signin');
        signin.style.backgroundColor = 'white';
        signin.style.color = '#163F65';
    }

    const closeModal = () => {
        props.setShowModal(false)
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
                    <Tabs className="bg-white rounded-b-xl">
                        <TabList className="flex flex-row justify-between items-center text-white">
                            <Tab className="signup w-1/2 text-center text-2xl font-semibold p-4 cursor-pointer" style={{color:'#163F65'}} onClick={SignUp}>SignUp</Tab>
                            <Tab className="signin w-1/2 text-center text-white text-2xl font-semibold p-4 cursor-pointer" style={{backgroundColor:'#163F65'}} onClick={SignIn}>SignIn</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-lg md:px-20 px-2 py-5 text-center font-semibold theme-text'>
                                    Complete the following sign up procedure before contributing to the database
                                </p>
                                <div className="flex flex-col md:w-3/4 w-full mx-auto md:px-0 px-3 m-1">
                                    <div className="my-1">
                                        <p className="theme-text text-xs md:text-sm">Email ID</p>
                                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="email" id="email" name="email" style={{ boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.2)'}}/>
                                    </div>
                                    <div className="my-1">
                                        <p className="theme-text text-xs md:text-sm">Password</p>
                                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="password" id="pass" name="password" required  style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center md:w-3/4 w-full my-5'>
                                    <div className='flex flex-row items-center mt-2 md:m-0 md:order-1 order-2'>
                                        <p className="pr-2">Don't have an account?</p><a className="theme-text" href="#">Signup</a>
                                    </div>
                                    <button className="rounded-md px-5 py-1 text-white flex flex-row items-center mt-2 md:m-0 md:order-2 order-1" style={{backgroundColor:'#163F65'}}>
                                        Sign In
                                        <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='flex flex-col justify-center items-center px-3'>
                                <p className='text-lg md:px-20 py-5 text-center font-semibold theme-text'>
                                    Complete the following sign in procedure before contributing to the database
                                </p>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">First Name</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="fname" name="fname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Last Name</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="lname" name="lname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Email ID</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="email" id="email" name="email" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Institute Name</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="iname" name="iname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Password</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="password" id="pass" name="password" required  style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className="flex flex-col justify-items-start md:w-3/4 w-full m-1">
                                    <p className="theme-text text-xs md:text-sm">Confirm Password</p>
                                    <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="password" id="cpass" name="password" required  style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                                </div>
                                <div className='flex flex-col md:flex-row justify-between items-center md:w-3/4 w-full my-5'>
                                    <div className='w-3/4 flex flex-row items-center mt-2 md:m-0 md:order-1 order-2'>
                                        <p className="pr-2">Already have an account?</p><a className="theme-text" href="#">Sign In</a>
                                    </div>
                                    <button className="rounded-md px-5 py-1 mb-1 md:m-0 text-white flex flex-row items-center md:order-2 order-1" style={{backgroundColor:'#163F65'}}>
                                        Sign Up
                                        <svg className='mt-1 mx-1'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
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