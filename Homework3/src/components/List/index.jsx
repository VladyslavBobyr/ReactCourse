import React from "react";
import './style.css'
import Task from "../Task";

class List extends React.Component {
render() {
   const {tasks} = this.props
    return (
        <>
        <h4>List of tasks</h4>
        <ol className={'list'}>
            {tasks.map(e=>{
                return <Task text={e}/>
            })}
        </ol>
            </>
    )
}
}
export default List