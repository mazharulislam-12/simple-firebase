import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const Login = () => { 
    const [user, setUser] = useState()
    const auth = getAuth(app)
    console.log(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loginUser = result.user
            console.log(loginUser);
            setUser(loginUser);
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }


   

    return (

        <div>

            {/* user ? login : sign in */}

           {
            user ?
            <button onClick={handleSignOut}>Sign Out</button> :
            <>
                <button onClick={handleGoogleSignIn}>Google Login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>
            </>
            
            }
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>User: {user.email}</p>
                <img src= {user.photoURL} alt="" />
            </div>
            }
           
        </div>
    );
};

export default Login;