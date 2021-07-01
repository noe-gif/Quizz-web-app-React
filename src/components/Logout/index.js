import React, { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../Firebase';
import ReactToolTip from 'react-tooltip'

const Logout = () => {

    const firebase = useContext(FirebaseContext);
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        if (checked === true) {
            console.log("Déconnexion");
            firebase.signoutUser();
        }
    }, [checked, firebase])

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input onChange={handleChange} type="checkbox" checked={checked}></input>
                <span className="slider round" data-tip="Déconnexion"></span>
            </label>
            <ReactToolTip place="left" effect="solid"></ReactToolTip>
        </div>
    )
}

export default Logout;