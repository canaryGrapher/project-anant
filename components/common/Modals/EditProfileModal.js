
import React from 'react';

const EditUserModal = (props) => {
    
    const closeModal = () => {
        props.setShowModal(false)
    }

    return (
      <>
        {
            props.showModal &&
            <>
          <div
            className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 px-2 focus:outline-none"
          >
            <div className="relative w-full md:w-1/2 my-6 mx-auto max-w-3xl bg-white rounded  text-black">
                <div className='flex justify-center flex-col items-center md:px-0 px-3'>
                    <div className="text-3xl text-center text-bold py-3" style={{color:'#163F65'}}>
                        Edit Profile
                    </div>
                    <div className='text-lg px-20 pb-5 text-center font-semibold' style={{color:'#163F65'}}>
                        Make changes to your profile here!                    
                    </div>        
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">First Name</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="fname" name="fname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div>        
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">Last Name</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="lname" name="lname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div>
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">Email ID</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="email" id="email" name="email" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div>
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">Institute Name</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="text" id="iname" name="iname" style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div> 
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">Password</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="password" id="pass" name="password" required  style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div>
                    <div className="flex flex-col justify-items-start md:w-3/4 w-full my-1">
                        <p className="theme-text text-xs md:text-sm">Confirm Password</p>
                        <input className="w-full h-12 border-2 text-black px-2 rounded focus:outline-none" type="password" id="cpass" name="password" required  style={{boxShadow: 'inset 0px 0px 8px rgba(0, 0, 0, 0.15)'}}/>
                    </div> 
                    <div className='flex flex-col md:flex-row justify-between items-center md:w-3/4 my-5 pb-5'>
                        <button className="rounded-md px-5 py-1 md:m-0 my-1 text-black border-2 bg-white focus:outline-none" onClick={closeModal}>
                            Cancel
                        </button>
                        <button className="rounded-md px-7 py-1 md:m-0 my-1 text-white flex flex-row items-center md:order-2 order-1 focus:outline-none" style={{backgroundColor:'#163F65'}}>
                            Save
                        </button>
                    </div>     
                </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
          </>
        }
      </>
    );
}

export default EditUserModal;