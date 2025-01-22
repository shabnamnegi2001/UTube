import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";
import './Auth.css'

const Auth = (
    {user, setAuthBtn, setEditCreateChanelBtn}
) => {
    return(
        
        <>
       <div className='auth-container-nav' onClick={() => setAuthBtn(false)}>
        <div className='auth-container'>
            <p className='user-details'>
                {user?.result.name?(
                    <>{user?.result.name.charAt(0).toUpperCase()}</>
                ): (
                    <>{user?.result.email.charAt(0).toUpperCase()}</>
                )
                }
            </p>
        <div className='email-auth'>{user?.result.email}</div>
        <div className='btns-auth'>
        { user?.result.name ?(
            <>{<Link to={'/'} className='btn-auth'>Your channel</Link>}</>
        ): (
            <input type='submit' className='btn-auth' value={"Create Your Channel"} onClick={() => setEditCreateChanelBtn(true)} />
        )
        }
       </div>
       <div className='btn-auth'>
    < BiLogOut />Log Out
    </div>
    </div>
    
    </div>
    </>
    )
}
export default Auth;