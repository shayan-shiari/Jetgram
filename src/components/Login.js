import React from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Icons
import logo from '../assets/google.svg';

// styles
import styles from './Login.module.css';

const Login = () => {

    const sighIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re) => {
            console.log("sdc")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className={styles.loginPage}>
           <div className={styles.loginCard}>
            <h2>Welcome to Jetgram!</h2>
            <div className={styles.button} onClick={sighIn}>
                <img src={logo} alt="logo" />Sing in with Google
            </div>
           </div>
        </div>
    );
};

export default Login;