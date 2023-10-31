import { useAuthenticator } from '@aws-amplify/ui-react'
import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthController(){
    const navigate = useNavigate()
    const { route } = useAuthenticator((context) => [context.route]) 
    useEffect(()=>{
        if (route === 'authenticated'){
            navigate('/')
        }
        else{
            navigate('/auth')
        }
    })
    return(
        <>
        </>
    )
}