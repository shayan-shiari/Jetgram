import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// Components
import Navbar from './Navbar';

// Styles
import styles from './Chats.module.css';

// gif
import loader from '../gif/spinner.gif';

// Context
import { AuthContext } from '../context/AuthContextProvider';

const Chats = () => {


    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(() => {
        if(!user) {
            navigate('/')
            return; 
        } 

        axios.get('https://api.chatengine.io/users/me', {
            headers: {  
                'project-id': '28b3218e-b7fd-4fc3-b097-651e141cb781',
                'user-name': user.displayName,
                'user-secret': user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formData = new FormData();
            formData.append('email', 'shahslsh@gmail.com')
            formData.append('username', user.displayName);
            formData.append('secret', user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formData.append('avatar', avatar, avatar.name)
                    axios.post('https://api.chatengine.io/users/', formData, {
                        headers: {
                            'private-key':'da6c3ab1-8194-4229-a41a-8f37eb68e795',
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    },[user, navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'});
    }
    
    const logoutHandler = async () => {
        await auth.signOut();
        navigate('/')
    }

  
    if(!user || loading) return  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img src={loader} alt="loading" /> </div> 

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>
            <ChatEngine 
            height = 'calc(100vh - 50px)'
            projectID = '28b3218e-b7fd-4fc3-b097-651e141cb781'
            userName = {user.displayName}
            userSecret = {user.uid}
            />
        </div>
    );
};

export default Chats;