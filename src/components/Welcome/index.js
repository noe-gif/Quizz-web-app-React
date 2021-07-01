import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout';
import Quiz from '../Quiz';
import Loader from '../Loader';

const Welcome = (props) => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/login')
        })

        if (userSession != null) {
            firebase.user(userSession.uid)
            .get()
            .then( doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })    
        }

        return () => {
            listener();
        };
    }, [userSession])

    return userSession === null ? (
        <Loader loadingMsg={"Authentification..."} styling={{textAlign: 'center', color: '#FFFFFF'}}>
        </Loader>
    ) : (
        <div className="quiz-bg">
            <div className="container" style={{height: '1000px'}}>
                <Logout></Logout>
                <Quiz userData={userData}></Quiz>
            </div>
        </div>
    )
}

export default Welcome;