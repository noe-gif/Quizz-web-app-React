import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';

const Signup = (props) => {
    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [LoginData, setLoginData] = useState(data);
    const [error, setError] = useState('');
    
    const handlechange = e => {
        setLoginData({...LoginData, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password, pseudo } = LoginData;
        firebase.signupUser(email, password)
        .then((authUser) => {
            return firebase.user(authUser.user.uid).set({
                pseudo,
                email,
                password
            })
        })
        .then(user => {
            setLoginData({...data});
            props.history.push('/login');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }
    
    const { pseudo, email, password, confirmPassword } = LoginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscription</button> : <button>Inscription</button>

    // gestion erreur 

    const errorMsg = error !== '' && <span>{error.message}</span> // (ternaire modifié)

    // JSX

    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">
                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                    {errorMsg}
                    <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handlechange} value={pseudo} type="text" id="pseudo" autoComplete="off" required></input>
                                <label htmlFor="pseudo">Pseudo V2</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handlechange} value={email} type="text" id="email" autoComplete="off" required></input>
                                <label htmlFor="email">Email</label>
                            </div> 

                            <div className="inputBox">
                                <input onChange={handlechange} value={password} type="password" id="password" autoComplete="off" required></input>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handlechange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required></input>
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                            {btn}
                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit ? Connectez-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup