import React from "react";
import './style.css'

class CustomInput extends React.Component {
render() {
   const {type, value, change, placeholder} = this.props
    return (
        <>
            <input type={type} value={value} onChange={change} placeholder={placeholder}/>
        </>
    )
}
}
export default CustomInput