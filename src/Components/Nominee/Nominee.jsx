import React from "react";
import "./Nominee.css";

const Nominee = ({title, image, isSelected, onClick}) => {

    return(
        <div className={isSelected ? "nominee-container nominee-selected" : "nominee-container"}>
            <div className="nominee-title">{title}</div>
            <div className="nominee-photo">
                <img src={image} alt="nominee"/>
            </div>
            <button type="button" onClick={onClick}>Select</button>
        </div>
    );

}

export default Nominee;