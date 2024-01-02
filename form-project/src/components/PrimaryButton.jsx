import React from 'react';


const buttonStyle = {
    width: "376px",
    height: "56px",
    backgroundColor: "#242742", 
    color: "#FFF",
    textAlign: "center",
    borderRadius: "8px"

}

function PrimaryButton({ text, onClick }) {
    return (
        <button style={buttonStyle} onClick={onClick}> 
            {text}
        </button>
    )
}

export default PrimaryButton


