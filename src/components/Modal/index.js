import React from 'react';

const Modal = ({ showModal, children, hideModal }) => {
    return (
        // si showModal est true on affiche le JSX çi dessous
        showModal && (
            <div className="modalBackground" onClick={hideModal}>
                <div className="modalContainer">
                    { children }
                </div>
            </div>
        )
    )
}

export default Modal;