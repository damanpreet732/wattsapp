import React from 'react'
import { auth, provider } from './Firebase'
import './Login.css'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {

    const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type : actionTypes.SET_USER,
                    user : result.user,
                })
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='loginContainer'>
                <img alt='wattsapp' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png'></img>
                <h2>Sign in to Wattsapp</h2>
                <button onClick={signIn}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login
