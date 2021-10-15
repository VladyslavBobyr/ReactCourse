import React from "react";
import './style.css'

class Task extends React.Component {
render() {
   const {text} = this.props
    return (
        <li className='task'><span>{text}</span></li>
    )
}
}
export default Task