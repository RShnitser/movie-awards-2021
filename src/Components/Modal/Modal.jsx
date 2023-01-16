import React from "react";
import "./Modal.css";

const Modal = ({text, close, isOpen}) => {

    console.log(isOpen);
    return (
        <>
        {isOpen ? (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick ={() => close(false)} className="close">&times;</button>
                </div>
                <div className="modal-body">
                    <div>{text}</div>
                </div>
            </div>
        </div>
        ) : null}
        </>
    );
}

export default Modal;