
import React, { Fragment, useEffect, useState } from 'react';
import Image from "next/image"
import Link from "next/link";
import { useRouter } from 'next/router'

import Session from 'supertokens-auth-react/recipe/session';
import { signOut } from "supertokens-auth-react/recipe/thirdparty";

const Sidebar = () => {
    const router = useRouter()

    const [loggedIn, setLoggedIn] = React.useState(false);

    async function onLogout() {
        await signOut();
        router.reload()
    }
    async function getUserInfo() {
        if (await Session.doesSessionExist()) {
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    const currentURL = router.asPath;
    const queries = router.query;
    const currentPage = currentURL.split('/')
    let redirectToAfterLogin
    if (currentURL.split("?")[0] === "/apps/mxene/filter") {
        if (currentPage[3].split("?")[0] == "filter") {
            redirectToAfterLogin = `/apps/mxene/filter/redirection`
            if (queries.M1) {
                redirectToAfterLogin += `/${queries.M1}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.M2) {
                redirectToAfterLogin += `/${queries.M2}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.T1) {
                redirectToAfterLogin += `/${queries.T1}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.T2) {
                redirectToAfterLogin += `/${queries.T2}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.X) {
                redirectToAfterLogin += `/${queries.X}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.bandGap) {
                redirectToAfterLogin += `/${queries.bandGap}`
            } else {
                redirectToAfterLogin += `/_`
            }
            if (queries.currentPage) {
                redirectToAfterLogin += `/${queries.currentPage}`
            } else {
                redirectToAfterLogin += `/_`
            }
        }
    } else {
        redirectToAfterLogin = currentURL
    }


    return (
        <div className="bg-white z-50 text-black h-screen flex flex-col justify-between pb-3 border-l-2 border-white">
            <div>
                <div className="w-full h-32 flex justify-between items-center theme select-none">
                    <div className='p-3 px-4 mx-10 border-2 rounded-full border-white'>
                        <Image height={35} width={30} alt="Account" src="https://ik.imagekit.io/iiscvsmanipal/account_vmJJKFcge.png?updatedAt=1638595344875" />
                    </div>
                    <div className='flex flex-col mr-10 text-white'>
                        <h1 className='text-4xl font-bold ml-auto'>Hello!</h1>
                        <p className='text-lg'>Welcome to Anant</p>
                    </div>
                </div>
                <div className='w-full text-right my-5 px-4 flex flex-col items-end'>
                    {loggedIn ?
                        <Fragment>
                            <p className='mx-4'>You are already logged in. Do you want to sign out? Certain features of the application will require you to sign in again.</p>
                            <button className='text-white hover:theme-text hover:bg-white border-2 border-theme theme text-lg px-3 py-1 rounded-md my-3 mx-4 focus:outline-none' onClick={onLogout}>Logout</button>

                        </Fragment>
                        :
                        <Fragment>
                            <p className='mx-4'>Certain features of this application require you to sign in.</p>
                            <p onClick={() => router.push(`/auth?redirectToPath=${redirectToAfterLogin}`)}>
                                <button className='text-white hover:theme-text hover:bg-white border-2 border-theme theme text-lg px-3 py-1 rounded-md my-3 mx-4 focus:outline-none'>Log in</button>
                            </p>
                        </Fragment>}
                </div>
            </div>
            <div className="text-center theme-text text-xl font-bold">
                <Link href="/team">Meet the team</Link>
            </div>
        </div>
    )
}

export default Sidebar;