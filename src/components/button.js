import React, { useState } from "react";
function Button (props) {

const [Color, setColor] = useState("gray");
   const changeValue = () => {
      (props.value==="OFF")?setColor("yellow"):setColor("gray");
       props.changeValue();
   }

    return (
        <>
        <div className='circle' style ={{backgroundColor : Color}} />
        <button className="button2" onClick={changeValue}>{props.value}</button>
        </>
    )
}
export default Button;
