import React, { useRef, useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {

    const [btn, setBtn] = useState(false);

    console.log(btn);

    const refWolverine = useRef(null);
    
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000);
    }, [])

    const setLeftClaws = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightClaws = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearClaws = () => {
        if (refWolverine.current.classList.contains("leftImg")) {
            refWolverine.current.classList.remove("leftImg");
        }
        else if (refWolverine.current.classList.contains("rightImg")) {
            refWolverine.current.classList.remove("rightImg");
        }
    }
    // si btn est true

     const displayBtn = btn && (
        //  fragmen permet de remplacer des divs inutiles mais fait comme si il n'existait pas ( cela évitant un bug react quand il n'y a pas de div )
        <Fragment>
        <div className="leftBox">
            <Link onMouseOver={setLeftClaws} onMouseOut={clearClaws} className="btn-welcome" to="/signup">Inscription</Link>
        </div>
        <div className="rightBox">
            <Link onMouseOver={setRightClaws} onMouseOut={clearClaws} className="btn-welcome" to="/login">Connexion</Link>
        </div>
        </Fragment>
    ) 
    return (
        <main ref={refWolverine} className="welcomePage">
            {displayBtn}
        </main>
    )
}

export default Menu